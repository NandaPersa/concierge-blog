import React, { useEffect, useState } from "react";
import { getAuthors } from "../../services/RequestAuthors";
import { Author } from "../../services/RequestAuthors/types";
import CardAuthor from "./CardAuthor";
import { Container, ContentAuthor, Line, Title } from "./styles";
import heart from "../../assets/heart.svg";

const Authors = (): JSX.Element => {
  const [listAuthor, setListAuthors] = useState<Array<Author>>();

  const getListAuthors = async (): Promise<Author[]> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const responseData: Author[] | any = await getAuthors();
    setListAuthors(responseData);
    return responseData;
  };

  useEffect(() => {
    getListAuthors();
  }, []);
  return (
    <Container>
      <Title>Nossos editores</Title>
      <Line />
      <ContentAuthor>
        {listAuthor &&
          listAuthor.map((item: Author, idx) => (
            <div key={item.id} className="styled">
              <div key={item.id}>
                <CardAuthor
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  occupation={item.ocupation}
                />
              </div>
              {idx === 0 && (
                <div>
                  <img src={heart} alt="" />
                </div>
              )}
            </div>
          ))}
      </ContentAuthor>
    </Container>
  );
};

export default Authors;
