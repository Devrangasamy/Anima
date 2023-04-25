import petModel from "../models/petregister.js";
import User from "../models/User.js";
export const getPet = (req, res, next) => {
  try {
    petModel
      .find({ userId: req.params.userId })
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
  console.log(req.body.username);
  try {
    const id = await User.find({ username: req.body.username }, { _id: 1 });
    console.log(id[0]._id.toHexString());
    const newPet = new petModel({
      ...req.body,
      userId: id[0]._id.toHexString(),
    });
    await newPet.save();
    res.send(newPet);
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
