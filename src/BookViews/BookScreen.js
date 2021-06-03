import React from "react";
import Bookshelf from "./Bookshelf";
import { getAll } from "../BooksAPI";

export default class BookScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      crBooks: [],
      wtrBooks: [],
      readBooks: [],
    };
  }

  componentDidMount() {
    getAll().then((books) => {
      const newCRBooks = books.filter(
        (book) => book.shelf === "currentlyReading"
      );
      const newWTRBooks = books.filter((book) => book.shelf === "wantToRead");
      const newReadBooks = books.filter((book) => book.shelf === "read");

      this.setState({
        crBooks: newCRBooks,
        wtrBooks: newWTRBooks,
        readBooks: newReadBooks,
      });
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              title="Currently Reading"
              bookList={this.state.crBooks}
            />
            <Bookshelf title="Want to Read" bookList={this.state.wtrBooks} />
            <Bookshelf title="Read" bookList={this.state.readBooks} />
          </div>
        </div>
        <div className="open-search">
          <button onClick={this.props.handleButtonClick}>Add a book</button>
        </div>
      </div>
    );
  }
}
