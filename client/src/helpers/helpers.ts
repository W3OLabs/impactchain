import axios from "axios";

export const authenticate = async (email: string) => {
  try {
    return await axios.post("/auth/authenticate", { email });
  } catch (error) {
    return { error: "Error authenticating user. User not found." };
  }
};

export const getUser = async () => {
  try {
    const {data} = await axios.get(`/user/profile`);
    return data;
  } catch (error) {
    return { error: "Error fetching user.  Password or email is incorrect." };
  }
}

export const registerUser = async (credentials: any) => {
  try {
    const {data} = await axios.post("/auth/register", { ...credentials});
    return data;
  } catch (error) {
    return { error: "Error registering user. User already exists." };
  }
};