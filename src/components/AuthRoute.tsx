import { Route, Redirect } from "react-router-dom";

interface AuthRouteProps {
  component: any;
  path: string;
  exact: boolean;
  isAuthenticate: boolean;
}

const AuthRoute = ({
  component: Component,
  isAuthenticate,
  ...rest
}: AuthRouteProps) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticate ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )
    }
  />
);

export default AuthRoute;
