import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import { fetchBooksByCriteria } from "./api/api";
import Header from "./components/Header";
import { MagnifyingGlass } from "react-loader-spinner";
import style from "./styles/App.module.css";

const App = () => {
  const [searchCriteria, setSearchCriteria] = useState("person");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchBooksByCriteria(searchCriteria)
      .then((response) => {
        setBooks(response.items);
      })
      .catch((error) => console.error("Error fetching books:", error))
      .finally(() => setIsLoading(false));
  }, [searchCriteria]);

  const handleSearchChange = (event) => {
    setSearchCriteria(event.target.value);
  };

  return (
    <div>
      <Header
        value={searchCriteria}
        onChange={handleSearchChange}
        bookCount={books.length}
      />
      {isLoading ? (
        <div className={style.loader}>
          <MagnifyingGlass
            color="blue"
            height={300}
            width={300}
            visible={true}
          />
        </div>
      ) : (
        <BookList books={books} isLoading={isLoading} />
      )}
    </div>
  );
};

export default App;
