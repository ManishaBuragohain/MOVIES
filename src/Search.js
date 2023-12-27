import React from "react";
import { useGlobalContext } from "./context";
const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <>
      <section className="search-section">
        <h2>Search your favourite movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              className="search-input"
              value={query}
              placeholder="enter your movie"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;
