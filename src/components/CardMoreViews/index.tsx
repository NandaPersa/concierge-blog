import React from "react";
import TagCategory from "../TagCategory";
import {
  Container,
  Image,
  Position,
  Content,
  Title,
  Resume,
  ContentCategory,
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
      <Image borderColor={colorCategory} src={img} alt="" />
      <Content>
        <ContentCategory>
          <TagCategory color={colorCategory} name={category} />
        </ContentCategory>
        <Title>{title}</Title>
        <Resume>{resume}</Resume>
      </Content>
    </Container>
  );
};

export default CardMoreViews;
