const chalk = require("chalk");
const data = require("./data");

module.exports = {
  name: chalk.bold.green("                  Daniel Rowe"),
  title: chalk.magenta(data.title),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("drowe_dev"),
  github: chalk.gray("https://github.com/") + chalk.green("DanRowe"),
  npm: chalk.gray("https://www.npmjs.com/") + chalk.red("~danrowe"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("danjrowe"),
  website: chalk.yellow("https://drowe.dev"),
  npx: chalk.green("npx") + " " + chalk.white("danrowe"),

  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGithub: chalk.white.bold("     GitHub:"),
  labelNpm: chalk.white.bold("        npm:"),
  labelLinkedin: chalk.white.bold("   LinkedIn:"),
  labelWebsite: chalk.white.bold("    Website:"),
  labelNpx: chalk.white.bold("       Card:"),
};
