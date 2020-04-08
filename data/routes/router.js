const express = require("express");

const router = express.Router();

const db = require('../db');

router
.get("/", (req, res) => {
    db.find(req.query)
      .then((posts) => {
        res.status(200).json(posts);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          message: "Error retrieving the posts",
        });
      });
  });


  router
  .get("/:id", (req, res) => {
    db.findById(req.params.id)
      .then((post) => {
        if (post) {
          res.status(200).json(post);
        } else {
          res.status(404).json({
            message: "post was not found",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          message: "Error retrieving the post",
        });
      });
    });


  