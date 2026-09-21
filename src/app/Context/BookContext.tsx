'use client';

import React, { createContext, useState } from 'react';
import { IBook } from '../Type/Type';

export interface BookContextType {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishlistBooks: IBook[];
  setWishlistBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BookContext = createContext<BookContextType>({
  readBooks: [],
  setReadBooks: () => {},
  wishlistBooks: [],
  setWishlistBooks: () => {},
});

interface ContextProps {
  children: React.ReactNode;
}

const BookProvider = ({ children }: ContextProps) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlistBooks, setWishlistBooks] = useState<IBook[]>([]);

  const shared: BookContextType = {
    readBooks,
    setReadBooks,
    wishlistBooks,
    setWishlistBooks,
  };

  return <BookContext.Provider value={shared}>{children}</BookContext.Provider>;
};

export default BookProvider;