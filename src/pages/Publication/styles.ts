import styled from "styled-components";

export const PostContent = styled.div`
  margin: 0%;
  padding: 0%;
  display: grid;
  h1 {
    font-size: 30px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    font-family: "poppins";
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
    width: 70%;
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
    width: 70%;
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

  @media (max-width: 780px) {
    .textOne,
    .textTwo,
    .post5g,
    .mainPost {
      width: 80%;
    }

    .category {
      justify-content: center;
      padding-left: 0;
    }
  }
`;

export const SectionComments = styled.div`
  width: 100%;
  height: 686px;
  background-color: ${({ theme }) => theme.palette.purple.main.hex()};
  padding: 70px 120px;

  .content {
    overflow-y: scroll;
    height: 400px;
    width: 100%;
  }
`;

export const AddNewComment = styled.div`
  width: 100%;

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: ${({ theme }) => theme.palette.white.main.hex()};
    font-family: ${({ theme }) => theme.fonts.familys.first};
  }
`;

export const InputComment = styled.input`
  width: 100%;
  height: 52px;
  border-radius: 12px;
  border: none;
  padding-left: 20px;

  font-style: italic;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.familys.first};
`;
