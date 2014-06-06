#Wistie
Wistie reformats stdin that is piped to it. I was having problems distinguishing log entries from multiple servers that were aggregated using Apache Flume.

Using any module that logs to stdout you can pipe it to Wistie.

    node app.js | wistie
