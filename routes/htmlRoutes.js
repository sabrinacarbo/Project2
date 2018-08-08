var path = require("path");
var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  // Load profile page and pass in a user by id
  // Need to modify this to query to database for the info, and use a variable in the url for the username
  app.get("/profile/:user", function (req, res) {
    db.User.findOne({
      where: {
        userName: req.params.user
      }
    }).then(function (userObject) {
      res.render("profile-info", userObject.dataValues);
    });
  });

  app.get("/posts", function (req, res) {
    res.render("posts");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};