export const validateForm = (props) => {
  const errors = {};
  const onlyLetters = /[^A-Za-z]+/;
  const only10Digits = /^[0-9]{10}$/;
  if (!props.city) {
    errors.city = "City is required";
  } else if (onlyLetters.test(props.city)) {
    errors.city = "City: only letters";
  }
  if (!props.address) {
    errors.address = "Address is required";
  }
  if (!props.phone) {
    errors.phone = "phone is required";
  } else if (!only10Digits.test(props.phone)) {
    errors.phone = "Phone: only 10 digits";
  }
  if (props.when) {
    const diffInMilliSeconds =
      Math.abs(new Date(props.when).valueOf() - new Date().valueOf()) / 1000;
    if (Math.floor(diffInMilliSeconds / 3600) < 24) {
      errors.when = "The time interval should be at least 24 hours";
    }
  }

  return errors;
};

export const validateLogin = (values) => {
  const errors = {};
  const password = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)\w{6,}/;
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!/\w{6,}/.test(values.password)) {
    errors.password =
      "Password should include at least 6 symbols. Only letters and digits are allowed. ";
  } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)\w{6,}/.test(values.password)) {
    errors.password =
      "Password should contain at least 1 uppercase, 1 lowercase symbol and 1 digit";
  } else if (!password.test(values.password)) {
    errors.password =
      "Password should include only 6 symbols, only letters and digits and 1 uppercase 1 lowercase and 1 digit";
  }
  return errors;
};
