import React from "react";
import { Link } from "react-router-dom";
import Authors from "../../components/Authors";
import Carrossel from "../../components/Carrossel";
import { Footer } from "../../components/Footer";
import MoreViews from "../../components/MoreViews";
import SectionAllArticles from "../../components/SectionAllArticles";
import {
  Container,
  ContainerMoreViews,
  ContainerSlider,
  Content,
  ContentArticles,
} from "./styles";

const Main: React.FC = () => {
  return (
    <>
      <Container>
        <div>
          <h1>Página Inicial</h1>
          <nav>
            <ul>
              <li>
                <Link to="/post">Publication</Link>
              </li>
            </ul>
          </nav>
        </div>
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

export default Main;
