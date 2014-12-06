var StreamParser = require('./index');

var patterns = [{
  regexp: new RegExp(/hello/),
  event: 'hello'
}, {
  regexp: new RegExp(/world/),
  event: 'world'
}];

var options = {};

var parser = new StreamParser(patterns, options);

parser.on('hello', function (match, chunk) {
  console.log('hello: match', match);
  console.log('hello: chunk', chunk);
});

parser.on('world', function (match, chunk) {
  console.log('world: match', match);
  console.log('world: chunk', chunk);
});

parser.on('error', function (error) {
  console.log('error', error);
});

parser.pipe(process.stdout);
parser.write('hello world');
