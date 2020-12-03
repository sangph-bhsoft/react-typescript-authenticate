import { object, string } from "yup";

export const validationSchema = object().shape({
  username: string().required("Username is required!"),
  password: string()
    .required("Password is required!")
    .min(6, "Password need minmium 6 charcaters!"),
});
