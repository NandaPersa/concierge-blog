import React from "react";
import { Container, Image, Autor, Category, Marker, Circle } from "./styles";

interface Props {
  img: string;
  alt: string;
  author: string;
  imageAuthor: string;
  category: string;
  active: number;
  quantity: number;
}

const CarouselImages = ({
  img,
  alt,
  author,
  imageAuthor,
  category,
  active,
  quantity,
}: Props): JSX.Element => {
  const circles = [];

  for (let i = 0; i < quantity; i += 1) {
    circles.push(<Circle key={`dot${i}`} active={i === active} />);
  }

  return (
    <Container>
      <Image borderColor={category} src={img} alt={alt} />
      <Autor>
        <p>{author}</p>
        <img src={imageAuthor} alt="imagem autor" />
      </Autor>
      <Category colorBack={category}>{category}</Category>
      <Marker>{circles}</Marker>
    </Container>
  );
};

export default CarouselImages;
