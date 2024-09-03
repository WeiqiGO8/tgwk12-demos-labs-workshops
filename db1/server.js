const express = require("express");
const app = express();
const port = 3000;

/*
app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
console.log(`Example app Listen on port ${port}`);
});
*/

// SQLite3
/*const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("company-computers.sqlite3");

//The default ROUTE is /
app.get("/", (req, res) => {
	res.send("hello world!");
});

//Add a new route to get the list of computers using SQLite3
app.get("/listcomputers", (req, res) => {
	db.all("SELECT * FROM computer", (error, theComputers) => {
		if (error) {
			res.send("Sorry, there was an Error.");
		} else {
			res.send(theComputers);
		}
	});
});

app.listen(port, () => {
	console.log(`Example app Listen on port ${port}`);
});
*/

// SQLite3
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./db-employees-computers.sqlite3");

//The default ROUTE is /
app.get("/", (req, res) => {
	res.send("hello world!");
});

app.get("/listemployees", (req, res) => {
	db.all("SELECT * FROM employees", (error, theEmployees) => {
		if (error) {
			res.send("There's an error");
		} else {
			console.log("Query successful, retrieved employees", theEmployees);
			let employeeTable = '<table border="1px">';
			theEmployees.forEach((employee) => {
				employeeTable += `<tr>`;
				employeeTable += `<td> ${employee.employeeID}</td>`;
				employeeTable += `<td> ${employee.firstName}</td>`;
				employeeTable += `<td> ${employee.lastName}</td>`;
				employeeTable += `<td> ${employee.birthday}</td>`;
				employeeTable += `<td> ${employee.phone}</td>`;
				employeeTable += `<td> ${employee.email}</td>`;
				employeeTable += `</tr>`;
			});
			employeeTable += "</table>";
			res.send(employeeTable);
		}
	});
});

//Add a new route to get the list of computers using SQLite3
app.get("/listcomputers", (req, res) => {
	//retrieve the computer table form the db
	db.all("SELECT * FROM computers", (error, theComputers) => {
		if (error) {
			console.log(error);
			res.send("Sorry, there was an error.");
		} else {
			console.log("Query successful, retrieved computers", theComputers);
			let computerTable = '<table border="1px">';
			theComputers.forEach((computer) => {
				computerTable += `<tr>`;
				computerTable += `<td> ${computer.computerID}</td>`;
				computerTable += `<td> ${computer.serialNumber}</td>`;
				computerTable += `<td> ${computer.brand}</td>`;
				computerTable += `<td> ${computer.type}</td>`;
				computerTable += `<td> ${computer.model}</td>`;
				computerTable += `<td> ${computer.ram}</td>`;
				computerTable += `<td> ${computer.disk}</td>`;
				computerTable += `<td> ${computer.yearBrought}</td>`;
				computerTable += `</tr>`;
			});
			computerTable += "</table>";
			res.send(computerTable);
		}
	});
});

app.listen(port, () => {
	console.log(`Example app Listen on port ${port}`);
});
