import React, { useContext, useEffect, useReducer } from "react";
import { useCallback } from "react";
import reducer from "./reducer";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const initialState = {
  isLoading: true,
  searchTerms: "a",
  cocktails: [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setIsLoading = (value) => {
    dispatch({ type: "LOADING", payload: { isLoading: value } });
  };
  const setSearchTerm = (terms) => {
    dispatch({ type: "SEARCHTERM", payload: { searchTerms: terms } });
  };
  const setCocktails = (value) => {
    dispatch({ type: "COCKTAILS", payload: { cocktails: value } });
  };
  const fetchDrinks = useCallback(async () => {
    setIsLoading(true);
    try {
      const id = state.searchTerms;
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            img: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [state.searchTerms]);

  useEffect(() => {
    fetchDrinks();
  }, [fetchDrinks]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        setIsLoading,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
