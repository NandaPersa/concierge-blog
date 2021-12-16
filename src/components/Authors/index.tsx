import React, { useEffect, useState } from "react";
import { getAuthors } from "../../services/RequestAuthors";
import { Author } from "../../services/RequestAuthors/types";
import CardAuthor from "./CardAuthor";
import { Container } from "./styles";

const Authors = (): JSX.Element => {
  const [listAuthor, setListAuthors] = useState<Array<Author>>();

  const getListAuthors = async (): Promise<Author[]> => {
    const responseData: Author[] | any = await getAuthors();
    setListAuthors(responseData);
    return responseData;
  };

  useEffect(() => {
    getListAuthors();
  }, []);
  return (
    <Container>
      {listAuthor &&
        listAuthor.map((item: Author) => (
          <div key={item.id}>
            <CardAuthor
              name={item.name}
              image={item.image}
              occupation={item.ocupation}
            />
          </div>
        ))}
    </Container>
  );
};

export default Authors;
