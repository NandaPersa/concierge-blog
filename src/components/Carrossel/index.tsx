import React, { useEffect, useState } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { getNPost } from "../../services/RequestPosts";
import { Post } from "../../services/RequestPosts/types";
import CorroselImages from "../CorroselImages";
import { WrapperCarrossel } from "./styles";

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
      <WrapperCarrossel>
        {posts && (
          <>
            <Carousel plugins={["arrows"]}>
              {posts &&
                posts.map((item: Post) => (
                  <>
                    <CorroselImages img={item.image} alt={item.title} />
                  </>
                ))}
            </Carousel>
          </>
        )}
      </WrapperCarrossel>
    </>
  );
};

export default Carrossel;
