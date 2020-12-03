import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/types";
import LoginForm from "./components/LoginForm";
import { isLoginSelector } from "./selectors";
import loading from "../../images/spinner.svg";

const Auth = () => {
  const isLogging = useSelector((state: AppState) =>
    isLoginSelector(state.auth)
  );

  return (
    <div className="flex items-center justify-center h-screen">
      {isLogging && (
        <div className="fixed w-full h-full bg-gray-700 bg-opacity-40 flex items-center justify-center">
          <img src={loading} alt="loading" />
        </div>
      )}
      <LoginForm />
    </div>
  );
};

export default Auth;
