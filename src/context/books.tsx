import { createContext } from "react";

const BooksContext = createContext<null>(null);

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <BooksContext.Provider value={null}>{children}</BooksContext.Provider>;
};

export { Provider };
export default BooksContext;

