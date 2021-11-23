const picomatch = require('picomatch');
const fg = require('fast-glob');
const fs = require('fs');
const path = require('path');

/**
 * Generates an object used for postcss configuration.
 */
function generatePostcssConfig(config, use) {
	let obj = {
		plugins: []
	};
	// If user specifies --use, we ignore postcss config files.
	if (use) {
		use.split(',').forEach(function (plugin) {
			obj.plugins.push(require(plugin));
		});
	} else {
		let configFileLoc;
		if (config !== undefined) {
			configFileLoc = path.resolve(process.cwd(), config, 'postcss.config.js');
		} else {
			configFileLoc = path.resolve(process.cwd(), 'postcss.config.js');
		}

		try {
			fs.lstatSync(configFileLoc);
			obj = require(configFileLoc);
		} catch (e) {
			// TODO
		}
	}
	return obj;
}

/**
 * Given an array of input sources, expand any globs and validate that inputs exist.
 *
 */
function expandGlob(input, callback, index = 0, expanded = []) {
	if (index < input.length) {
		let isGlob = false;
		let isDir = false;
		let isFile = false;

		isGlob = picomatch.scan(input[index]).isGlob;

		if (isGlob === false) {
			try {
				isDir = fs.lstatSync(path.normalize(input[index])).isDirectory();
				isFile = fs.lstatSync(path.normalize(input[index])).isFile();
			} catch (err) {
				throw err;
			}
		}

		if (isGlob || isFile) {
			let files = fg
				.sync(input[index], {
					dot: true
				})
				.map((entry) => path.normalize(entry));
			expanded.push(...files);

			index = index + 1;
			expandGlob(input, callback, index, expanded);
		} else if (isDir) {
			let dir = input[index];

			fs.readdir(dir, (err, files) => {
				if (err) {
					throw err;
				} else {
					files.forEach((file) => {
						let fullname = path.join(dir, file);
						if (!fs.lstatSync(fullname).isDirectory()) {
							expanded.push(fullname);
						}
					});

					index = index + 1;
					expandGlob(input, callback, index, expanded);
				}
			});
		}
	} else {
		callback(expanded);
	}
}

/**
 *
 * @param filename
 * @returns path, or a blank string if the combination of options provided does not give a valid path.
 */
function createDestination(filename, outFile, dir, base, extension, usingStdin) {
	let result = '';
	let mirror = '';

	if (!outFile) outFile = '';
	if (!extension) extension = '.css';

	if (usingStdin === true) {
		if (outFile.length > 0) {
			result = outFile;
		} else {
			result = '';
		}
	} else {
		if (!dir) dir = '';
		if (!base) base = '';

		if (dir.length > 0) {
			if (base.length > 0) {
				mirror = path.dirname(filename.replace(path.join(base, '/'), ''));
			}
			result = path.join(dir, mirror, path.basename(filename, path.extname(filename)) + extension);
		} else if (outFile.length > 0) {
			result = outFile;
		} else {
			result = '';
		}
	}

	return result;
}

exports.expandGlob = expandGlob;
exports.createDestination = createDestination;
exports.generatePostcssConfig = generatePostcssConfig;
