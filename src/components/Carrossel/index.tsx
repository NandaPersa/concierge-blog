import React, { useEffect, useState } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { getNPost } from "../../services/RequestPosts";
import { Post } from "../../services/RequestPosts/types";

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
      {posts && (
        <Carousel plugins={["arrows"]}>
          {posts && posts.map((item: Post) => <img src={item.image} alt="" />)}
        </Carousel>
      )}
    </>
  );
};

export default Carrossel;
