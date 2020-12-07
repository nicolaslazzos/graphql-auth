import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider as ApolloHocProvider } from "@apollo/react-hoc";

import "antd/dist/antd.css";
import "./style/style.css";

import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

// the client communicates with the graphql server
// the provider makes possible the interaction between the client and react

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
  dataIdFromObject: (o) => o.id, // this for updating or re fetching a record when an object related to him its updated or new objects are created. requires that we always fetch the id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHocProvider client={client}>
        <Router>
          <Route path="/">
            <Home>
              <Route path="/login" component={LoginForm} />
              <Route path="/signup" component={SignupForm} />
            </Home>
          </Route>
        </Router>
      </ApolloHocProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
