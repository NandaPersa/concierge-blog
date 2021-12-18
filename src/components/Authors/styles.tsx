import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.purple.main.hex()};
  width: 100%;
  height: 387px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  img {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export const ContentAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.familys.first};
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.white.main.hex()};
`;

export const Line = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.palette.white.main.hex()};
  width: 600px;
`;
