import User from "../models/User.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const {  email } = req.body;
    console.log(email);

    // Find an existing user
    const userFound = await User.findOne({ email });
    console.log(userFound);

    // if user exists return a 409 http status code
    if (userFound) {
      const error = new Error("The user already exists");
      error.status = 409;
      throw error;
    }

    // Create a nuevo usuario
    const newUser = new User({  email });
    const userSaved = await newUser.save();
    return res.json(userSaved);
  } catch (error) {
    next(error);
//res.send(401).json({menssage:"error"}) 
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDeleted = await User.findByIdAndDelete(id);

    if (!userDeleted) {
      const error = new Error("User not found");
      error.status = 404;
      throw error;
    }

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
