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
    // const diffInMilliSecond =
    //   Math.abs(new Date(props.when).valueOf() - new Date().valueOf()) / 1000;
    // if (Math.floor(diffInMilliSecond / 3600) < 24) {
    //   errors.when = "The time interval should be at least 24 hours";
  }

  return errors;
};
