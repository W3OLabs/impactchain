import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated, setUserInfo } from "../../redux/slices/app";
import { Link, useNavigate } from "react-router-dom";
import {  z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "../../redux/api/usersApiSlice";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { toast } from "react-toastify";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {userInfo} = useSelector((state: RootState) => state.app);
  const [login, {isSuccess, isLoading, isError}] = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setIsAuthenticated(true));
    }
  }, [userInfo]);

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

  const handleLogin = async (data: FormData) => {
    try {
     const res =  await login(data).unwrap();
     console.log(res)
     dispatch(setIsAuthenticated(true));
     dispatch(setUserInfo(res));
      navigate("/");
    } catch (error) {
      if ((error as any)?.status === 401) {
        toast.error((error as any)?.data.message),{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        
        }
      }
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Impact.Chain </h1>
      <div className="">
        <h3>Login</h3>
        <span>Sign in to continue</span>
      </div>
      <form className="" onSubmit={handleSubmit(handleLogin)}>
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
