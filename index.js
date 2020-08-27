const jq = require("node-jq");

jq.run(".", { foo: "bar" }, { input: "json" }).then(console.log);
