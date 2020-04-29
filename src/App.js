import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "./routes";
import { Header, DEFAULT_TITLE } from "./components/Header/Header";
import { Day1, Day2, Comments, Paises, Posts } from "./pages";
import { setUser } from "./store/actions/user";
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
  }, [dispatch]);

  const titulo = "Aplicacion";

  const Welcome = () => <React.Fragment>Bienvenido Curso React</React.Fragment>;
  const NotFoundPage = () => <>404 pagina no existe</>;

  return (
    <BrowserRouter>
      <div className="App">
        <Header titulo={titulo} colorx="red" userName={userName} />
        <Switch>
          <Route exact path={ROUTES.HOME} component={Welcome} />
          <Route path={ROUTES.DAY1} component={Day1} />
          <Route path={ROUTES.DAY2} component={Day2} />
          <Route path={ROUTES.PAISES} component={Paises} />
          <Route path={ROUTES.POSTS} component={Posts} />
          <Route path={`${ROUTES.COMMENTS}/:id`} component={Comments} />

          <Route component={NotFoundPage} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
