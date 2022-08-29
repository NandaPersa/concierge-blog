import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: auto;
  min-height: 68vh;

  > p {
    padding-left: 5%;
    font-family: ${({ theme }) => theme.fonts.familys.first};
    font-size: 18px;
    margin-bottom: 30px;

    span {
      font-family: ${({ theme }) => theme.fonts.familys.second};
    }
  }
`;

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;

  > div {
    margin-left: auto;
    margin-right: auto;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.familys.first};
    width: 100vw;
    text-align: center;
  }

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
