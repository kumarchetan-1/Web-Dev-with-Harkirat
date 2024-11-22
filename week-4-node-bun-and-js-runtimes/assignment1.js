// import chalk from "chalk";

// console.log(chalk.blue("Hello World!"))
// console.log(chalk.red.bold("Error: This is an error message!"))
// console.log(chalk.green.underline("This is a success message!"))

// const path = require("path")
const fs = require("fs")
const { Command } = require('commander');
// console.log(path.join(__dirname, "index.js")) // it automatically handles the missing path otherwise we can just use the concatination of the strings



const program = new Command();
// const filePath = path.join(__dirname, "fileName")
let totalWords = 0


program
  .name('word-count')
  .description('CLI to calculte number of words in a file')
  .version('0.8.0')
  .command("count")
  .argument('<file>', 'file to count words from')
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data)=>{
        if (err) {
            console.error("Error reading the file:", err.message);
            return;
          }
        totalWords = data.split(" ").length
        console.log(`Total words in this file are ${totalWords}`);
    })
    
  });

program.parse();