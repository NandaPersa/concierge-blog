import React from "react";
import { Link } from "react-router-dom";

import ImgMainPost from "../../assets/main-post.png";
import Img5g from "../../assets/5g.png";

import { PostContent } from "./styles";
import TagCategory from "../../components/TagCategory";

export function Publication(): JSX.Element {
  return (
    <>
      <PostContent>
        <h1>Title do Post!</h1>

        <div className="lineHorizontal" />
        <div className="mainPost">
          <img
            className="imageMain"
            src={ImgMainPost}
            alt="Imagem com a parte superior de um celular demonstrando a rede 5G"
          />
          <div className="category">
            <div className="pink">
              {" "}
              <TagCategory
                key={1}
                color="#F21B6A"
                name="Categoria "
                customClass="oneCategory"
              />
            </div>
            <div className="green">
              {" "}
              <TagCategory
                key={2}
                color="#25B900"
                name="Categoria"
                customClass="twoCategory"
              />
            </div>
            <div className="purple">
              <TagCategory
                key={3}
                color="#5F4BB6"
                name="Categoria"
                customClass="treeCategory"
              />
            </div>
          </div>
        </div>
        <p className="textOne">
          O governo do Estado de <strong>São Paulo </strong> anunciou nesta
          semana o programa Conecta SP para acelerar a chegada da cobertura 5G a
          todos os municípios paulistas. A iniciativa estadual conta com
          investimento de R$ 3 milhões e incentiva os gestores municipais a
          modernizar as legislações locais de antenas para a nova tecnologia.{" "}
          <br /> <br /> O primeiro leilão do <strong>5G</strong> no Brasil
          aconteceu recentemente, mas ainda há um longo caminho a ser percorrido
          até a ampla implementação. Às vésperas do leilão, apenas{" "}
          <strong>7 capitais</strong> estavam preparadas para receber a
          tecnologia e, atualmente, 20 milhões de brasileiros ainda só possuem
          3G.
        </p>
        <img
          src={Img5g}
          alt="Imagem com o número 5 e a letra G"
          className="post5g"
        />
        <p className="textTwo">
          Nesta etapa inicial, a principal meta do Conecta SP é estimular a
          modernização das legislações municipais, aspecto considerado
          fundamental para a rápida implantação do 5G. Prefeitos e vereadores
          conhecerão detalhes da proposta e contarão com apoio técnico do Estado
          para atualizar as leis locais sobre antenas de sinal. <br /> <br /> A
          previsão é que seja necessário um investimento inicial de R$ 4 bilhões
          em infraestrutura apenas em São Paulo para atender aos requisitos do
          5G. Ao todo, esse mercado deve movimentar R$ 266 bilhões em todo o
          estado em médio prazo.
          <br />
          <br /> Quais são as suas expectativas sobre o 5G? Conte para a gente
          nos comentários!
        </p>

        <div className="postSimilar">
          <h1>Mais posts Similares</h1>
          <div className="lineHorizontal" />
        </div>

        <Link to="/" className="return">
          <button type="submit">Voltar inicio</button>
        </Link>
      </PostContent>
    </>
  );
}
