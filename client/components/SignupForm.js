import React from "react";
import { graphql } from "@apollo/react-hoc";

import AuthForm from "./AuthForm";
import { signup, currentUser } from "../queries";

class SignupForm extends React.Component {
  onSignupPress = async ({ email, password }) => {
    await this.props.mutate({ variables: { email, password }, refetchQueries: [{ query: currentUser }] });
  };

  componentDidUpdate(prevProps) {
    if (!prevProps?.data?.user && this.props?.data?.user) this.props.history.push("/dashboard");
  }

  render() {
    return <AuthForm title="Sign Up" onSubmit={this.onSignupPress} />;
  }
}

export default graphql(signup)(graphql(currentUser)(SignupForm));
