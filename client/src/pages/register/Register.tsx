import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated, setUserInfo } from "../../redux/slices/app";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { registerUser } from "../../helpers/helpers";
import { RootState } from "../../redux/store";
import { useSignupMutation } from "../../redux/api/usersApiSlice";

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const [loading, setLoading] = useState(false);
const [signup, {isLoading, isSuccess}] = useSignupMutation();

  const schema = z.object({
    firstname: z.string().min(2, { message: "First Name must be at least 2 characters long" })
    .max(50, { message: "First Name must be at most 50 characters long" }),
    lastname: z.string().min(2, { message: "Last Name must be at least 2 characters long" })
    .max(50, { message: "Last Name must be at most 50 characters long" }),
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleSave = async (data: FormData) => {
   try {
    const body = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    };
    const res = await signup(body).unwrap();
    console.log("Finished")
    dispatch(setIsAuthenticated(true));
    dispatch(setUserInfo(res));
   } catch (error) {
    console.log(error)
   }
  };

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Impact.Chain </h1>
      <div className="">
        <h3>
          Create new account
        </h3>
       <span> 
        Already have an account? <Link to="/login">Login</Link>
       </span>
      </div>
      <form className="" onSubmit={handleSubmit(handleSave)}>
        <input type="text"
          placeholder="First Name"
          {...register("firstname", { required: "First Name is required" })} />
        <p>{errors.firstname?.message}</p>

        <input type="text"
          placeholder="Last Name"
          {...register("lastname", { required: "Last Name is required" })} />
        <p>{errors.lastname?.message}</p>
         
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        <p>{errors.password?.message}</p>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", { required: "Password is required" })}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
