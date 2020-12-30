const { render } = require("prettyjson");
const data = require("./lib/data");

const renderOpts = {
  dashColor: "cyan",
  keysColor: "magenta",
  stringColor: "white",
};

module.exports = ({ json }) =>
  json ? JSON.stringify(data) : render(data, renderOpts);
