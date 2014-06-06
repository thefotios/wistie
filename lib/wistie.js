var split = require('split');
var through = require('through');
var hostname = require('os').hostname();

module.exports = function(format) {
    function write(line) {
        this.queue(format(line));        
    }

    function end() {
        this.emit('end')
    }

    process.stdin.pipe(split()).pipe(through(write,end)).pipe(process.stdout);
}
