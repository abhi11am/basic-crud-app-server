const { User } = require("../models");
const responseHelper = require("../helpers/responseHelper");

const get_users = (req, res) => {
  User.findAll({
    limit: parseInt(req.query.limit),
    order: [["id", "desc"]],
  })
    .then((users) => {
      res.send(
        responseHelper.respond(true, "Data fetched successfully", users)
      );
    })
    .catch((err) => {
      res.send(err);
    });
};

const get_user_by_id = (req, res) => {
  User.findByPk(req.params.id)
    .then((user) => {
      res.send(responseHelper.respond(true, "Data fetched successfully", user));
    })
    .catch((err) => {
      res.send(err);
    });
};

const create_user = (req, res) => {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    contact: req.body.contact,
    gender: req.body.gender,
    about: req.body.about,
  })
    .then((user) => {
      res.send(responseHelper.respond(true, "User created successfully"));
    })
    .catch((err) => {
      res.send(err);
    });
};

const update_user = (req, res) => {
  User.update(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      contact: req.body.contact,
      gender: req.body.gender,
      about: req.body.about,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((user) => {
      res.send(responseHelper.respond(true, "User updated successfully"));
    })
    .catch((err) => {
      res.send(err);
    });
};

const delete_user = (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((user) => {
      res.send(responseHelper.respond(true, "User deleted successfully"));
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  get_users,
  get_user_by_id,
  create_user,
  update_user,
  delete_user,
};
