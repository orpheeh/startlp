const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const page = require("./routes/page");

module.exports = (app) => {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.set("View Engine", "pug");
    app.set("views", path.join(__dirname, "views"));
    app.use(express.static(path.join(__dirname, "public")));
    
    app.use("/", page);
}