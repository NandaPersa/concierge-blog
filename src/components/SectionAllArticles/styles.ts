import styled from "styled-components";

export const Container = styled.div``;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray.main.hex()};
  margin: 15px 0;
`;

export const ContentCategory = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin-left: 5px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;

  h1 {
    font-size: 36px;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.familys.first};
    color: ${({ theme }) => theme.palette.titles.main.hex()};
  }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
`;
