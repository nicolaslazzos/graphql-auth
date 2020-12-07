import React from "react";
import { graphql } from "@apollo/react-hoc";

import AuthForm from "./AuthForm";
import { signup, currentUser } from "../queries";

class SignupForm extends React.Component {
  onSignupPress = async ({ email, password }) => {
    await this.props.mutate({ variables: { email, password }, refetchQueries: [{ query: currentUser }] });
  };

  render() {
    return <AuthForm title="Sign Up" onSubmit={this.onSignupPress} onSuccess={() => this.props.history.push("/")} />;
  }
}

export default graphql(signup)(SignupForm);
