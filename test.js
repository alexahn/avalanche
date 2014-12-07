var Avalanche = require('./index');

var patterns = [{
  regexp: new RegExp(/hello/),
  event: 'hello'
}, {
  regexp: new RegExp(/world/),
  event: 'world'
}];

// options object gets passed to stream transform
var options = {
  // the interval at which to slide the window
  paddingSize: 4,
  // the size of the window
  chunkSize: 16
};

var parser = new Avalanche(patterns, options);

parser.on('hello', function (match, chunk) {
  // match is a regex match object
  console.log('hello: match', match);
  console.log('hello: chunk', chunk);
});

parser.on('world', function (match, chunk) {
  // match is a regex match object
  console.log('world: match', match);
  console.log('world: chunk', chunk);
});

parser.on('error', function (error) {
  console.log('error', error);
});

parser.write('hello world');
