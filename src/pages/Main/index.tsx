import React, { useEffect } from "react";
import Authors from "../../components/Authors";
import Carrossel from "../../components/Carrossel";
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

const Main: React.FC = () => {
  const { loading, setLoading } = usePilotLoading();

  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 8000);
    }
  }, [loading, setLoading]);

  return (
    <>
      {!loading && (
        <Container>
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
        </Container>
      )}
      {loading && <PilotLoading />}
    </>
  );
};

export default Main;
