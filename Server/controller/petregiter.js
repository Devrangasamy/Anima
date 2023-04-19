import petModel from "../models/petregister.js";

export const getPet = (req, res, next) => {
  try {
    petModel
      .find({ username: req.params.username })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  } catch {
    res.send("catch");
  }
};

export const register = async (req, res, next) => {
  try {
    const newPet = new petModel(req.body);
    await newPet.save();
    res.send({ newPet });
  } catch {
    res.send("catch");
  }
};

export const getbyid = (req, res) => {
  try {
    petModel
      .findById(req.params.id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  } catch {
    res.send("catch");
  }
};
