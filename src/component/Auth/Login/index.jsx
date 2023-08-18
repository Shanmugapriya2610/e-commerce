import NoramlButton from "component/Common/Button";
import InputBox from "component/Common/InputBox";
import PasswordInput from "component/Common/Password";
import { history } from "helpers";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";

const Login = () => {
  const handleSubmit = () => {
    localStorage.setItem("token", "token");
    history.push("/dashboard");
  };
  return (
    <div>
      <p className={classes.title}>LOGIN</p>
      <p className={classes.subtitle}>
        Provide your valid credentials to proceed
      </p>
      <div className={`${classes.container} pt-3 mx-auto`}>
        <InputBox placeholder="Email" />
        <PasswordInput placeholder="Enter your password" />
        <Link className={classes.link} to="/forget-password">
          Forgot password?
        </Link>
        <NoramlButton
          className="commonButton my-3"
          onClick={handleSubmit}
          label="LOGIN"
        />
      </div>
    </div>
  );
};

export default Login;
