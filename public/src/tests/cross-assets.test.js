define(["intern!object", "intern/chai!assert", "dojo/has", "dojo/sniff", "dojo/query", "dojo/domReady!"], function (registerSuite, assert, has) {
    registerSuite({
        name: "cross-assets",
        "example test": function () {
            assert.strictEqual(true, true, "True should be true");
        }
    });
});