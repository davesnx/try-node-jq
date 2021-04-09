const jq = require("node-jq");

const filter = ".";

const options = {
  output: "pretty",
  slurp: false,
};

jq.run(filter, `./package.json`, options)
  .then(console.log)
  .catch(console.error);
