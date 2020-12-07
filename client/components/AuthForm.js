import React from "react";
import PropTypes from "prop-types";
import { Input, Tooltip, Button, Alert, Form, Card } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";

class AuthForm extends React.Component {
  state = { email: "", password: "", loading: false, errors: [] };

  onValueChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async () => {
    try {
      this.setState({ loading: true });

      const { email, password } = this.state;
      await this.props?.onSubmit?.({ email, password });

      this.setState({ loading: false });

      this.props?.onSuccess?.();
    } catch (error) {
      console.log(error);

      let errors = error?.graphQLErrors?.map((e) => e.message) || [];

      this.setState({ loading: false, errors });

      this.props?.onError?.();
    }
  };

  render() {
    const { username, password, loading, errors } = this.state;
    const { title } = this.props;

    return (
      <div style={{ display: "flex", flexDirection: "column", padding: 20, width: "100%", alignItems: "center" }}>
        <Card title={title} style={{ width: "40%" }}>
          <Form name="form" initialValues={{ remember: true }} onFinish={this.onSubmit}>
            <Form.Item name="email" rules={[{ required: true, message: "You must provide an email" }]}>
              <Input
                placeholder="E-Mail"
                name="email"
                value={username}
                onChange={this.onValueChange}
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "You must provide a password" }]}>
              <Input.Password
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.onValueChange}
                prefix={<KeyOutlined />}
              />
            </Form.Item>
            {errors.map((error, i) => (
              <Form.Item key={`error_${i}`}>
                <Alert message={error} type="error" />
              </Form.Item>
            ))}
            <Tooltip title={title}>
              <Button type="primary" htmlType="submit" loading={loading}>
                {title}
              </Button>
            </Tooltip>
          </Form>
        </Card>
      </div>
    );
  }
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AuthForm;
