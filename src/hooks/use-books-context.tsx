import { useContext } from "react";
import BooksContext, { ValueToShare } from "../context/books";

function useBooksContext() {
  const context = useContext(BooksContext) as ValueToShare;

  return context;
}

export default useBooksContext;
