#Wistie
Wistie reformats stdin that is piped to it. I was having problems distinguishing log entries from multiple servers that were aggregated using Apache Flume.

Install wistie globally

    npm install -g wistie

Using any module that logs to stdout you can pipe it to Wistie.

    node app.js | wistie

Wistie will check the directory that it's run in for a `wistie_formatter.js` that exports a formatting function.

``` js
module.exports = function(line) {
	return "--Some Prepend-- "+line+"\n";
}
```
