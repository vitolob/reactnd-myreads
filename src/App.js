import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import BookScreen from "./BookViews/BookScreen";
import SearchScreen from "./SearchViews/SearchScreen";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  };

  handleSSButtonClick = () => {
    this.setState({ showSearchPage: false });
  };

  handleBSButtonClick = () => {
    this.setState({ showSearchPage: true });
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchScreen handleButtonClick={this.handleSSButtonClick} />
        ) : (
          <BookScreen handleButtonClick={this.handleBSButtonClick} />
        )}
      </div>
    );
  }
}

export default BooksApp;
