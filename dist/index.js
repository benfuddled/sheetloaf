'use strict'

const { Command } = require('commander')

const program = new Command()

program
	.option('-o, --output <LOCATION>', 'Output file.')
	.option('--dir <LOCATION>', 'Output directory.')
	.option(
		'--base <DIR>',
		'Mirror the directory structure relative to this path in the output directory, for use with --dir.',
		''
	)
	.option(
		'--ext <EXTENSION>',
		'Override the output file extension; for use with --dir',
		'.css'
	)
	.option(
		'-s, --style <NAME>',
		'Output style. ["expanded", "compressed"]',
		'expanded'
	)
	.option(
		'--source-map',
		'Generate a source map (this is the default option).'
	)
	.option('--no-source-map', 'Do not generate a source map.')
	.option(
		'--embed-source-map',
		'Embed the contents of the source map file in the generated CSS, rather than creating a separate file and linking to it from the CSS.'
	)
	.option(
		'--embed-sources',
		'Embed the entire contents of the Sass files that contributed to the generated CSS in the source map.'
	)
	.option(
		'--source-map-urls <TYPE>',
		'Controls how the source maps that Sass generates link back to the Sass files that contributed to the generated CSS. ["relative", "absolute"]',
		'relative'
	)
	.option(
		'--error-css',
		'Emit a CSS file when an error occurs during compilation (this is the default option).'
	)
	.option(
		'--no-error-css',
		'Do not emit a CSS file when an error occurs during compilation.'
	)
	.option(
		'-I, --load-path <PATHS>',
		'Adds an additional load path for Sass to look for stylesheets.'
	)
	.option('-w, --watch', 'Watch stylesheets and recompile when they change.')
	.option(
		'--config <LOCATION>',
		'Set a custom directory to look for a postcss config file.'
	)
	.option(
		'--poll [DURATION]',
		'Use polling for file watching. Can optionally pass polling interval; default 100 ms'
	)
	.option(
		'-u, --use <PLUGINS>',
		'List of postcss plugins to use. Will cause sheetloaf to ignore any config files.'
	)

function main() {
	console.log('it begins again')
}

main()
