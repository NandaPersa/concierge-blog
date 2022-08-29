import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardArticle from "../../components/CardArticle";
import { searchPosts } from "../../services/RequestPosts";
import { Post } from "../../services/RequestPosts/types";

import Styled from "./styles";

const Search = (): JSX.Element => {
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
      <p>
        Pesquisando por: <span>{match?.term}</span>{" "}
      </p>
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
        {(!posts || posts.length === 0) && (
          <h2>Desculpe, não encontramos resultados para essa pesquisa.</h2>
        )}
      </Styled.Content>
    </Styled.Container>
  );
};

export default Search;
