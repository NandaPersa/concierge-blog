import React from "react";
import { Link } from "react-router-dom";
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
      <div>
        <h1>Página Inicial</h1>
        <nav>
          <ul>
            <li>
              <Link to="/publication">Publication</Link>
            </li>
          </ul>
        </nav>
      </div>
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
