import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL as string;

export const authenticate = async (email: string) => {
  try {
    let {status} = await axios.post("/auth/authenticate", { email });
    return status;
  } catch (error) {
    return { error: "Error authenticating user. User not found." };
  }
};

export const getUser = async () => {
  try {
    const { data } = await axios.get(`/user/profile`);
    return data;
  } catch (error) {
    return { error: "Error fetching user.  Password or email is incorrect." };
  }
};

export const registerUser = async (credentials: any) => {
  try {
    const { data, status } = await axios.post("/auth/register", {
      ...credentials,
    });

    console.log("Signup successfull, sending mail", data, status)
    const { fistname, email } = data;

    let text =
      "Welcome to Impact Chain! We are very excited to have you on board.";

    if (status === 201) {
      await axios.post("/auth/register-mail", {
        username: fistname,
        userEmail: email,
        text,
      });
    }

    return Promise.resolve(data);
  } catch (error) {
    return { error: "Error registering user. User already exists." };
  }
};

export const login = async (email: string, password: string) => {
  try {
    const { data } = await axios.post("/auth/login", { email, password });
    return Promise.resolve(data);
  } catch (error) {
   return Promise.reject({error})
  }
}

export const verifyPassword = async (email: string, password: string) => {
  try {
    const { data } = await axios.post("/auth/login", { email, password });
    return Promise.resolve(data);
  } catch (error) {
    return {
      error: "Error verifying password. Password or email is incorrect.",
    };
  }
};

export const updateUser = async (credentials: any) => {
  try {
    const { data } = await axios.put("/users/update", { ...credentials });
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject({ error: "Couldn't update user" });
  }
};

export const generateOTP = async (email: string) => {
  try {
    const {
      data: { code },
      status,
    } = await axios.get("/auth/generate-otp", { data: { email } });

    if (status === 201) {
      let {
        data: { email },
      } = await getUser();
      let text = `Your password reset code is ${code}.`;
      await axios.post("/auth/registerMail", {
        userEmail: email,
        text,
        subject: "Password Reset Code",
      });
    }
    return Promise.resolve(code);
  } catch (error) {
    return Promise.reject({ error: "Couldn't generate OTP" });
  }
};

export const verifyOPT = async (email: string, code: string) => {
  try {
    const { data, status } = await axios.post("/auth/verify-otp", {
      email,
      code,
    });
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const resetPassword = async (email: string, password: string) => {
  try {
    const { data, status } = await axios.put("/auth/reset-password", {
      email,
      password,
    });
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject(error);
  }
};
