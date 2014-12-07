# Avalanche
A minimal regex pattern matcher for streams.

# Example
```
var Avalanche = require('avalanche');

var patterns = [{
  regexp: new RegExp(/hello/),
  event: 'hello'
}, {
  regexp: new RegExp(/world/),
  event: 'world'
}];

// options object gets passed to stream transform
var options = {};

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
```

# Todo
* Implement a sliding window with a set buffer size (for guarantees on pattern matching)
