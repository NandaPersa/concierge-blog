import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel from "@brainhubeu/react-carousel";
import { getNPost } from "../../services/RequestPosts";
import { Post } from "../../services/RequestPosts/types";
import CorroselImages from "../CorroselImages";
import {
  Container,
  ContainerText,
  CustomLink,
  WrapperCarrossel,
} from "./styles";

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
  }, [value, posts]);

  return (
    <>
      <CustomLink to="/post">
        <Container>
          <WrapperCarrossel>
            {posts && (
              <>
                <Carousel value={value}>
                  {posts &&
                    posts.map((item: Post) => (
                      <div key={item.id}>
                        <CorroselImages
                          img={item.image}
                          alt={item.title}
                          author={item.author.name}
                          imageAuthor={item.author.image}
                          category={item.categories[0].title}
                          active={value}
                          quantity={posts.length - 1}
                        />
                      </div>
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
      </CustomLink>
    </>
  );
};

export default Carrossel;
