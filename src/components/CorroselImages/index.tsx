import React from "react";
import { Container, Image, Autor, Category } from "./styles";

interface Props {
  img: string;
  alt: string;
  author: string;
  imageAuthor: string;
}

const CorroselImages = ({
  img,
  alt,
  author,
  imageAuthor,
}: Props): JSX.Element => {
  return (
    <Container>
      <Image src={img} alt={alt} />
      <Autor>
        <p>{author}</p>
        <img src={imageAuthor} alt="imagem autor" />
      </Autor>
      <Category>CATEGORY</Category>
    </Container>
  );
};

export default CorroselImages;
