import React from "react";
import { Result } from "antd";

class Landing extends React.Component {
  render() {
    return (
      <Result
        status="error"
        title="You are not logged in!"
        subTitle="You must be logged in to access all the functionalities of this website"
      />
    );
  }
}

export default Landing;
