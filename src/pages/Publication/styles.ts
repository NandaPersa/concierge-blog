import styled from "styled-components";

export const PostContent = styled.div`
  margin: 0%;
  padding: 0%;
  padding-left: 5%;
  padding-right: 5%;
  display: grid;
  .title {
    font-size: 30px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    font-family: ${({ theme }) => theme.fonts.familys.first};
    text-align: center;
  }
  .lineHorizontal {
    display: flex;
    justify-content: center;
    width: 70%;
    border-top: 1px solid #c4c4c4;
    margin: auto;
    margin-bottom: 50px;
  }

  .imageMain {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 327px;
    width: 100%;
    object-fit: cover;
    border-radius: 16px;
  }

  .mainPost {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
  }

  .textOne {
    color: ${({ theme }) => theme.palette.texts.main.hex()};
    font-family: "Poppins";
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .post5g {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 365px;
    width: 550px;
    margin-bottom: 50px;
    object-fit: cover;
  }

  .textTwo {
    font-family: "Poppins";
    color: ${({ theme }) => theme.palette.texts.main.hex()};
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  button {
    display: flex;
    justify-content: center;
    border: none;
    font-family: "Poppins";
    border-radius: 30px;
    background-color: ${({ theme }) => theme.palette.pink.main.hex()};
    color: ${({ theme }) => theme.palette.white.main.hex()};
    width: 100px;
    height: 30px;
    margin: auto;
    padding-top: 5px;
    cursor: pointer;
  }

  .return {
    text-decoration: none;
  }

  .category {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 20px;
    margin-top: -10px;
    padding-left: 50px;
  }

  .pink {
    padding-right: 10px;
  }

  .green {
    padding-right: 10px;
  }

  .contentPostsSimilar {
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    margin-bottom: 80px;
    padding-left: 5%;
    padding-right: 5%;
  }

  .titlePostSimilar {
    font-size: 40px;
    text-align: center;
  }
  /* .postSimilar1 {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .post1 {
    background-color: #c4c4c4;
    width: 120%;
    height: 150px;
    margin: auto;
    border-radius: 15px;
  }

  .categoryPost1 {
    width: 10%;
    margin-left: 15%;
    margin-top: -10px;
  }
  .categoryPost2 {
    width: 10%;
    margin-left: 15%;
    margin-top: -10px;
  }

  .categoryPost3 {
    width: 10%;
    margin-left: 15%;
    margin-top: -10px;
  }

  .categoryPost4 {
    width: 10%;
    margin-left: 15%;
    margin-top: -10px;
  }

  .titlePost1 {
    font-size: 24px;
    margin-bottom: 3%;
    margin-top: 20px;
    margin-left: 0;
  }

  .textPost1 .textPost2 .textPost3 .textPost4 {
    margin: auto;
    color: #c4c4c4;
    font-size: 14px;
  }

  .postSimilar2 {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .post2 {
    background-color: #c4c4c4;
    width: 120%;
    height: 150px;
    margin: auto;
    border-radius: 15px;
  }

  .titlePost2 {
    margin: auto;
    font-size: 24px;
    color: ${({ theme }) => theme.palette.titles.main.hex()};
    font-family: ${({ theme }) => theme.fonts.familys.first};
    margin-bottom: 3%;
    margin-top: 20px;
    margin-left: 0;
  }

  /* .textPost2 {
    margin: auto;
    color: #c4c4c4;
    color: ${({ theme }) => theme.palette.texts.main.hex()};
    font-family: ${({ theme }) => theme.fonts.familys.first};
    font-size: 14px;
  } */

  /* .postSimilar3 {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .post3 {
    background-color: #c4c4c4;
    width: 120%;
    height: 150px;
    margin: auto;
    border-radius: 15px;
  }

 .titlePost3 {
    margin: auto;
    font-size: 24px;
    margin-bottom: 3%;
    margin-top: 20px;
    margin-left: 0;
  }

  /* .textPost3 {
    margin: auto;
    color: #c4c4c4;
    color: ${({ theme }) => theme.palette.texts.main.hex()};
    font-family: ${({ theme }) => theme.fonts.familys.first};
    font-size: 14px;
  } */

  /* .postSimilar4 {
    display: flex;
    flex-direction: column;
    margin: auto;
  } */

  /* .post4 {
    background-color: #c4c4c4;
    width: 120%;
    height: 150px;
    margin: auto;
    border-radius: 15px;
  } */

  /* .titlePost4 {
    margin: auto;
    font-size: 24px;
    color: ${({ theme }) => theme.palette.titles.main.hex()};
    font-family: ${({ theme }) => theme.fonts.familys.first};
    margin-bottom: 3%;
    margin-top: 20px;
    margin-left: 0;
  } */

  /* .textPost4 {
    margin: auto;
    color: #c4c4c4;
    color: ${({ theme }) => theme.palette.texts.main.hex()};
    font-family: ${({ theme }) => theme.fonts.familys.first};
    font-size: 14px;
  } */

  @media (max-width: 1005px) {
    .contentPostsSimilar {
      margin: auto;
      align-items: center;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 780px) {
    .category {
      padding-left: 20px;
    }
    .contentPostsSimilar {
      grid-template-columns: repeat(1, 1fr);
      width: 100%;

      > div {
        margin-left: auto;
        margin-right: auto;
      }
    }

    .titlePostSimilar {
      font-size: 20px;
      margin: auto;
    }

    .textOne {
      text-align: center;
    }
  }

  @media (max-width: 680px) {
    .contentPostsSimilar {
      grid-template-columns: repeat(1, 1fr);
    }

    .titlePostSimilar {
      font-size: 20px;
      margin: auto;
    }
  }

  @media (max-width: 580px) {
    .category {
      padding-left: 10%;
    }

    .contentPostsSimilar {
      grid-template-columns: repeat(1, 1fr);
    }

    .titlePostSimilar {
      font-size: 20px;
      margin: auto;
    }
  }

  /* /* @media (max-width: 680px) {
    .contentPostsSimilar {
      margin-left: 30%;
      margin-right: 50%;
      grid-template-columns: repeat(1, 1fr);
    }

    .titlePostSimilar {
      font-size: 20px;
      margin: auto;
    }
  } */

  /* @media (max-width: 580px) {
    .contentPostsSimilar {
      margin-left: 25%;
      margin-right: 50%;
      grid-template-columns: repeat(1, 1fr);
    }

    .titlePostSimilar {
      font-size: 20px;
      margin: auto;
    }
  } */

  @media (max-width: 480px) {
    .category {
      width: 20%;
      padding-left: 5%;
    }

    .contentPostsSimilar {
      grid-template-columns: repeat(1, 1fr);
    }

    .titlePostSimilar {
      font-size: 20px;
      margin: auto;
    }
  }

  @media (max-width: 380px) {
    .contentPostsSimilar {
      grid-template-columns: repeat(1, 1fr);
    }

    .titlePostSimilar {
      font-size: 20px;
      margin: auto;
    }
  }
`;
