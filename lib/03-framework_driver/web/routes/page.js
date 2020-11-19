const route = require("express").Router();

route.get("/", (req, res, next) => {
   res.render("page/index.pug"); 
});

module.exports = route;