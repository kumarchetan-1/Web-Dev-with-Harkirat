const fs = require("fs");
const { Command } = require("commander");
const internal = require("stream");

const program = new Command()

program
  .name("TodoApplicatio")
  .description("A CLI to just Create, Update, Delete the task in a JSON File")
  .version("1.0.0")

program.command('add')
  .description("This command will let you add the task in the Json file")
  .argument("<todoString>", "Task to add")
  .argument("<timeStamp>", "Time to do that task")
  .action((todoString, timeStamp) => {
    let todoObj = {
      task: todoString,
      time: timeStamp
    }

    fs.readFile("todo-list.json", "utf-8", (readErr, data) => {
      let tasks = []
      if (!readErr) {
        try {
          tasks = JSON.parse(data)
          console.log(tasks)
        } catch (parseErr) {
          console.log("Error parsing existing tasks, starting with an empty list.");
        }
      } else {
        console.log(`Error in reading file ${readErr.message}`)
      }

      tasks.push(todoObj)
      let jsonData = JSON.stringify(tasks, null, 2)
      fs.writeFile("todo-list.json", jsonData, (err) => {
        if (err) {
          console.log("Error in Writing in file");
        } else {
          console.log("Data added successfully to the json file.");
        }
      })
    })
  })

program.command('remove')
  .description("This command will let you remove the task from the Json file")
  .argument("<taskToRemove>", "Task to remove")
  .action((taskToRemove) => {
    fs.readFile("todo-list.json", "utf-8", (readErr, data) => {
      let tasks = []
      if (!readErr) {
        try {
          tasks = JSON.parse(data)
          const initialLength = tasks.length
          tasks = tasks.filter(item => item["task"] !== taskToRemove)
          if (tasks.length === initialLength) {
            console.log("Task not found");
            return
          }
        } catch (parseErr) {
          console.log("Error parsing existing tasks, starting with an empty list.");

        }
      } else {
        console.log(`Error in reading file ${readErr.message}`)
      }
      
      // tasks.push(todoObj)
      let jsonData = JSON.stringify(tasks, null, 2)
      fs.writeFile("todo-list.json", jsonData, (err) => {
        if (err) {
          console.log("Error in Writing in file");
        } else {
          console.log("Data removed successfully from the json file.");
        }
      })
    })
  })


program.command('update')
  .description("This command will let you update the task in the Json file")
  .argument("<taskToUpdate>", "Task to update")
  .argument("<updatedTask>", "Task to update with")
  .action((taskToUpdate, updatedTask) => {
    fs.readFile("todo-list.json", "utf-8", (readErr, data) => {
      let tasks = []
      if (!readErr) {
        try {
          tasks = JSON.parse(data)
          const taskIndex = tasks.findIndex(item => item["task"] == taskToUpdate)
          if (taskIndex !== -1) {
            tasks[taskIndex]["task"] = updatedTask
          }
        } catch (parseErr) {
          console.log("Error parsing existing tasks, starting with an empty list.");
        }
      } else {
        console.log(`Error in reading file ${readErr.message}`)
      }
      let jsonData = JSON.stringify(tasks, null, 2)
      fs.writeFile("todo-list.json", jsonData, (err) => {
        if (err) {
          console.log("Error in Writing in file");
        } else {
          console.log("Data removed successfully from the json file.");
        }
      })
    })
  })

program.command('showMyTasks')
  .description("This command will let you view all the tasks in you JSON file.")
  .action(() => {
    fs.readFile("todo-list.json", "utf-8", (readErr, data) => {
      let tasks = []
      if (!readErr) {
        try {
          tasks = JSON.parse(data)
          console.log(tasks)
        } catch (parseErr) {
          console.log("Error parsing existing tasks, starting with an empty list.");
        }
      } else {
        console.log(`Error in reading file ${readErr.message}`)
      }
    })
  })



program.parse()