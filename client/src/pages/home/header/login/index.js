import React, { PureComponent } from "react";
import { Button } from "antd";
import Avater from "../avatar";
import "./index.scss";

export class Login extends PureComponent {
  render() {
    const { isLogin } = this.props;
    return (
      <>
        {!isLogin ? (
          <Button type="primary" size="small" className="login-btn">
            登陆
          </Button>
        ) : (
          <Avater
            src={
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            }
            user={"Gstring-w"}
          />
        )}
      </>
    );
  }
}

export default Login;
