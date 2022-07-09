import React, { useEffect, useState } from "react";
import { getCategories } from "../../services/RequestCategory";
import { getAllPosts } from "../../services/RequestPosts";
import { Category, Post, RequestData } from "../../services/RequestPosts/types";
import CardArticle from "../CardArticle";
import TagCategory from "../TagCategory";
import {
  Container,
  Content,
  ContentCategory,
  CustomLink,
  Divider,
  HeaderSection,
} from "./styles";

const SectionAllArticles = (): JSX.Element => {
  const [listCategories, setListCategories] = useState<Array<Category>>();
  const [articlesPerPage, setArticlesPerPage] = useState<Array<Post>>();

  const getListCategories = async (): Promise<Category[]> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const responseData: Category[] | any = await getCategories();
    if (responseData.length > 0) {
      setListCategories(responseData);
    }
    return responseData;
  };

  const getArticlesPerPage = async (): Promise<RequestData[]> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const responseData: RequestData[] | any = await getAllPosts();
    if (responseData?.posts?.posts?.length > 0) {
      setArticlesPerPage(responseData.posts.posts);
      return responseData.posts;
    }
    return [];
  };

  useEffect(() => {
    getListCategories();
    getArticlesPerPage();
  }, []);

  return (
    <Container>
      <HeaderSection>
        <h1>Todos os artigos</h1>
        <Divider />
        <ContentCategory>
          {listCategories &&
            listCategories?.map(category => (
              <div key={category.id}>
                <TagCategory
                  key={category.id}
                  color={category.color}
                  name={category.title}
                />
              </div>
            ))}
        </ContentCategory>
      </HeaderSection>
      <CustomLink to="/post">
        <Content>
          {articlesPerPage &&
            articlesPerPage?.map(article => (
              <CardArticle
                key={article.id}
                img={article.image}
                resume={article.resume}
                title={article.title}
                color={article.categories[0].color}
                category={article.categories[0].title}
              />
            ))}
        </Content>
      </CustomLink>
    </Container>
  );
};

export default SectionAllArticles;
