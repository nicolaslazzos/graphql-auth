import React from "react";
import { graphql } from "@apollo/react-hoc";

import AuthForm from "./AuthForm";
import { login, currentUser } from "../queries";

class LoginForm extends React.Component {
  onLoginPress = async ({ email, password }) => {
    await this.props.mutate({ variables: { email, password }, refetchQueries: [{ query: currentUser }] });
  };

  componentDidUpdate(prevProps) {
    if (!prevProps?.data?.user && this.props?.data?.user) this.props.history.push("/dashboard");
  }

  render() {
    return <AuthForm title="Log In" onSubmit={this.onLoginPress} />;
  }
}

export default graphql(login)(graphql(currentUser)(LoginForm));
