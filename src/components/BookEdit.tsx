import { ChangeEvent, FormEvent, useState } from "react";
import { Book } from "../types/book";
import useBooksContext from "../hooks/use-books-context";

export interface Props {
  book: Book;
  onSubmit: () => void;
}

function BookEdit({ book, onSubmit }: Props) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;

