import expressAsyncHandler from "express-async-handler";
import { UserModel, deleteUserById, getUserById, getUsers } from "../db/users";
import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log("error in getAllUsers: ", error);
    res.sendStatus(400);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.sendStatus(400);
    }
    const user = await deleteUserById(id);
    return res.status(200).json(user);
  } catch (error) {
    console.log("error in deleteUser: ", error);
    res.sendStatus(400);
  }
};

export const updateUser = expressAsyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  if (req.body.email && req.body.email !== user.email) {
    const emailExists = await UserModel.findOne({ email: req.body.email });
    
    if (emailExists && emailExists._id.toString() !== user._id.toString()) {
      res.status(400);
      throw new Error('Email already in use by another account');
    }
  }

  user.firstname = req.body.firstname || user.firstname;
  user.lastname = req.body.lastname || user.lastname;
  user.email = req.body.email || user.email;

  const updatedUser = await user.save();

  res.json({
    _id: updatedUser._id,
    firstname: updatedUser.firstname,
    lastname: updatedUser.lastname,
    email: updatedUser.email,
  });
});



export const getUserProfile = expressAsyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.user._id);

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
