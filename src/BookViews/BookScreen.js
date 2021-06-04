import React from "react";
import Bookshelf from "./Bookshelf";
import { getAll } from "../BooksAPI";

export default class BookScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    getAll().then((books) => {
      const newCRBooks = books.filter(
        (book) => book.shelf === "currentlyReading"
      );
      const newWTRBooks = books.filter((book) => book.shelf === "wantToRead");
      const newReadBooks = books.filter((book) => book.shelf === "read");

      this.setState((prevState) => ({
        books: [newCRBooks, newWTRBooks, newReadBooks],
      }));
    });
  }

  render() {
    const shelfType = {
      currentlyReading: "Currently Reading",
      wantToRead: "Want to Read",
      read: "Read",
    };

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.books.map((bookshelf) => (
              <Bookshelf
                key={bookshelf[0].shelf}
                title={shelfType[bookshelf[0].shelf]}
                bookList={bookshelf}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <button onClick={this.props.handleButtonClick}>Add a book</button>
        </div>
      </div>
    );
  }
}
