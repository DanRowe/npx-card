const data = require("./lib/data");
const card = require("./lib/card");

module.exports = ({ json }) => (json ? JSON.stringify(data) : card);
