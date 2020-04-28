import React from "react";
import Filtro from "../components/Filtro";
import EjemploInput from "../components/EjemploInput";

class Day1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      userName: "guest",
      role: "guest",
      posts: [],
    };
  }

  componentWillUnmount() {
    console.log("componente App desmontado");
  }

  componentDidMount() {
    console.log("login usuario");
    this.setState({ userName: "lperez" });
    //

    //getPosts().then((data) => this.setState({ posts: data }));
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
      </div>
    );
  }
}

export default Day1;
