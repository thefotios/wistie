var chai = require('chai');
var stream = require('mock-utf8-stream');

describe("Wistie logger reformatter", function() {
    it("should prepend stdin with a string", function() {
        process.stdin = stream.MockReadableStream();
        process.stdout = stream.MockWritableStream();
        process.stdout.captureData();

        var wistie = require("../lib/wistie");
        wistie(function(line) { return "TEST_FORMAT\n"; });

        expect(process.stdout.capturedData).to.equal("TEST_FORMAT\n");

    });
});

