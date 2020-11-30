var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employeeTracker"
});


connection.connect(function (err) {
  if (err) throw err;
  start();
});

function start() {
  inquirer
    .prompt({
      name: "view",
      type: "list",
      message: "What would you like to do",
      choices: ["View departments", "View roles", "View employees", "Add departments", "Add roles", "Add employees", "Update employee role"]
    })
    .then(function (answer) {
      console.log("\n");
      // based on their answer, either call the bid or the post functions
      if (answer.view === "View departments") {
        queryDepartment();
      }
      else if (answer.view === "View roles") {
        queryRoles()

      }
      else if (answer.view === "View employees") {
        queryEmployee()
          ;
      } else if (answer.view === "Add departments") {
        addDepartment()
          ;
      }
      else if (answer.view === "Add roles") {
        addRole()
          ;
      } else if (answer.view === "Add employee") {
        addEmployee()
          ;
      }
      else if (answer.view === "Update employee role") {
        updateEmployee()
          ;
      } else {
        connection.end();
      }
    });
};

function queryDepartment() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.log("\n");
    console.table(res);
  });
  start()
};
function queryRoles() {
  connection.query("SELECT roles.title, roles.salary, department.name FROM roles inner join department on roles.department_id=department.id", function (err, res) {
    console.log("\n");
    console.table(res);
  });
  start();
};
function queryEmployee() {
  connection.query("SELECT employee.first_name, employee.last_name, roles.title FROM employee inner join roles on employee.role_id = roles.id", function (err, res) {
    if (err) throw err;
    console.log("\n");
    console.table(res);
  });
  start();
};
function addDepartment() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the name of the department?"
      },

    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO department SET ?",
        {
          name: answer.name,
        },
        function (err) {
          if (err) throw err;
          console.log("Your update was created successfully!");
          start();
        }
      );
    });

};
function addEmployee() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Who would you like to add?"
      },

    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          name: answer.name,
        },
        function (err) {
          if (err) throw err;
          console.log("Your update was created successfully!");
          start();
        }
      );
    });

}
function addRole() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What role would you like to add?"
      },

    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO roles SET ?",
        {
          name: answer.name,
        },
        function (err) {
          if (err) throw err;
          console.log("Your update was created successfully!");
          start();
        }
      );
    });

}
function updateEmployee() {

  inquirer
    .prompt([
      {
        name: "name",
        type: "list",
        message: "Who would you like to update",
        choices: ["John Doe", "Jane Smith", "Bob Robinson", "Tina Brown", "Jim Johnson", "Katy Stevens", "Frank Cruz"]
      },
      {
        name: "update",
        type: "list",
        message: "What is their new role?",
        choice:["Assistant, Director, Lead Developer, Fullstack Developer, Sales Specialist"]
      }
    ])
    .then(function(answer){
      connection.query("UPDATE employee WHERE ")
    [{name: answer.name},
      {

      }]
    })
  

}





//update employee role function 
