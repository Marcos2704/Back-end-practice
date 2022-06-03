const type = require("../models/type");

const create = async (req, res, next) => {
  try {
    const name = req.body.name;
    const newType = await type.create(name);
    res.send(newType);
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.send(error.message);
  }
};

const findType = async (req, res, next) => {
    if (req.query.name === "") {
      res.statusCode = 400;
      res.send("name cannot be empty");
    }
    try {
      const types = await type.findByName(req.query.name);
      console.log("Response types", types);
      res.send(types);
    } catch (err) {
      console.log(err);
      res.statusCode = 500;
      res.send(err.message);
    }
  };

const findAll = async (req, res, next) => {
  try {
    const allTypes = await type.findAll();
    res.send(allTypes);
  } catch (error) {
    res.statusCode = 500;
    res.send(error);
  }
};

module.exports = { create, findType ,findAll};