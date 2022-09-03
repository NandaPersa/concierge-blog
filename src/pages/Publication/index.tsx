/* eslint-disable no-console */
/* eslint-disable react/no-danger */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Post } from "../../services/RequestPosts/types";
import { PostContent } from "./styles";
import TagCategory from "../../components/TagCategory";
import { getPostById } from "../../services/RequestPosts";
import CardArticle from "../../components/CardArticle";

export function Publication(): JSX.Element {
  const [informationPost, setInformationPost] = useState<Post>();
  const match = useParams();

  useEffect(() => {
    const getPost = async (): Promise<void> => {
      if (match?.id) {
        const result = await getPostById(parseInt(match?.id, 10));
        if (result.success && result.post) {
          setInformationPost(result.post);
        }
      }
    };
    getPost();
  }, [match?.id]);

  return (
    <>
      <PostContent>
        <h1 className="title">{informationPost?.title}</h1>

        <div className="lineHorizontal" />
        <div className="mainPost">
          <img
            className="imageMain"
            src={informationPost?.image}
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
        <div
          dangerouslySetInnerHTML={{ __html: informationPost?.content || "" }}
          className="textOne"
        />

        <div className="postSimilar">
          <h1 className="titlePostSimilar">Mais posts Similares</h1>
          <div className="lineHorizontal" />
        </div>

        <div className="contentPostsSimilar">
          <CardArticle
            key={1}
            img="https://blog.lg.com.br/wp-content/uploads/2019/11/tecnologia-e-ser-humano-1.png"
            resume="Esse é um resumo"
            title="Esse é o título"
            color="#F21B6A"
            category="Front-end"
          />

          <CardArticle
            key={1}
            img="https://blog.lg.com.br/wp-content/uploads/2019/11/tecnologia-e-ser-humano-1.png"
            resume="Esse é um resumo"
            title="Esse é o título"
            color="#F21B6A"
            category="Front-end"
          />

          <CardArticle
            key={1}
            img="https://blog.lg.com.br/wp-content/uploads/2019/11/tecnologia-e-ser-humano-1.png"
            resume="Esse é um resumo"
            title="Esse é o título1"
            color="#F21B6A"
            category="Front-end"
          />

          <CardArticle
            key={1}
            img="https://blog.lg.com.br/wp-content/uploads/2019/11/tecnologia-e-ser-humano-1.png"
            resume="Esse é um resumo"
            title="Esse é o título"
            color="#F21B6A"
            category="Front-end"
          />
        </div>

        <Link to="/" className="return">
          <button type="submit">Voltar inicio</button>
        </Link>
      </PostContent>
    </>
  );
}
