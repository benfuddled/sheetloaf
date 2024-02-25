📃🍞 Fresh-made stylesheets for the whole family

An alternative to postcss-cli for sass users. Compile sass files to CSS and transform using postcss, all in one command.

## Installation

Using npm (or your package manager of choice):

```
npm install sheetloaf
```

Sheetloaf also requires a peer dependency of postcss, so go ahead and run:

```
npm install postcss
```

## Usage

With a few exceptions, efforts have been made to match the postcss-cli option interface. See "Sass Options" for differences.

```
Usage:
  sheetloaf [input.scss] [OPTIONS] [-o|--output output.css] [--watch|-w]
  sheetloaf <input.scss>... [OPTIONS] --dir <output-directory> [--watch|-w]
  sheetloaf <input-directory> [OPTIONS] --dir <output-directory> [--watch|-w]
  sheetloaf <input-glob-pattern> [OPTIONS] --dir <output-directory> [--watch|-w]

Basic options:
  -o, --output   Output file                                            [string]
  -d, --dir      Output directory                                       [string]
  -w, --watch    Watch files for changes and recompile as needed       [boolean]

Options for use without a postcss config file:
  -u, --use      List of postcss plugins to use                          [array]

Options for use with --dir:
  --ext   Override the output file extension; for use with --dir        [string]
  --base  Mirror the directory structure relative to this path          [string]
          in the output directory, for use with --dir

Sass options:
  -s, --style         Output style. Possible values are "expanded",      [string]
                      or "compressed". Default: "expanded".
  --[no-]source-map   Whether to generate source maps. Default is on.   [boolean]
  --embed-source-map  Tells Sass to embed the contents of the source    [boolean]
                      map file in the generated CSS, rather than
                      creating a separate file and linking to it
                      from the CSS.
  --embed-sources     Embed the entire contents of the Sass files that  [boolean]
                      contributed to the generated CSS in the source map.
                      This may produce very large source maps, but it
                      guarantees that the source will be available on
                      any computer no matter how the CSS is served.
  -–source-map-urls   Controls how the source maps that Sass generates   [string]
                      link back to the Sass files that contributed to
                      the generated CSS. Possible values are "relative"
                      or "absolute". Default: "relative".
  --[no-]error-css    This flag tells Sass whether to emit a CSS file   [boolean]
                      when an error occurs during compilation. This
                      CSS file describes the error in a comment and in
                      the content property of body::before, so that
                      you can see the error message in the browser
                      without needing to switch back to the terminal.
  -I, --load-path     Adds an additional load path for Sass to look      [string]
                      for stylesheets.
  -p, --pkg-importer  Built-in importer(s) to use for pkg: URLs.         [string]
                      [node] Load files like Node.js package resolution.

Advanced options:
  --poll    Use polling for file watching. Can optionally pass polling [boolean]
            interval; default 100 ms
  --config  Set a custom directory to look for a config file            [string]
  --async   Use Sass's compileAsyc/compileStringAsync functions.       [boolean]
            This will be slower in most cases.

Misc:
  -v, --version  Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]

```

## Examples

```
sheetloaf scss/style.scss --output css/style.css --style compressed --use autoprefixer
```

Above is an example of transforming a sass file, compressing the output and using the
postcss plugin autoprefixer to add vendor prefixes. Note that postcss plugins will need to be installed
separately, so to use autoprefixer you'd first run:

```
npm install autoprefixer
```

---

You may also specify a glob pattern or directory as input like so:

```
sheetloaf "scss/**/*.scss" --dir css --style compressed --use autoprefixer
sheetloaf scss --dir css --style compressed --use autoprefixer
```

In this case we're using the --dir option in place of output. Sheetloaf will automatically ignore partial files whose names begin with \_.

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

### Why does this project exist? Justify your existence, sheetloaf!

I'll try.

### Why not just use a postcss plugins that process sass like postcss-scss?

Postcss-scss combined with other plugins like postcss-mixins gets you in the ballpark, but in my experience there are areas of sass syntax that get missed. Sheetloaf ensures all syntax in dart-sass is covered and rendered.

### Why not just use sass and pipe the output to postcss-cli?

This works great with single files but when you've got a filewatcher on multiple files this isn't possible.

You _could_ do something like render sass files, output them to a temp folder, and then when those files are modified, check that with chokidar and then call postcss-cli on them to do the rest of the job. This is what I did for a while and I found it to an extremely fiddly and inelegant solution.

### What's the benefit of using this over something like Gulp, Webpack, or Parcel?

For complex projects a more full-featured tool may be more useful, or if you prefer prefer processing all of your scripts/styles/etc in one place.

The benefit of Sheetloaf is fewer dependencies and build simplicity. I've used this tool for all of my personal web projects, and figured I'd polish it up and see if it helps anyone else.

### Can I use this with regular CSS files?

Yes, but you should use [postcss-cli](https://github.com/postcss/postcss-cli) in that case, as you'll be incurring a performance hit for no good reason. This project is intended to simplify the two-step process of rendering Sass files and then transforming the output with PostCSS.

Likewise, if all you're looking for is to compile Sass with no transformations, you can stick with [dart-sass](https://github.com/sass/dart-sass).

### Why doesn't sheetloaf support custom stringifiers/syntaxes/parsers?

I don't currently see a good use case for including these, since sheetloaf is currently intended to only be used with Sass files. I'm open to be proven wrong though!
