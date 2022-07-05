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
    width: 912px;
    border-top: 1px solid #c4c4c4;
    margin: auto;
    margin-bottom: 50px;
  }

  .imageMain {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 327px;
    width: 912px;
  }

  .mainPost {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .textOne {
    color: ${({ theme }) => theme.palette.texts.main.hex()};
    font-family: "Poppins";
    font-size: 16px;
    margin-left: 180px;
    margin-right: 180px;
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
  }

  .textTwo {
    font-family: "Poppins";
    color: ${({ theme }) => theme.palette.texts.main.hex()};
    font-size: 16px;
    margin-left: 180px;
    margin-right: 180px;
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
    justify-content: space-between;
    margin-left: 240px;
    height: 20px;
    width: 80px;
    margin-top: -10px;

    /* position: absolute;
    bottom: -63px; */
  }

  /* * .category {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 220px;
    height: 20px;
    width: 80px;
    position: absolute;
    bottom: 63px;
  } */

  /* .category {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 220px;
    margin-top: 60;
  } */
  .pink {
    padding-right: 10px;
  }

  .green {
    padding-right: 10px;
  }

  @media screen and (min-width: 901px) {
    .category {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 280px;
      margin-right:210px;
      margin-top: -5px;
    }

    .lineHorizontal {
    display: flex;
    justify-content: center;
    width: 912px;
    border-top: 1px solid #c4c4c4;
    margin: auto;
    margin-bottom: 50px;
  }

  .textOne {
    color: ${({ theme }) => theme.palette.texts.main.hex()};
    font-family: "Poppins";
    font-size: 16px;
    margin-left: 180px;
    margin-right: 180px;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .imageMain {
      display: flex;
      justify-content: center;
      margin: auto;
      height: 130px;
      width: 540px;
    }

  

  }

  @media screen and (max-width: 900px) {
   
    .category {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 50px;
      margin-right:210px;
      margin-top: -5px;
    }

    .mainPost {
      display: flex;
      justify-content: center;
      width: 210;
      margin: auto;
    }

    .imageMain {
      display: flex;
      justify-content: center;
      margin: auto;
      height: 90px;
       width: 280px;
    }


    .oneCategory {
      font-size: 6px;
      min-width: 5px !important;
      height: 10px;
      margin: auto;
    }

    .twoCategory {
      font-size: 6px;
      min-width: 5px !important;
      height: 10px;
      margin: auto;
    }

    .treeCategory {
      font-size: 6px;
      min-width: 5px;
      height: 10px;
      margin: auto;
    }

  
    }
    .textOne {
      font-size: 14px;
      margin: auto;
      margin-left: 100px;
      margin-right: 100px;
      margin-top: 50px;
      margin-bottom: 50px;
    }

    .textTwo {
      font-size: 14px;
      margin: auto;
      margin-left: 100px;
      margin-right: 100px;
      margin-top: 50px;
      margin-bottom: 50px;
    }

    h1 {
      font-size: 16px;
      margin: auto;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      font-family: "poppins";
    }
    .lineHorizontal {
      display: flex;
      justify-content: center;
      width: 510px;
      border-top: 1px solid #c4c4c4;
      margin: auto;
      margin-bottom: 50px;
    }

    .post5g {
      display: flex;
      justify-content: center;
      margin: auto;
      height: 150px;
      width: 310px;
      margin-bottom: 50px;
    }

    /* @media screen and (max-width: 545px) { */
    /* 539 otimo */
    /* 650 */
  }
  /* @media screen and (max-width: 500px) {
    .category {
      display: block;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 90px;
      height: 1000px;
      width: 50px;
      margin-top: -10px;
    }

    .imageMain {
      display: flex;
      justify-content: center;
      margin: auto;
      height: 100px;
      width: 310px;
    }

    .textOne {
      font-size: 12px;
      margin: auto;
      margin-left: 85px;
      margin-right: 85px;
      margin-top: 50px;
      margin-bottom: 50px;
    }

    .textTwo {
      font-size: 12px;
      margin: auto;
      margin-left: 85px;
      margin-right: 85px;
      margin-top: 50px;
      margin-bottom: 50px;
    }

    h1 {
      font-size: 16px;
      margin: auto;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      font-family: "poppins";
    }
    .lineHorizontal {
      display: flex;
      justify-content: center;
      width: 310px;
      border-top: 1px solid #c4c4c4;
      margin: auto;
      margin-bottom: 50px;
    }

    .post5g {
      display: flex;
      justify-content: center;
      margin: auto;
      height: 190px;
      width: 310px;
      margin-bottom: 50px;
    }
  } */

  @media screen and (max-width: 700px) {
    .category {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 50px;
      margin-right: 190px;
      margin-top: -5px;
    }

    .oneCategory {
      font-size: 6px;
      min-width: 5px !important;
      height: 10px;
      margin: auto;
    }

    .twoCategory {
      font-size: 6px;
      min-width: 5px !important;
      height: 10px;
      margin: auto;
    }

    .treeCategory {
      font-size: 6px;
      min-width: 5px;
      height: 10px;
      margin: auto;
    }

    .mainPost {
      display: flex;
      justify-content: center;
      width: 110;
      margin: auto;
    }

    .imageMain {
      display: flex;
      justify-content: center;
      margin: auto;
      height: 90px;
      width: 280px;
    }

    .post5g {
      display: flex;
      justify-content: center;
      margin: auto;
      height: 250px;
      width: 310px;
      margin-bottom: 50px;
    }
  }    

  @media screen and (max-width: 600px) {
    .category {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 50px;
      margin-right: 180px;
      margin-top: -5px;
    }

    .oneCategory {
      font-size: 2px;
      min-width: 5px !important;
      height: 10px;
      margin: auto;

      p{
        font-size: 6px;
      }
    }

    .twoCategory {
      font-size: 6px;
      min-width: 5px !important;
      height: 10px;
      margin: auto;

      p{
        font-size: 6px;
      }
    }

    .treeCategory {
      font-size: 6px;
      min-width: 5px;
      height: 10px;
      margin: auto;

      p{
        font-size: 6px;
      }
    }
    /* .category {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 50px;
      margin-right: 50px;
      margin-top: -5px;
    }


    .oneCategory {
      font-size: 4px;
      min-width: 4px !important;
      height: 10px;
      margin: auto;
    }

    .twoCategory {
      font-size: 4px;
      min-width: 4px !important;
      height: 10px;
      margin: auto;
    }

    .treeCategory {
      font-size: 4px;
      min-width: 4px !important;
      height: 10px;
      margin: auto;
    } */

    .mainPost {
      display: flex;
      justify-content: center;
      width: 110;
      margin: auto;
    }

    .imageMain {
      display: flex;
      justify-content: center;
      margin: auto;
      height: 90px;
      width: 240px;
    }

    .textOne {
      font-size: 12px;
      margin: auto;
      margin-left: 85px;
      margin-right: 85px;
      margin-top: 50px;
      margin-bottom: 50px;
    }

    .textTwo {
      font-size: 12px;
      margin: auto;
      margin-left: 85px;
      margin-right: 85px;
      margin-top: 50px;
      margin-bottom: 50px;
    }

    h1 {
      font-size: 16px;
      margin: auto;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      font-family: "poppins";
    }
    .lineHorizontal {
      display: flex;
      justify-content: center;
      width: 210px;
      border-top: 1px solid #c4c4c4;
      margin: auto;
      margin-bottom: 50px;
    }

    .post5g {
      display: flex;
      justify-content: center;
      margin: auto;
      height: 180px;
      width: 210px;
      margin-bottom: 50px;
    }
  };

`;
