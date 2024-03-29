import React from "react";
import BookItem from "./BookItem";
import styles from "../styles/BookList.module.css";

const BookList = ({ books }) => {
  return (
    <div className={styles.bookListContainer}>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
