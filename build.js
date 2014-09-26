Error.stackTraceLimit = 500;

var aster = require('aster');

aster.src.registerParser('.js', require('aster-parse-esnext'));

aster.watch([
  'lib/**/*.js',
  '!node_modules/**'
])
.throttle(500)
.map(aster.dest('dist'))
.subscribe(aster.runner);