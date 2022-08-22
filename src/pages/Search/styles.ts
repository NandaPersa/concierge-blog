import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  } ;
`;

export default {
  Container,
  Content,
};
