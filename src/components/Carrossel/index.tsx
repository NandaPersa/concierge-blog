import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { getNPost } from "../../services/RequestPosts";
import { Post } from "../../services/RequestPosts/types";
import CorroselImages from "../CorroselImages";
import { usePilotLoading } from "../../hooks/usePilotLoading";

import {
  Container,
  ContainerText,
  CustomLink,
  WrapperCarrossel,
} from "./styles";
import CarouselImages from "../CarouselImages";
import { Container, ContainerText, WrapperCarrossel } from "./styles";

const Carrossel: React.FC = () => {
  const { loading, setLoading } = usePilotLoading();
  const [posts, setPosts] = useState<Array<Post>>();
  const [value, setValue] = useState(0);

  const sliderSettings = {
    autoplay: true,
    dots: false,
    infinite: true,
    fade: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setValue(next),
  };

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
      setLoading(true);
      return [];
    };

    getPostsCarrossel();
  }, [loading, setLoading]);

  return (
    <>
      <Container>
        <WrapperCarrossel>
          {posts && (
            <>
              <Slider {...sliderSettings}>
                {posts &&
                  posts.map((item: Post) => (
                    <div key={item.id}>
                      <CarouselImages
                        img={item.image}
                        alt={item.title}
                        author={item.author.name}
                        imageAuthor={item.author.image}
                        category={item.categories[0].title}
                        active={value}
                        quantity={posts.length}
                      />
                    </div>
                  ))}
              </Slider>
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
