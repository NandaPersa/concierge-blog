import React from "react";
import {
  Container,
  Image,
  Position,
  Content,
  Category,
  Title,
  Resume,
} from "./styles";

interface Props {
  category: string;
  title: string;
  resume: string;
  img: string;
  colorCategory: string;
  position: number;
}

const CardMoreViews = ({
  img,
  category,
  title,
  resume,
  colorCategory,
  position,
}: Props): JSX.Element => {
  return (
    <Container>
      <Position>{position}º</Position>
      <Image src={img} alt="" />
      <Content>
        <Category color={colorCategory}>{category}</Category>
        <Title>{title}</Title>
        <Resume>{resume}</Resume>
      </Content>
    </Container>
  );
};

export default CardMoreViews;
