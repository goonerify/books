import { Component } from "react";
import { Book } from "../types/book";
import BookShow from "./BookShow";

export interface Props {
  books: Book[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
}

class BookList extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const books = this.props.books.map((book) => {
      return (
        <BookShow
          key={book.id}
          book={book}
          onDelete={this.props.onDelete}
          onEdit={this.props.onEdit}
        />
      );
    });

    return <div className="book-list">{books}</div>;
  }
}

export default BookList;

