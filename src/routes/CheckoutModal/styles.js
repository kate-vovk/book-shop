import { Dialog } from "@material-ui/core";
import { styled } from "@material-ui/styles";

export const DialogStyled = styled(Dialog)(() => ({
  margin: "auto",
  maxWidth: "350px",
  height: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
