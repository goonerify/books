import { Component } from "react";
import { Book } from "../types/book";
import BookEdit from "./BookEdit";

export interface Props {
  book: Book;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
}

class BookShow extends Component<Props> {
  state: { showEdit: boolean } = { showEdit: false };

  constructor(props: Props) {
    super(props);
  }

  handleDeleteClick = () => {
    this.props.onDelete(this.props.book.id);
  };

  handleEditClick = () => {
    const showEdit = !this.state.showEdit;
    this.setState({ ...this.state, showEdit });
  };

  handleSubmit = (id: number, newTitle: string) => {
    const showEdit = false;
    this.setState({ ...this.state, showEdit });
    this.props.onEdit(id, newTitle);
  };

  render() {
    let content = <h3>{this.props.book.title}</h3>;

    if (this.state.showEdit) {
      content = (
        <BookEdit book={this.props.book} onSubmit={this.handleSubmit} />
      );
    }

    return (
      <div className="book-show">
        <img
          alt="books"
          src={`https://picsum.photos/seed/${this.props.book.id}/300/200`}
        />
        <div>{content}</div>
        <div className="actions">
          <button className="edit" onClick={this.handleEditClick}>
            Edit
          </button>
          <button className="delete" onClick={this.handleDeleteClick}>
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
  }
}

export default BookShow;

