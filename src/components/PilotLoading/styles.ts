import styled from "styled-components";

const Container = styled.section`
  background-color: ${({ theme }) => theme.palette.white.main.hex()};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;

  h1 {
    font-family: ${({ theme }) => theme.fonts.familys.first}, sans-serif;
    font-size: 40px;
    line-height: 40px;
    color: ${({ theme }) => theme.palette.pink.main.hex()};
    font-weight: 500;
    text-align: center;

    span {
      font-weight: 700;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.familys.second}, sans-serif;
    line-height: 40px;
    font-size: 18px;
    margin-top: 20px;
    text-align: center;
  }

  @media (max-width: 600px) {
    p {
      width: 90%;
    }
  }
`;

export { Container };
