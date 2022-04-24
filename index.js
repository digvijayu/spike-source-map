global.XMLHttpRequest = require('xhr2');
const StackFameGPS = require('stacktrace-gps');
const StackFrame = require('stackframe');
const SourceMap = require("source-map");

let href = "https://code.jquery.com/jquery-3.6.0.min.js"

let stackframe = new StackFrame({
  // fileName: "./mock-files/simple-function/func.min.js",
  fileName: href,
  lineNumber: 1,
  columnNumber: 33
});


var callback = function myCallback(foundFunctionName) { console.log(foundFunctionName); };

var errback = function myErrback(error) { console.log(error); };

let gps = new StackFameGPS({ offline: true});

gps.sourceCache[href] = source;
gps.sourceMapConsumerCache[`${href}.map`] = new SourceMap.SourceMapConsumer(await this.getFileFromBucket(file.map));

gps.pinpoint(stackframe).then(callback, errback);