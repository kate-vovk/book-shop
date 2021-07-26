import React from "react";
import { useParams } from "react-router-dom";
import { getBooksApi } from "../../api/books";
import GoBack from "../../_shared/GoBack/GoBack";
import CardFooter from "../../_shared/CardFooter/CardFooter";
import {
  ContainerStyled,
  BackButtonContainerStyled,
  ContentContainerStyled,
  ImageContainerStyled,
  ImageStyled,
  TextContainerStyled,
} from "./styles";

const DetailedView = () => {
  const { id } = useParams();
  const [book, setBook] = React.useState({});
  React.useEffect(() => {
    getBooksApi(id).then((item) => {
      setBook(item);
    });
  }, []);
  return (
    <ContainerStyled>
      <BackButtonContainerStyled>
        <GoBack />
      </BackButtonContainerStyled>

      <ContentContainerStyled>
        <ImageContainerStyled>
          <ImageStyled alt={book.image} src={book.image} />
        </ImageContainerStyled>
        <TextContainerStyled>
          <h3>{book.title}</h3>
          <p style={{ textAlign: "justify" }}>{book.description}</p>
          <CardFooter bookId={id} />
        </TextContainerStyled>
      </ContentContainerStyled>
    </ContainerStyled>
  );
};

export default DetailedView;
