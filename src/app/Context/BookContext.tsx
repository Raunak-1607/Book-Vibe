'use client';

import React, { createContext, useEffect, useState } from 'react';
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
  const [isLoad , setIsLoad] = useState(false);

  useEffect(()=>{
    const saveReadBooks = localStorage.getItem("readBooks");
    const saveWishListBooks = localStorage.getItem("wishlistBooks");
    
    if(saveReadBooks){
      try {
        setReadBooks(JSON.parse(saveReadBooks));
      } catch (error) {
        console.error("Failed to parse readBooks from localStorage", error);
        localStorage.removeItem("readBooks");
      }
    }

    if(saveWishListBooks){
      try {
        setWishlistBooks(JSON.parse(saveWishListBooks));
      } catch (error) {
        console.error("Failed to parse wishlistBooks from localStorage", error);
        localStorage.removeItem("wishlistBooks");
      }
    }
    setIsLoad(true);
  },[]);

  useEffect(() => {
  if (!isLoad) return;

  localStorage.setItem(
    "readBooks",
    JSON.stringify(readBooks)
  );
}, [readBooks, isLoad]);

  useEffect(() => {
  if (!isLoad) return;

  localStorage.setItem(
    "wishlistBooks",
    JSON.stringify(wishlistBooks)
  );
}, [wishlistBooks, isLoad]);

  const shared: BookContextType = {
    readBooks,
    setReadBooks,
    wishlistBooks,
    setWishlistBooks,
  };

  return <BookContext.Provider value={shared}>{children}</BookContext.Provider>;
};

export default BookProvider;