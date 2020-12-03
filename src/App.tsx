import Auth from "./features/auth";
import Home from "./features/home";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "./redux/types";
import { isAuthenticateSelector } from "./features/auth/selectors";
import PrivateRoute from "./components/PrivateRoute";
import AuthRoute from "./components/AuthRoute";

function App() {
  const isAuthenticate = useSelector((state: AppState) =>
    isAuthenticateSelector(state.auth)
  );
  console.log(isAuthenticate);

  return (
    <Router>
      <Switch>
        <PrivateRoute
          isAuthenticate={isAuthenticate}
          component={Home}
          exact
          path="/"
        />
        <AuthRoute
          isAuthenticate={isAuthenticate}
          component={Auth}
          exact
          path="/login"
        />
      </Switch>
    </Router>
  );
}

export default App;
