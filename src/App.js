import React from "react";
import { Header, DEFAULT_TITLE } from "./components/Header";
import Filtro from "./components/Filtro";
import SelectPaises from "./components/SelectPaises";
import EjemploInput from "./components/EjemploInput";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      userName: "guest",
      role: "guest",
    };
  }

  componentWillUnmount() {
    console.log("componente App desmontado");
  }

  componentDidMount() {
    console.log("login usuario");
    this.setState({ userName: "lperez" });
  }

  handleLogin() {
    this.setState({ userName: "martaSanchez", role: "admin" });
  }

  handleChangeInputValue(e) {
    console.log(e.target.value);
    this.setState({ inputValue: e.target.value });
  }

  render() {
    const handleLogin2 = () => {
      this.setState({ userName: "martaSanchez", role: "admin" });
    };
    const { role, userName, inputValue } = this.state; //deconstruct
    const { handleChangeInputValue } = this;
    console.log("estado de la App: ", this.state);
    const titulo = "Paises";
    const numbers = [1, 2, 3, 4, 6];
    return (
      <div className="App">
        <Header titulo={titulo} colorx="red" userName={userName} />
        <button onClick={handleLogin2}>Login</button>
        <br />
        {role === "admin" && <button>admin option</button>}
        <button
        // onclick={role === "admin" ? handleAdmin : handleGuest}
        >
          {role === "admin" ? "admin opcion" : "guest option"}
        </button>
        {/* {!!numero && <componente />} */}
        <br />
        {numbers.map((number) => (
          <div key={number}>{number}</div>
        ))}
        <EjemploInput
          value={inputValue}
          onChangeInput={handleChangeInputValue.bind(this)}
        />
        <Filtro />
        <SelectPaises />
      </div>
    );
  }
}

export default App;
