import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ROUTES } from "./routes";
import { Header, DEFAULT_TITLE } from "./components/Header/Header";
import { Day1, Day2, Paises, Posts } from "./pages";
import "./App.css";

const App = () => {
  const titulo = "Aplicacion";
  const userName = "mLopez";

  const Welcome = () => <React.Fragment>Bienvenido Curso React</React.Fragment>;
  const NotFoundPage = () => <>404 pagina no existe</>;

  const Comments = ({ match: { params } }) => (
    <>{`comentarios post ${params.id}`}</>
  );

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
          <Route path={"/comments/:id"} component={Comments} />

          <Route component={NotFoundPage} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
