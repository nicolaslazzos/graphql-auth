import React from "react";
import { graphql } from "@apollo/react-hoc";
import { withRouter } from "react-router-dom";

import { currentUser } from "../queries";

export default (WrappedComponent) => {
  class RequireAuth extends React.Component {
    componentDidMount() {
      if (!this.props?.data?.user && !this.props?.data?.loading) this.props.history.push("/login");
    }

    componentDidUpdate() {
      if (this.props?.data?.loading) return;
      if (!this.props?.data?.user) this.props.history.push("/login");
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return withRouter(graphql(currentUser)(RequireAuth));
};
