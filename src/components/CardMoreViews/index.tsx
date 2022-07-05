import React from "react";
import { Link } from "react-router-dom";
import TagCategory from "../TagCategory";
import {
  Container,
  Image,
  Position,
  Content,
  Title,
  Resume,
  ContentCategory,
  CustomLink,
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
    // eslint-disable-next-line react/jsx-no-undef
    <CustomLink to="/post">
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
    </CustomLink>
  );
};

export default CardMoreViews;
