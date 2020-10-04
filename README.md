🍖 Fresh-made stylesheets for the whole family - an alternative to postcss-cli for sass users. Compile sass files to CSS and transform using postcss, all in one command.

WARNING: This project is still early on and should be considered alpha quality. Expect bugs and missing features, but please feel free to install and file any issues you find :)

## Usage

```
Usage:
  sheetloaf [input.css] [OPTIONS] [-o|--output output.css] [--watch|-w]
  sheetloaf <input.css>... [OPTIONS] --dir <output-directory> [--watch|-w]
  sheetloaf <input-directory> [OPTIONS] --dir <output-directory> [--watch|-w]
  sheetloaf <input-glob-pattern> [OPTIONS] --dir <output-directory> [--watch|-w]

Basic options:
  -o, --output   Output file                                            [string]
  -d, --dir      Output directory                                       [string]
  -w, --watch    Watch files for changes and recompile as needed       [boolean] 
  --verbose      Be verbose                                            [boolean] // todo
  --env          A shortcut for setting NODE_ENV                        [string] // todo

Sass options:
  -s, --style        Output style. Possible values are "expanded",      [string]
                     or "compressed". Default: "expanded".
  --[no-]source-map  Whether to generate source maps. Default is on.   [boolean]
  --[no-]emit-error  This flag tells Sass whether to emit a CSS file   [boolean]
                     when an error occurs during compilation. This 
                     CSS file describes the error in a comment and in
                     the content property of body::before, so that 
                     you can see the error message in the browser 
                     without needing to switch back to the terminal.

Options for use without a postcss config file:
  -u, --use      List of postcss plugins to use                          [array]
  --parser       Custom postcss parser                                  [string] // todo
  --stringifier  Custom postcss stringifier                             [string] // todo
  --syntax       Custom postcss syntax                                  [string] // todo

Options for use with --dir:
  --ext   Override the output file extension; for use with --dir        [string]
  --base  Mirror the directory structure relative to this path          [string]
          in the output directory, for use with --dir     

Advanced options:
  --poll    Use polling for file watching.                             [boolean] // todo
  --config  Set a custom directory to look for a config file            [string]

Misc:
  -v, --version  Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]

```

## Examples

```
sheetloaf scss/style.scss --output css/style.css --style compressed --use autoprefixer
```

Above is an example of transforming a sass file, compressing the output and using the 
postcss plugin autoprefixer to add vendor prefixes. Sheetloaf will automatically ignore 
partial files whose names begin with _. Note that postcss plugins will need to be installed
separately, so to use autoprefixer you'd run:

```
npm install autoprefixer
```

---

You may also specify a glob pattern like so:

```
sheetloaf "scss/**/*.scss" --dir css --style compressed --use autoprefixer
sheetloaf scss --dir css --style compressed --use autoprefixer
```

In this case we're using the --dir option in place of output.

For best results when using a glob pattern, make sure to use quotes to avoid side-issues. See https://medium.com/@jakubsynowiec/you-should-always-quote-your-globs-in-npm-scripts-621887a2a784


Sheetloaf also allows for piping!

```
// stdin
cat scss/style.scss | sheetloaf --use autoprefixer --output css/style.css

// stdout
sheetloaf scss/style.scss --use autoprefixer > style.css

// stdout and logging to stderr
sheetloaf scss/style.scss --use autoprefixer 2> error.txt 1> style.css 

// all together now!
cat scss/style.scss | sheetloaf --use autoprefixer 2> error.txt 1> style.css 
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

Many of these are already implemented in dart-sass/postcss, and the plan is to make them work as similarly to those tools as possible.

* Currently, --source-map only allows for embedded source maps. A future release will allow for the choice between embedded and external source maps.

* When an error occurs, emit a stylesheet describing it. 