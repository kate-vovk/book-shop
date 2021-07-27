/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { DateTimePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { validateForm } from "../../../../utils/formValidation";
import Input from "./Input";
import { sendData } from "../../../../redux/cartSlice";
import { FormContainerStyled, FormStyled } from "./styles";

const CheckoutForm = ({ onCloseHandler }) => {
  const d = new Date();
  const nextDay = new Date(d);
  nextDay.setDate(d.getDate() + 1);
  nextDay.setMinutes(new Date(nextDay).getMinutes() + 1);

  const cart = useSelector((state) => state.cart.itemAmount);
  const dispatch = useDispatch();

  const onSubmitHandler = ({ city, address, phone, when }) => {
    const date = new Date(when).valueOf();
    const phoneNumber = Number(phone);
    dispatch(sendData([cart, { city, address, phoneNumber, date }]));
    onCloseHandler();
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <FormContainerStyled>
        <Formik
          validateOnChange
          validateOnBlur={false}
          initialValues={{
            city: "",
            address: "",
            phone: "",
            when: nextDay,
          }}
          onSubmit={onSubmitHandler}
          validate={validateForm}
        >
          {({ touched, errors }) => (
            <Form css={FormStyled}>
              <Field
                id="city"
                type="text"
                name="city"
                label="City"
                component={Input}
              />
              <br />
              <Field
                id="address"
                type="text"
                name="address"
                label="Address"
                component={Input}
              />
              <br />
              <Field
                id="phone"
                type="tel"
                name="phone"
                label="Phone"
                component={Input}
              />
              <br />
              <Field
                id="when"
                component={DateTimePicker}
                label="When"
                name="when"
                disablePast
                minDate={nextDay}
                format="MM/dd/yyyy hh:mm"
                error={touched.when && errors.when}
              />
              <br />
              <div>
                <Button
                  // disabled={isSubmitting || !isValid}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </FormContainerStyled>
    </MuiPickersUtilsProvider>
  );
};

CheckoutForm.propTypes = {
  onCloseHandler: PropTypes.func.isRequired,
};

export default CheckoutForm;
