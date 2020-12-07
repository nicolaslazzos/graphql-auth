import React from "react";
import { graphql } from "@apollo/react-hoc";

import AuthForm from "./AuthForm";
import { login, currentUser } from "../queries";

class LoginForm extends React.Component {
  onLoginPress = async ({ email, password }) => {
    await this.props.mutate({ variables: { email, password }, refetchQueries: [{ query: currentUser }] });
  };

  render() {
    return <AuthForm title="Log In" onSubmit={this.onLoginPress} onSuccess={() => this.props.history.push("/")} />;
  }
}

export default graphql(login)(LoginForm);
