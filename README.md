🍖 Fresh-made stylesheets for the whole family. Compile sass files to CSS and transform using postcss, all in one command.

WARNING: This project is still early on and should be considered alpha quality. Expect bugs and missing features, but please feel free to install and file any issues you find :)

## Usage

```
Usage:
  sheetloaf [input.scss...] [output.css] [OPTIONS]
  sheetloaf <input-directory...> <output-directory> [OPTIONS]
  sheetloaf <input-glob-pattern...> <output-directory> [OPTIONS] 

Options:
  -v, --version        Print the version of Sheetloaf.
  -w, --watch          Watch stylesheets and recompile when they change.
  -h, --help           display help for command

Sass Options:
  -s, --style <NAME>   Output style. ["expanded", "compressed"] (default: "expanded")
  --[no-]source-map    Whether to generate source maps. (defaults to on)

PostCSS-CLI Options:
  --config <LOCATION>  Set a custom directory to look for a postcss config file.
  -u, --use <PLUGIN>   List of postcss plugins to use (will make sheetloaf ignore any config files).
```

## Examples

```
sheetloaf ./scss/style.scss ./css/style.css --style compressed --use autoprefixer
```

Above is an example of transforming a sass file, compressing the output and using the 
postcss plugin autoprefixer to add vendor prefixes. Note that postcss plugins will need
to be installed separately, so to use autoprefixer you'd run:

```
npm install autoprefixer
```

---

You may also specify a glob pattern like so:

```
sheetloaf "./scss/**/*.scss" "./css" --style compressed --use autoprefixer
```

For best results when using a glob pattern, make sure to use quotes to avoid side-issues. See https://medium.com/@jakubsynowiec/you-should-always-quote-your-globs-in-npm-scripts-621887a2a784

---

Or a directory (note that this is not recursive):

```
sheetloaf ./scss/ ./css/ --style compressed --use autoprefixer
```

## FAQ

### Can I use this with regular CSS files?

Yes, but you should use [postcss-cli](https://github.com/postcss/postcss-cli) in that case, as you'll be incurring a performance hit for no good reason. This project is intended to simplify the two-step process of rendering Sass files and then transforming the output with PostCSS.

Likewise, if all you're looking for is to compile Sass with no transformations, you can stick with [dart-sass](https://github.com/sass/dart-sass).

### Do all postcss plugins work?

Yes, they should. However custom stringifiers/parsers are not currently supported.

### What's the benefit of using this over something like Gulp, Webpack, or Parcel?

For complex projects a more full-featured tool may be more useful, or if you prefer prefer processing all of your scripts/styles/etc in one place. 

The benefit of Sheetloaf is fewer dependencies and build simplicity. I've used this tool for all of my personal web projects, and figured I'd polish it up and see if it helps anyone else.

## Known Issues/Feature Requests

Many of these are already implemented in dart-sass/postcss, and the plan, like most other options, is to make them work as similarly to those tools as possible.

* Currently, --source-map only allows for embedded source maps. A future release will allow for the choice between embedded and external source maps.

* Allow piping content from stdin.

* When an error occurs, emit a stylesheet describing it. 


if no -o arg is provided, this will write to stdout