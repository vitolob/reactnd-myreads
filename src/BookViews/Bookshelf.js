import React from "react";
import Book from "./Book";

export default function Bookshelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.bookList.map((book) => {
            return (
              <li>
                <Book data={book} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
