import mongoose, { Document } from "mongoose";
import bcrypt from "bcryptjs";

interface UserDocument extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isEmailVerified: boolean;
  matchPassword(enteredPassword: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    isEmailVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export const UserModel = mongoose.model<UserDocument>("User", UserSchema);

export const createUser = (args: Record<string, any>) =>
  new UserModel(args).save().then((user) => user.toObject());
export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) =>
  UserModel.findOne({ "authentication.sessionToken": sessionToken });
export const getUserById = (id: string) => UserModel.findById(id);
export const updateUser = (id: string, args: Record<string, any>) =>
  UserModel.findByIdAndUpdate(id, args, { new: true });
export const deleteUserById = (id: string) =>
  UserModel.findOneAndDelete({ _id: id });
