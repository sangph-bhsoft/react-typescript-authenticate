import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginRequest } from "../actions";
import { AuthRequest } from "../types";
import InputForm from "./InputForm";
import { AppState } from "../../../redux/types";
import { errorSelector } from "../selectors";

const validationSchema = object().shape({
  username: string().required("username is required!"),
  password: string()
    .required("password is required!")
    .min(6, "password need minmium 6 charcaters!"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: AppState) => errorSelector(state.auth));
  const btnRef = useRef<HTMLButtonElement>(null);
  const { register, handleSubmit, errors } = useForm<AuthRequest>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (values: AuthRequest) => dispatch(loginRequest(values));

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      btnRef.current?.click();
    }
  };

  return (
    <div className="bg-white-100 rounded px-8 pt-6 pb-8 mb-4 flex shadow w-2/5 p-8 flex-col items-center">
      <h1 className="text-gray-darker  font-bold text-xl">LOGIN</h1>
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      <InputForm
        id="username"
        name="username"
        error={errors.username}
        placeholder="username"
        type="text"
        onKeyPress={handleKeyPress}
        ref={register()}
        label="Username"
      />
      <InputForm
        id="password"
        name="password"
        error={errors.password}
        type="password"
        ref={register()}
        placeholder="******************"
        onKeyPress={handleKeyPress}
        label="Password"
      />
      <div className="flex items-center justify-between w-full">
        <button
          className="bg-purple-600 bg-opacity-75 hover:bg-opacity-100 text-white font-bold py-2 px-4 rounded focus:outline-none"
          onClick={handleSubmit(onSubmit)}
          ref={btnRef}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
