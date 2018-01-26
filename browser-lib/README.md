# Using this library from the browser

This folder includes the resources to build a bundle that can be used from the browser.

If you need to build the dist folder, then place the correct version of libsvm (from README) into the libsvm folder, install emscripten and then run the makefile.

Afterwards, you can install webpack (if you don't have it globally yet), and then run it inside this folder by typing ```webpack``` in a terminal. This creates a bundle.js including the SVM library available as part of the window Object in the browser.

Then, put the index.html, the bundle.js files and the compiled wasm file from the dist folder in a single folder, start a webserver and then visit the page. In a UNIX machine with node js this can be done like this:

```
npm install -g webpack
webpack
npm install -g http-server
http-server .
```

Then visit the port (usually 8080), and look for the result in the console tab of developer tools.

*disclaimer:* this was only tested with Firefox 52.5.2  and Chrome 62.0 under Debian.
