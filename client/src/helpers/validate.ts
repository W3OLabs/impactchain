import { authenticate } from "./helpers"

export const validateEmail = async (email: string) => {
    const result = await authenticate(email);
    console.log(result);
}