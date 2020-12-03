import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { AppState } from "../../redux/types";
import { loginRequest } from "./actions";
import LoginForm from "./components/LoginForm";
import { errorSelector, isLoginSelector } from "./selectors";
import { AuthRequest } from "./types";

const Auth = () => {
  const isLogging = useSelector((state: AppState) =>
    isLoginSelector(state.auth)
  );
  const dispatch = useDispatch();
  const error = useSelector((state: AppState) => errorSelector(state.auth));
  const onSubmit = (values: AuthRequest) => dispatch(loginRequest(values));

  return (
    <div className="flex items-center justify-center h-screen">
      {isLogging && <Loading />}
      <LoginForm error={error} onSubmit={onSubmit} />
    </div>
  );
};

export default Auth;
