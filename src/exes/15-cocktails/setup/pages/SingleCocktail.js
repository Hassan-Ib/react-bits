import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      <h2>single cocktail page </h2>
    </div>
  );
};

export default SingleCocktail;
