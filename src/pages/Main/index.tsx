import React from "react";
import Authors from "../../components/Authors";
import Carrossel from "../../components/Carrossel";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import MoreViews from "../../components/MoreViews";
import SectionAllArticles from "../../components/SectionAllArticles";
import {
  Container,
  ContainerMoreViews,
  ContainerSlider,
  Content,
  ContentArticles,
} from "./styles";

const Principal: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <ContainerSlider>
            <Carrossel />
          </ContainerSlider>
          <ContainerMoreViews>
            <MoreViews />
          </ContainerMoreViews>
        </Content>
        <Authors />
        <ContentArticles>
          <SectionAllArticles />
        </ContentArticles>

        <Footer />
      </Container>
    </>
  );
};

export default Principal;
