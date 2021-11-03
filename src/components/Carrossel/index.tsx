import React, { useEffect, useState } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { getNPost } from "../../services/RequestPosts";
import { Post } from "../../services/RequestPosts/types";
import CorroselImages from "../CorroselImages";
import { Container, ContainerText, WrapperCarrossel } from "./styles";

const Carrossel: React.FC = () => {
  const [posts, setPosts] = useState<Array<Post>>();

  const getPostsCarrossel = async (): Promise<Post[]> => {
    const responseData = await getNPost(4, "desc");
    if (
      responseData.success &&
      responseData.posts &&
      responseData.posts?.length > 0
    ) {
      setPosts(responseData.posts);
      return responseData.posts;
    }
    return [];
  };

  useEffect(() => {
    getPostsCarrossel();
  }, []);

  return (
    <>
      <Container>
        <WrapperCarrossel>
          {posts && (
            <>
              <Carousel>
                {posts &&
                  posts.map((item: Post) => (
                    <>
                      <CorroselImages
                        img={item.image}
                        alt={item.title}
                        author={item.author.name}
                        imageAuthor={item.author.image}
                      />
                    </>
                  ))}
              </Carousel>
            </>
          )}
        </WrapperCarrossel>
        <ContainerText>
          <h1>Title do post: bem bonito e chamativo</h1>
          <p>
            Um lindo resumo simplificado para o post. Pois precisamos de
            resuminhos aqui né.
          </p>
        </ContainerText>
      </Container>
    </>
  );
};

export default Carrossel;
