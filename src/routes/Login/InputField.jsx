import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

const InputField = ({
  field, // name, value, onChange, onBlur
  form: { touched, errors },
  label,
  ...props
}) => {
  return (
    <TextField
      variant="outlined"
      error={Boolean(touched[field.name] && errors[field.name])}
      label={label}
      helperText={
        touched[field.name] && errors[field.name] ? errors[field.name] : null
      }
      {...field}
      {...props}
    />
  );
};

InputField.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.objectOf(PropTypes.bool),
    touched: PropTypes.objectOf(PropTypes.bool),
  }).isRequired,
  label: PropTypes.string.isRequired,
};

export default InputField;
