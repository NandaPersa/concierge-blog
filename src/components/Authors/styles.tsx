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

  @media (max-width: 1000px) {
    height: auto;
    padding: 15px 0;
  }
`;

export const ContentAuthor = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  .styled {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    .styled {
      flex-direction: column;
    }
  }
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

  @media (max-width: 1000px) {
    width: 80%;
  }
`;
