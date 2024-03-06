import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../../redux/slices/app";
import { Link } from "react-router-dom";
import { set, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const [loading, setLoading] = useState(false);

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
    console.log(data);
    dispatch(setIsAuthenticated(true));
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
      <div className="flex flex-col">
        <Link to="/forgot-password">Forgot password?</Link>
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
  );
};

export default Register;
