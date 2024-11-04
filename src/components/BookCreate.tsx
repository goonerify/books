import { ChangeEvent, FormEvent, useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleInputChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;

