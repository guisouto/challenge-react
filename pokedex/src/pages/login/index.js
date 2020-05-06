import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Logo from "../../assets/pokeapi.png";
import { login } from "../../services/auth";

import "./styles.css";

//Referencia
//https://blog.rocketseat.com.br/reactjs-autenticacao/

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        login("123456");
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <div className="container">
        <form className="formLogin" onSubmit={this.handleSignIn}>
          <img src={Logo} alt="PokeApi logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);