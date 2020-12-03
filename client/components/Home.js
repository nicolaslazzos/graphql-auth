import React from "react";
import { graphql } from "@apollo/react-hoc";

import { currentUser } from "../queries";
import ScreenContainer from "./ScreenContainer";

class Home extends React.Component {
  getActions = () => {
    const actions = [];

    if (this.props?.data?.user) {
      actions.push({ text: "Log In", type: "primary", onClick: () => console.log("log in") });
      actions.push({ text: "Sign Up", type: "primary", onClick: () => console.log("sign up") });
    } else {
      actions.push({ text: "Log Out", type: "primary", onClick: () => console.log("log out") });
    }

    return actions;
  };

  render() {
    return (
      <ScreenContainer
        title="GraphQL Auth"
        subtitle={this.props?.data?.user?.email ?? null}
        onBackPress={this.onBackPress}
        actions={this.getActions()}
      >
        <br />
        <div>Home</div>
      </ScreenContainer>
    );
  }
}

export default graphql(currentUser)(Home);
