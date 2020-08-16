# 🍖 Sheetloaf

Compile Sass to CSS and transform using PostCSS, all in one command.

WARNING: This project is still early on and may be buggy. 

## FAQ

> Can I use this with regular CSS files?

Yes, but you should use [postcss-cli](https://github.com/postcss/postcss-cli) in that case, as you'll be incurring a performance hit for no good reason. This project is intended to simplify the two-step process of rendering Sass files and then transforming the output with PostCSS.

Likewise, if all you're looking for is to compile Sass with no transformations, you can stick with [dart-sass](https://github.com/sass/dart-sass).

```
Usage:
  sheetloaf [input.scss] [output.css] [OPTIONS]
  sheetloaf <input-directory> <output-directory> [OPTIONS]
  sheetloaf <input-glob-pattern> <output-directory> [OPTIONS] 

Options:
  -v, --version        Print the version of Sheetloaf.
  -w, --watch          Watch stylesheets and recompile when they change.
  -h, --help           display help for command

Sass Options:
  -s, --style <NAME>   Output style. ["expanded", "compressed"] (default: "expanded")

PostCSS-CLI Options:
  --config <LOCATION>  Set a custom directory to look for a postcss config file.
  -u, --use <PLUGIN>   List of postcss plugins to use (will make sheetloaf ignore any config files).
```