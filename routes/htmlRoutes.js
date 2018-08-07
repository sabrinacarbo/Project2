var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load profile page and pass in a user by id
  // Need to modify this to query to database for the info, and use a variable in the url for the username
  app.get("/users/hank", function(req, res) {
    res.render("profile-info", {
      name: "Hank",
      img: "https://hankzimmer7.github.io/assets/images/profile_picture.jpg",
      license: "none",
      numberOfJump: 0,
      homeDropZone: "ATL",
      bio: "I love the sky, but I can't jump"
    });
  });

  //Uncomment the below to render a dummy profile not using the database:
  // app.get("/users/hank", function (req, res) {
  //   res.render("profile-info", {
  //     name: "Hank",
  //     img: "https://hankzimmer7.github.io/assets/images/profile_picture.jpg",
  //     license: "none",
  //     numberOfJump: 0,
  //     homeDropZone: "ATL",
  //     bio: "I love the sky, but I can't jump"
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
