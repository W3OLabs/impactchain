import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated, setUserInfo } from "../../redux/slices/app";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
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
  const { userInfo } = useSelector((state: RootState) => state.app);
  const [login, { isSuccess, isLoading, isError }] = useLoginMutation();

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
      const res = await login(data).unwrap();
      console.log(res);
      dispatch(setIsAuthenticated(true));
      dispatch(setUserInfo(res));
      navigate("/");
    } catch (error) {
      if ((error as any)?.status === 401) {
        toast.error((error as any)?.data.message),
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          };
      }
      console.log(error);
    }
  };
  return (
    <div className="bg-black min-h-screen font-NeueMachinaRegular text-custom-green">
      <h1 className="font-NeueMachinaUltrabold text-8xl pt-9 text-center">
        <span className="text-custom-green ">impact.</span>
        <span className="text-white">chain</span>{" "}
      </h1>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center mt-5">
          <h3 className=" font-NeueMachinaRegular text-5xl text-custom-green">
            Login
          </h3>
          <h3 className="text-2xl py-5 font-PoppinsRegular text-center w-full ">
            Sign in to continue
          </h3>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xs">
            <form
            onSubmit={handleSubmit(handleLogin)}
             className="bg-black shadow-md font-PoppinsRegular rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <input
                  className="shadow placeholder-white min-w-[300px]  placeholder:font-semibold  rounded-3xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
                />
                <p>{errors.email?.message}</p>
              </div>
              <div className="mb-6">
                <input
                  className="shadow placeholder-white min-w-[300px]  placeholder:font-semibold  rounded-3xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: "Password is required" })}
                />
                <p>{errors.password?.message}</p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-green-500 rounded-3xl px-20 py-1.5 text-black font-semibold  hover:bg-green-600font-bold focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-xl">
        <Link to="/forgot-password">Forgot password?</Link>
        <Link to="/signup">Create an account</Link>
      </div>
      </div>
    </div>
  );
};

export default Login;
