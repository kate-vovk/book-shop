import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, IconButton, InputAdornment } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { validateLogin } from "../../utils/formValidation";
import InputField from "./InputField";

const Login = () => {
  const history = useHistory();
  const [showPassword, toggleShowPassword] = React.useState(false);
  function onSubmitHandler() {
    history.push("/");
  }
  function onClickShowPasswordButton() {
    toggleShowPassword(!showPassword);
  }
  return (
    <div>
      <h3>Here you can login</h3>
      <Formik
        validateOnChange
        validateOnBlur={false}
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmitHandler}
        validate={validateLogin}
      >
        {() => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <br />
            <Field
              name="email"
              type="email"
              id="email"
              label="email*"
              component={InputField}
            />
            <br />
            <br />
            <Field
              name="password"
              type={showPassword ? "text" : "password"}
              id="password"
              label="password*"
              component={InputField}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={onClickShowPasswordButton}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

Login.propTypes = {};

export default Login;
