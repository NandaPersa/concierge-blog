import React from "react";
import { Link } from "react-router-dom";

export function Publication(): JSX.Element {
  return (
    <>
      <div>
        <h1>Olá, mundo!</h1>
        <Link to="/">retornar a página inicial</Link>
      </div>
    </>
  );
}
