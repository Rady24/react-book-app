import React from "react";
import styles from "../styles/BookItem.module.css";

const BookItem = ({ book }) => {
  return (
    <div className={styles.card}>
      <img
        src={book.volumeInfo.imageLinks.thumbnail} // Make sure this path is correct.
        alt={`Cover of the book titled ${book.volumeInfo.title}`}
        className={styles.coverImage}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{book.volumeInfo.title}</h3>
        <p className={styles.info}>
          Author:{" "}
          {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "N/A"}
        </p>
        <p className={styles.info}>
          Published:{" "}
          {book.volumeInfo.publishedDate
            ? book.volumeInfo.publishedDate
            : "N/A"}
        </p>
        <p className={styles.info}>
          Categories:{" "}
          {book.volumeInfo.categories
            ? book.volumeInfo.categories.join(", ")
            : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default BookItem;
