import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Authors from "../../components/Authors";
import Carrossel from "../../components/Carrossel";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import MoreViews from "../../components/MoreViews";
import PilotLoading from "../../components/PilotLoading";
import SectionAllArticles from "../../components/SectionAllArticles";
import { usePilotLoading } from "../../hooks/usePilotLoading";
import {
  Container,
  ContainerMoreViews,
  ContainerSlider,
  Content,
  ContentArticles,
} from "./styles";

const Principal: React.FC = () => {
  const { loading, setLoading } = usePilotLoading();

  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 8000);
    }
  }, [loading, setLoading]);

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
      {!loading && (
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
      )}
      {loading && <PilotLoading />}
    </>
  );
};

export default Principal;
