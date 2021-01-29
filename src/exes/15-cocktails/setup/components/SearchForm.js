import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  const [refValue, setRefValue] = React.useState("");
  React.useEffect(() => {
    console.log(refValue);
  }, [refValue]);

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            value={refValue}
            ref={searchValue}
            onChange={() => {
              setRefValue(searchValue.current.value);
            }}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
