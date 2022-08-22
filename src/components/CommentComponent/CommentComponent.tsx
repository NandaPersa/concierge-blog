import React from "react";
import { Container, CreatedAt, Name, Text, HeaderComment } from "./styles";
import img from "../../assets/5g.png";

const CommentComponent: React.FC = () => {
  return (
    <Container>
      <HeaderComment>
        <img src={img} alt="" />
        <div>
          <Name>Jane Doe</Name>
          <CreatedAt>10 jan 2022 ás 14:23</CreatedAt>
        </div>
      </HeaderComment>
      <Text>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI.
      </Text>
    </Container>
  );
};

export default CommentComponent;
