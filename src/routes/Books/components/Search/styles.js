import styled from "@emotion/styled";

export const SearchContainer = styled.div({
  width: "40%",
  borderRadius: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: "lightBlue",
  "&:hover": {
    backgroundColor: "lightBlue",
    opacity: "0.7",
  },
  // margin: "auto",
  cursor: "text",
});

export const SearchIconContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
