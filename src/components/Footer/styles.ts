import styled from "styled-components";

export const ContainerFooter = styled.div`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  .baseboard {
    background-color: ${({ theme }) => theme.palette.titles.main.hex()};
    width: 1152;
    height: 150px;
    display: block;
    justify-content: center;
    margin-top: 50px;
    padding-top: 35px;
  }

  .writeFooter {
    color: ${({ theme }) => theme.palette.white.main.hex()};
    font-size: 14px;
    font-family: "poppins";
  }

  .logoFooter {
    width: 140px;
    height: 40px;
  }

  .container {
    margin-left: 50px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
    margin-right: 50px;
  }

  .logos {
    width: 130px;
    height: 50px;
    display: flex;
    justify-content: space-around;
  }

  @media screen and (max-width: 600px) {
    .logos {
      width: 100px;
      height: 500;
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
    }

    .baseboard {
      background-color: ${({ theme }) => theme.palette.titles.main.hex()};
      width: 1152;
      height: 180px;
      display: block;
      justify-content: center;
      margin-top: 80px;
      padding-top: 20px;
    }

    .writeFooter {
      font-size: 14px;
    }
    .logoFooter {
      width: 140px;
      height: 80px;
      padding-top: 20px;
    }
  }

  @media screen and (max-width: 490px) {
    .logos {
      width: 100px;
      height: 500;
      display: flex;
      justify-content: space-around;
      margin-bottom: 10px;
    }

    .baseboard {
      background-color: ${({ theme }) => theme.palette.titles.main.hex()};
      width: 1152;
      height: 160px;
      display: block;
      justify-content: center;
      margin-top: 80px;
      padding-top: 20px;
    }

    .writeFooter {
      font-size: 10px;
    }
    .logoFooter {
      width: 120px;
      height: 60px;
      padding-top: 20px;
    }
    .content {
      margin-right: 20px;
    }

    @media screen and (max-width: 320px) {
      .logoFooter {
        margin-left: 35px;
      }
      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;

        justify-content: center;
        align-items: center;
      }
      .logos {
        margin-left: 30px;
        margin-top: 5px;
      }

      .writeFooter {
        font-size: 10px;
        word-wrap: break-word;
      }
    }
  }
`;
