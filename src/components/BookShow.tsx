import { useState } from "react";
import { Book } from "../types/book";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

export interface Props {
  book: Book;
}

function BookShow({ book }: Props) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  // render() {
  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
    // <div className="book-show">
    //   <div className="actions">
    //     <button className="edit" onClick={this.handleEditClick}>
    //       Edit
    //     </button>
    //     <button className="delete" onClick={this.handleDeleteClick}>
    //       Delete
    //     </button>
    //   </div>
    //   {content}
    // </div>
  );
  // }
}

export default BookShow;

