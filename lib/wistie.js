var split = require('split');
var through = require('through');
var hostname = require('os').hostname();

module.exports = function(format) {
    //Writer function for through
    function write(line) {
        this.queue(format(line));        
    }

    //End function for through
    function end() {
        this.emit('end')
    }

    //Pipe it all together!
    process.stdin.pipe(split()).pipe(through(write,end)).pipe(process.stdout);
}
