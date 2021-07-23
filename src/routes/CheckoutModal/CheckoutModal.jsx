import React from "react";
import { useHistory } from "react-router-dom";
import ModalHeader from "./components/ModalHeader/ModalHeader";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import { DialogStyled } from "./styles";
import { ErrorBoundary } from "../../_shared/ErrorBoundary";

const CheckoutModal = () => {
  const history = useHistory();
  const [openModal, setOpenModal] = React.useState(false);

  React.useEffect(() => {
    setOpenModal(true);
  }, []);

  const onCloseHandler = () => {
    setOpenModal(false);
    history.goBack();
  };

  return (
    <div>
      <DialogStyled open={openModal} onClose={onCloseHandler}>
        <ModalHeader onClose={onCloseHandler}>Some Form</ModalHeader>
        <CheckoutForm onCloseHandler={onCloseHandler} />
      </DialogStyled>
    </div>
  );
};

export default CheckoutModal;
