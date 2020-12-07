import React from "react";
import { Result } from "antd";

class Dashboard extends React.Component {
  render() {
    return (
      <Result
        status="success"
        title="You are logged in!"
        subTitle="You can now access all the functionalities of this website"
      />
    );
  }
}

export default Dashboard;
