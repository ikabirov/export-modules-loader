var path = require("path");

module.exports = function(content) {
  var outPath = path.join('../generated', this.resourcePath.slice(this.rootContext.length))
  if (!outPath.endsWith('.js'))
  {
    outPath += '.js';
  }

  this.emitFile(outPath, content);
  return content
}
module.exports.raw = true;
