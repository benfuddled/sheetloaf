const picomatch = require('picomatch');
const fg = require('fast-glob');
const fs = require('fs');
const path = require('path');

/**
 * Given an array of input sources, expand any globs and validate that inputs exist.
 *
 */
function expandGlob(input: string[], callback, index: number = 0, expanded: string[] = []) {
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

exports.expandGlob = expandGlob;
