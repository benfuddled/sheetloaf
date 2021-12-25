#!/usr/bin/env node
const chokidar=require("chokidar"),color=require("picocolors"),{Command}=require("commander"),fs=require("fs"),path=require("path"),postcss=require("postcss"),sass=require("sass"),parser=require("./parser"),ver=require("../package.json").version,sheetloaf=new Command;let postcssConfig={plugins:[]},usingStdin=!1;sheetloaf.version(ver,"-v, --version","Print the version of Sheetloaf."),sheetloaf.arguments("[sources...]").description("\u{1F4C3}\u{1F35E} Compile Sass to CSS and transform the output using PostCSS all in one command.").action(o=>{if(o.length>0)init(o);else if(!process.stdin.isTTY){let e="";process.stdin.on("readable",function(){var t=this.read();t!==null&&(e+=t)}),process.stdin.on("end",function(){usingStdin=!0,init(e)})}}),sheetloaf.option("-o, --output <LOCATION>","Output file.").option("--dir <LOCATION>","Output directory.").option("--base <DIR>","Mirror the directory structure relative to this path in the output directory, for use with --dir.","").option("--ext <EXTENSION>","Override the output file extension; for use with --dir",".css").option("-s, --style <NAME>",'Output style. ["expanded", "compressed"]',"expanded").option("--source-map","Generate a source map (this is the default option).").option("--no-source-map","Do not generate a source map.").option("--embed-source-map","Embed the contents of the source map file in the generated CSS, rather than creating a separate file and linking to it from the CSS.").option("--embed-sources","Embed the entire contents of the Sass files that contributed to the generated CSS in the source map.").option("--source-map-urls <TYPE>",'Controls how the source maps that Sass generates link back to the Sass files  that contributed to the generated CSS. ["relative", "absolute"]',"relative").option("--error-css","Emit a CSS file when an error occurs during compilation (this is the default option).").option("--no-error-css","Do not emit a CSS file when an error occurs during compilation.").option("-I, --load-path <PATHS>","Adds an additional load path for Sass to look for stylesheets.").option("-w, --watch","Watch stylesheets and recompile when they change.").option("--config <LOCATION>","Set a custom directory to look for a postcss config file.").option("--poll [DURATION]","Use polling for file watching. Can optionally pass polling interval; default 100 ms").option("-u, --use <PLUGINS>","List of postcss plugins to use. Will cause sheetloaf to ignore any config files."),sheetloaf.parse(process.argv);function init(o){postcssConfig=parser.generatePostcssConfig(sheetloaf.opts().config,sheetloaf.opts().use),usingStdin===!0?render(o):(parser.expandGlob(o[0].split(","),function(e){e.forEach(function(t){path.basename(t).charAt(0)!=="_"&&render(t)})}),watch(o))}function watch(o){sheetloaf.opts().watch===!0&&chokidar.watch(o[0].split(","),{usePolling:sheetloaf.opts().poll!==void 0,interval:typeof sheetloaf.opts().poll=="number"?sheetloaf.opts().poll:100,ignoreInitial:!0,awaitWriteFinish:{stabilityThreshold:1500,pollInterval:100}}).on("change",e=>{console.log(`File changed: ${e}`),parser.expandGlob(o[0].split(","),function(t){t.forEach(function(i){path.basename(i).charAt(0)!=="_"&&render(i)})})}).on("add",e=>{console.log(`File added: ${e}`),parser.expandGlob(o[0].split(","),function(t){t.forEach(function(i){path.basename(i).charAt(0)!=="_"&&render(i)})})})}function render(o){usingStdin===!1&&console.log(`Rendering ${o}...`);let e=parser.createDestination(o,sheetloaf.opts().output,sheetloaf.opts().dir,sheetloaf.opts().base,sheetloaf.opts().ext,usingStdin),t=generateSassOptions(o,e),i={inline:sheetloaf.opts().embedSourceMap===!0,absolute:sheetloaf.opts().sourceMapUrls==="absolute",sourcesContent:sheetloaf.opts().embedSources===!0};usingStdin===!1&&sheetloaf.opts().sourceMap===!1&&(i=!1);try{let n=sass.renderSync(t);postcss(postcssConfig.plugins).process(n.css.toString(),{from:n.stats.entry,to:e,map:i}).then(s=>{if(s.warnings().forEach(r=>{process.stderr.write(r.toString())}),e!==""){try{fs.mkdirSync(path.dirname(e),{recursive:!0})}catch(r){if(r.code!=="EEXIST"||r.code!=="EISDIR")throw r}fs.writeFile(e,s.css,r=>{if(r)throw r;console.log(color.green(`Successfully written to ${e}`))}),s.map&&fs.writeFile(e+".map",s.map.toString(),r=>{if(r)throw r})}else process.stdout.write(s.css)}).catch(s=>{e!==""?console.log(color.red(s)):process.stderr.write(s)})}catch(n){if(e!==""){console.log(color.red(n.formatted));try{fs.mkdirSync(path.dirname(e),{recursive:!0})}catch(s){if(s.code!=="EEXIST"||s.code!=="EISDIR")throw s}sheetloaf.opts().errorCss!==!1&&fs.writeFile(e,emitSassError(n),s=>{if(s)throw s;console.log(color.yellow(`Emitted error to ${e}`))})}else process.stderr.write(n.formatted);!sheetloaf.opts().watch&&(process.exitCode==null||process.exitCode===0)&&(process.exitCode=1)}}function generateSassOptions(o,e){let t={outFile:e,outputStyle:sheetloaf.opts().style,includePaths:sheetloaf.opts().loadPath?sheetloaf.opts().loadPath.split(","):[]};return usingStdin===!0?(t.data=o,t.sourceMap=!1,t.sourceMapContents=!1,t.sourceMapEmbed=!1):(t.file=o,t.sourceMap=sheetloaf.opts().sourceMap!==!1,t.sourceMapContents=sheetloaf.opts().sourceMap!==!1,t.sourceMapEmbed=sheetloaf.opts().sourceMap!==!1),t}function emitSassError(o){let e=o.formatted.substr(0,o.formatted.indexOf("^")).replace(/(\r\n|\n|\r)/gm," ").replace(/'/,"").replace(/╷.*?│/,"").replace(/│/,"").replace("'","").replace("'",""),t=o.file.replace(/\\/g,"/");return`body:before { content: 'Line ${o.line}: ${e}';display: table;background-color:#cc0000;color:white;border-radius:5px;margin-bottom:5px;padding:5px;font-family:sans-serif}body:after { content: '${t}';display: table;background-color:#0e70b0;color:white;border-radius:5px;padding:5px;margin-bottom: 5px;font-family:sans-serif}body * { display: none; }`}
