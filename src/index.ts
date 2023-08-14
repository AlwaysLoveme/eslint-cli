import fs from "fs-extra";
import pkg from "../package.json";
import { Command } from "commander";

import ora from "ora";
import chalk from "chalk";
import cFonts from "cfonts";
import { execa } from "execa";
import inquirer from "inquirer";
import {
  prettier,
  eslintConfig,
  eslintReactConfig,
  eslintIgnore,
} from "./template/lint.js";

const log = console.log;
const commander = new Command();
const spinner = ora({
  spinner: "bounce",
  discardStdin: false,
});
const cwd = process.cwd();

commander.version(pkg.version);
commander
  .command("init")
  .description("generate eslint configure")
  .action(async () => {
    cFonts.say("Eslint-Init", {
      tiny: true,
      font: "block", // define the font face
      align: "center", // define text alignment
      //colors: ["greenBright", "yellow"], // define all colors
      background: "transparent", // define the background color, you can also use `backgroundColor` here as key
      letterSpacing: 1, // define letter spacing
      lineHeight: 1, // define the line height
      space: true, // define if the output text should have empty lines on top and on the bottom
      maxLength: "0", // define how many character can be on one line
      gradient: ["#f80", "yellow"], // define your two gradient colors
      independentGradient: false, // define if you want to recalculate the gradient for each new line
      transitionGradient: false, // define if this is a transition between colors directly
      env: "node", // define the environment cfonts is being executed in
    });
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "packageTool",
        default: "npm install",
        message: "Please select package tool",
        choices: [
          {
            name: "npm",
            value: "npm install",
          },
          {
            name: "yarn",
            value: "yarn add",
          },
          {
            name: "pnpm",
            value: "pnpm add",
          },
        ],
      },
      {
        type: "list",
        name: "type",
        default: 0,
        message: "Please select project type",
        choices: [
          {
            name: "Typescript",
            value: 0,
          },
          {
            name: "React + Typescript",
            value: 1,
          },
          {
            name: "Vue3 + Typescript",
            value: 2,
          },
        ],
      },
    ]);

    await fs.writeFile(`${cwd}/.eslintignore`, eslintIgnore);
    await execa("npm", [
      "pkg",
      "set",
      `scripts.lint="eslint --fix . --ext .ts"`,
      "--json",
    ]);

    const [packageTool, command] = answer.packageTool.split(" ");
    const commonDepend =
      "@typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript eslint-config-prettier prettier";
    const reactDepend =
      "eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh";
    switch (answer.type) {
      case 0:
        spinner.start(
          "installing dependencies: " + chalk.greenBright(commonDepend),
        );
        try {
          await execa(packageTool, [command, ...commonDepend.split(" ")]);
          await fs.writeFile(`${cwd}/.prettierrc.js`, prettier);
          await fs.writeFile(`${cwd}/.eslintrc.cjs`, eslintConfig);

          spinner.succeed("eslint configured successfully");
        } catch (error) {
          spinner.fail(JSON.stringify(error));
          process.exit(1);
        }
        break;
      case 1:
        spinner.start(
          "installing dependencies: " +
            chalk.greenBright(commonDepend + " " + reactDepend),
        );
        try {
          await execa(packageTool, [
            command,
            ...commonDepend.split(" "),
            ...reactDepend.split(" "),
          ]);
          await fs.writeFile(`${cwd}/.prettierrc.js`, prettier);
          await fs.writeFile(`${cwd}/.eslintrc.cjs`, eslintReactConfig);
          spinner.succeed("eslint configured successfully");
        } catch (error) {
          spinner.fail(JSON.stringify(error));
          process.exit(1);
        }
        break;
      case 2:
        log(chalk.greenBright("coming soon!"));
        break;
    }
  });

commander.parse(process.argv);
