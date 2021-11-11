import React, { useEffect, useState } from "react";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel from "@brainhubeu/react-carousel";
import { getNPost } from "../../services/RequestPosts";
import { Post } from "../../services/RequestPosts/types";
import CorroselImages from "../CorroselImages";
import { Container, ContainerText, WrapperCarrossel } from "./styles";

const Carrossel: React.FC = () => {
  const [posts, setPosts] = useState<Array<Post>>();
  const [value, setValue] = useState(0);

  const getPostsCarrossel = async (): Promise<Post[]> => {
    const responseData = await getNPost(5, "desc");
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

  const onChange = (values: number): void => {
    if (posts) {
      if (values > posts?.length - 2) {
        setValue(0);
      } else {
        setValue(values);
      }
    }
  };

  useEffect(() => {
    getPostsCarrossel();
  }, []);

  useEffect(() => {
    if (posts) {
      if (value > posts?.length - 2) {
        setValue(0);
      } else {
        setTimeout(() => setValue(value + 1), 2000);
      }
    }
    // eslint-disable-next-line no-console
    console.log(value);
  }, [value, posts]);

  return (
    <>
      <Container>
        <WrapperCarrossel>
          {posts && (
            <>
              <Carousel value={value}>
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
          <h1>{posts && posts[value].title}</h1>
          <p>{posts && posts[value].resume}</p>
        </ContainerText>
      </Container>
    </>
  );
};

export default Carrossel;
