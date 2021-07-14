import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

function Input({ field, form: { touched, errors }, label, ...props }) {
  const inputLabel =
    touched[field.name] && errors[field.name] ? errors[field.name] : label;
  return (
    <div>
      <TextField
        error={touched[field.name] && errors[field.name]}
        label={inputLabel}
        variant="outlined"
        {...field}
        {...props}
      />
    </div>
  );
}

Input.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
