import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/login';
import Report from './pages/report'
import Pokemon from './pages/pokemon';
import InsertPokemon from './pages/insertPokemon';
import reportCustomPokemon from './pages/reportCustomPokemon';
import customPokemon from './pages/customPokemon';

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/app" component={Report} />
            <PrivateRoute path="/pokemon/:pokemonIndex" component={Pokemon} />
            <PrivateRoute path="/insertPokemon/" component={InsertPokemon} />
            <PrivateRoute path="/editPokemon/:pokemonIndex" component={InsertPokemon} />
            <PrivateRoute path="/customPokemonList/" component={reportCustomPokemon} />
            <PrivateRoute path="/customPokemon/:pokemonIndex" component={customPokemon} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;  