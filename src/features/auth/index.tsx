import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { AppState } from "../../redux/types";
import LoginForm from "./components/LoginForm";
import { isLoginSelector } from "./selectors";

const Auth = () => {
  const isLogging = useSelector((state: AppState) =>
    isLoginSelector(state.auth)
  );

  return (
    <div className="flex items-center justify-center h-screen">
      {isLogging && <Loading />}
      <LoginForm />
    </div>
  );
};

export default Auth;
