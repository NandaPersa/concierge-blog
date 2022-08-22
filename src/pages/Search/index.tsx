import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardArticle from "../../components/CardArticle";
import { searchPosts } from "../../services/RequestPosts";
import { Post } from "../../services/RequestPosts/types";

import Styled from "./styles";

const Search: React.FC = () => {
  const match = useParams();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async (): Promise<void> => {
      if (match?.term) {
        const result = await searchPosts(match.term);
        if (result.success && result.posts) {
          setPosts(result.posts);
        }
      }
    };
    getPosts();
  }, [match.term]);

  return (
    <Styled.Container>
      <Styled.Content>
        {posts.length > 0 &&
          posts?.map(post => (
            <CardArticle
              key={post.id}
              img={post.image}
              resume={post.resume}
              title={post.title}
              color={post.categories[0].color}
              category={post.categories[0].title}
            />
          ))}
      </Styled.Content>
    </Styled.Container>
  );
};

export default Search;
