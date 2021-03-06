import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ContainerSlider = styled.div`
  width: 700px;
  margin-right: 0;
  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ContainerMoreViews = styled.div`
  width: 500px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ContentArticles = styled.div`
  padding-left: 60px;
  padding-right: 60px;
`;
