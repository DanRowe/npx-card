#!/usr/bin/env node

const minimist = require("minimist");
const clear = require("clear");
const pkg = require(".");

const options = {
  alias: { json: "j" },
};
const argv = minimist(process.argv.slice(2), options);

clear();
console.log(pkg(argv));