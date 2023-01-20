const Cats = require("../models/cats");

const getCats = async (_, res) => {
  const cats = await Cats.find();
  res.status(200).json(cats);
};

const addCats = async (req, res) => {
  const { breeds, age, name, description } = req.body;

  const cat = new Cats({
    breeds,
    name,
    age,
    description,
    image: req.file.path,
  });

  const catData = await cat.save();
  res.status(201).json(catData);
};

module.exports = { getCats, addCats };
