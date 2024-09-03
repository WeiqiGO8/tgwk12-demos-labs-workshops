const express = require("express");
const port = 8080;
const app = express();

app.get("/", function (req, res) {
	res.send("Hello World!");
});

app.listen(port, function () {
	console.log(
		"Server up and running, listening on port" + `${port}` + "... :)"
	);
});
