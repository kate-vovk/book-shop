import { styled } from "@material-ui/styles";
import { DialogTitle, Button } from "@material-ui/core";

export const DialogTitleStyled = styled(DialogTitle)(() => ({
  display: "flex",
  padding: "10px",
  backgroundColor: "lightgrey",
  alignItems: "center",
  justifyContent: "center",
}));

export const CloseButtonButtonStyled = styled(Button)(() => ({
  position: "absolute",
  right: "10px",
}));
