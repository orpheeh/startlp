const express = require("express");

const web = require("./lib/03-framework_driver/web");

const app = express();

web(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Startlp listenning at " + port));