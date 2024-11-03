import { ChangeEvent, Component, FormEvent } from "react";

export interface Props {
  onCreate: (title: string) => void;
}

class BookCreate extends Component<Props> {
  state = { title: "" };

  constructor(props: Props) {
    super(props);
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: event.target.value });
  };

  handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.onCreate(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div className="book-create">
        <h3>Add a book</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title</label>
          <input
            className="input"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <button className="button">Create!</button>
        </form>
      </div>
    );
  }
}

export default BookCreate;

