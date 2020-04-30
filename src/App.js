import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "./routes";
import { Header, DEFAULT_TITLE } from "./components/Header/Header";
import { Error } from "./components/ui/Error";
import {
  Day1,
  Day2,
  Comments,
  Comments2,
  Paises,
  Posts,
  Posts2,
} from "./pages";
import { setUser } from "./store/actions/user";
import { addError } from "./store/actions/error";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.users.userName);
  useEffect(() => {
    //proceso login
    const user = {
      userName: "sGarrido",
      role: "admin",
    };
    dispatch(setUser(user));
    dispatch(addError("Error de prueba !!"));
  }, [dispatch]);

  const Welcome = () => <React.Fragment>Bienvenido Curso React</React.Fragment>;
  const NotFoundPage = () => <>404 pagina no existe</>;

  return (
    <BrowserRouter>
      <div className="App">
        <Header colorx="red" userName={userName} />
        <Error />
        <Switch>
          <Route exact path={ROUTES.HOME} component={Welcome} />
          <Route path={ROUTES.DAY1} component={Day1} />
          <Route path={ROUTES.DAY2} component={Day2} />
          <Route path={ROUTES.PAISES} component={Paises} />
          <Route path={ROUTES.POSTS} component={Posts} />
          <Route path={ROUTES.POSTS2} component={Posts2} />
          <Route path={`${ROUTES.COMMENTS}/:id`} component={Comments} />
          <Route path={`${ROUTES.COMMENTS2}/:id`} component={Comments2} />

          <Route component={NotFoundPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
