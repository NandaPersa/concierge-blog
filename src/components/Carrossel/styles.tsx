import styled from "styled-components";

export const Container = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
`;

export const WrapperCarrossel = styled.div`
  width: 640px;
  height: 413px;
`;

export const ContainerText = styled.div`
  width: 100%;
  margin-top: 15px;

  h1 {
    font-size: 28px;
    font-family: ${({ theme }) => theme.fonts.familys.first};
    color: ${({ theme }) => theme.palette.titles.main.hex()};
    font-weight: 700;
  }

  p {
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.familys.first};
    color: ${({ theme }) => theme.palette.texts.main.hex()};
    font-weight: 400;
  }
`;
