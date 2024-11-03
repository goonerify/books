import { ChangeEvent, Component, FormEvent } from "react";
import { Book } from "../types/book";

export interface Props {
  book: Book;
  onSubmit: (id: number, newTitle: string) => void;
}

class BookEdit extends Component<Props> {
  state: { title: string } = { title: this.props.book.title };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.onSubmit(this.props.book.id, this.state.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="book-edit">
        <label>Title</label>
        <input
          className="input"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button className="button is-primary">Save</button>
      </form>
    );
  }
}

export default BookEdit;

