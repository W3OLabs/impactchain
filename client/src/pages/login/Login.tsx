import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../../redux/slices/app";
import { Link } from "react-router-dom";
import { set, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
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
        <h3>Login</h3>
        <span>Sign in to continue</span>
      </div>
      <form className="" onSubmit={handleSubmit(handleSave)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        <p>{errors.password?.message}</p>
        <button type="submit">Login</button>
      </form>
      <div className="flex flex-col">
        <Link to="/forgot-password">Forgot password?</Link>
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
  );
};

export default Login;
