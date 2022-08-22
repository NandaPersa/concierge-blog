import React from "react";
import TagCategory from "../TagCategory";
import {
  Container,
  ContentCategory,
  ContentText,
  ImageArticle,
} from "./styles";

interface Props {
  img: string;
  title: string;
  resume: string;
  category: string;
  color: string;
}

const CardArticle = ({
  img,
  title,
  resume,
  category,
  color,
}: Props): JSX.Element => {
  return (
    <Container>
      <ImageArticle src={img} alt="" />
      <ContentCategory>
        <TagCategory color={color} name={category} />
      </ContentCategory>
      <ContentText>
        <h1>{title}</h1>
        <p>{resume}</p>
      </ContentText>
    </Container>
  );
};

export default CardArticle;
