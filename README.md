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

The result

```
--Some Prepend-- [2014-06-05 23:09:33.606] [INFO] app - mode:development

--Some Prepend-- [2014-06-05 23:09:33.608] [WARN] app - Missing SSL config files. (Error: ENOENT, no such file or directory '/dev/site/sslcert/server.key')

--Some Prepend-- [2014-06-05 23:09:33.620] [INFO] app - Express HTTP server listening on port 8080
```
