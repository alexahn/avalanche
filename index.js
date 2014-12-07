var Soil = require('soil');
var util = require('util');

function StreamParser (patterns, options) {
  var self = this;
  if (!(self instanceof StreamParser)) {
    return new StreamParser(patterns, options);
  }
  if (!patterns) patterns = [];
  if (!options) options = {};
  Soil.call(self, options);
  self.patterns = patterns;
  self.options = options;
}

util.inherits(StreamParser, Soil);

StreamParser.prototype.transform = function (data, encoding, callback) {
  var self = this;
  self.patterns.forEach(function(pattern, index, array) {
    var dataUTF8 = data.toString('utf8');
    var match = dataUTF8.match(pattern.regexp);
    if (match) {
      self.emit(pattern.event, match, data, encoding);
    }
  });
  callback(null, data);
};

module.exports = StreamParser;
