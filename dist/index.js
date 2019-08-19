var path = require("path");

module.exports = function(content) {
  var outPath = path.join('../generated', this.resourcePath.slice(this.rootContext.length))

  this.emitFile(outPath, content);
  return content
}
module.exports.raw = true;
