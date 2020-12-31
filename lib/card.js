const boxen = require("boxen");
const data = require("./chalkData");

module.exports = boxen(
  [
    `${data.name}`,
    `   ${data.title}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGithub}  ${data.github}`,
    `${data.labelNpm}  ${data.npm}`,
    `${data.labelLinkedin}  ${data.linkedin}`,
    `${data.labelWebsite}  ${data.website}`,
    ``,
    `${data.labelNpx}  ${data.npx}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "round",
    borderColor: "blue",
  }
);
