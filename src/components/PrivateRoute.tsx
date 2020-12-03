import { Route, Redirect } from "react-router-dom";

interface PrivateRouteProps {
  component: any;
  path: string;
  exact: boolean;
  isAuthenticate: boolean;
}

const PrivateRoute = ({
  component: Component,
  isAuthenticate,
  ...rest
}: PrivateRouteProps) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticate ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
