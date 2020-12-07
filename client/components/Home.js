import React from "react";
import { graphql } from "@apollo/react-hoc";
import { withRouter } from "react-router-dom";

import { currentUser, logout } from "../queries";
import ScreenContainer from "./ScreenContainer";

class Home extends React.Component {
  onLogoutPress = async () => {
    try {
      // the refetch is not considered in the promise, so the response is thrown after the mutation is done
      await this.props.mutate({ refetchQueries: [{ query: currentUser }] });

      this.props.history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  getActions = () => {
    const actions = [];

    if (this.props?.data?.loading) return actions;

    if (!this.props?.data?.user) {
      actions.push({ text: "Log In", type: "primary", onClick: () => this.props.history.push("/login") });
      actions.push({ text: "Sign Up", type: "primary", onClick: () => this.props.history.push("/signup") });
    } else {
      actions.push({ text: "Log Out", type: "primary", onClick: this.onLogoutPress });
    }

    return actions;
  };

  render() {
    return (
      <ScreenContainer
        title="GraphQL Auth"
        subtitle={this.props?.data?.user?.email ?? null}
        onTitlePress={() => this.props.history.push("/")}
        onBackPress={this.onBackPress}
        actions={this.getActions()}
      >
        {this.props.children}
      </ScreenContainer>
    );
  }
}

export default withRouter(graphql(logout)(graphql(currentUser)(Home)));
