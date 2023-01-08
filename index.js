#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const toDoList = [];
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let title = await chalkAnimation.rainbow(`|||     WORD COUNTER    |||`);
    await sleep();
    title.stop();
}
await welcome();
async function questions() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'paragraph',
            message: 'enter Paragraph',
        },
    ]);
    const { paragraph } = answers;
    if (paragraph) {
        console.log(chalk.greenBright('Total Words in Your paragraph are ', paragraph.trim().split(" ").length));
    }
}
questions();
