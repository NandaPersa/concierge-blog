import React, { useEffect, useState } from "react";
import { getMoreViewsPosts } from "../../services/RequestPosts";
import { Post } from "../../services/RequestPosts/types";
import CardMoreViews from "../CardMoreViews";

import { Container, Title } from "./styles";

const MoreViews: React.FC = () => {
  const [posts, setPosts] = useState<Array<Post>>();

  const getPostsCarrossel = async (): Promise<Post[]> => {
    const responseData = await getMoreViewsPosts(5, "desc");
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
    <Container>
      <Title>Mais vistos</Title>
      {posts &&
        posts.map((item: Post, idx) => (
          <CardMoreViews
            category={item.categories[0].title}
            title={item.title}
            img={item.image}
            resume={item.resume}
            colorCategory={item.categories[0].color}
            position={idx + 1}
          />
        ))}
    </Container>
  );
};

export default MoreViews;
