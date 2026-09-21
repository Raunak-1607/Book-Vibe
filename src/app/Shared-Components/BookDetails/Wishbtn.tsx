"use client"

import { BookContext } from '@/app/Context/BookContext';
import { IBook } from '@/app/Type/Type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
interface wishProps {
    book: IBook;
}
const Wishbtn = ({ book }: wishProps) => {
    const { wishlistBooks, setWishlistBooks, readBooks } = useContext(BookContext);

    const handleWishBtn = () => {
        const isAlreadyRead = readBooks.some((b) => b.bookId === book.bookId);
        const isAlreadyWishlisted = wishlistBooks.some((b) => b.bookId === book.bookId);

        if (isAlreadyRead) {
            toast.error("You have already read this book");
        } else if (isAlreadyWishlisted) {
            toast.error("You have already added this book to wishlist");
        } else {
            setWishlistBooks([...wishlistBooks, book]);
            toast.success("Book added to wishlist successfully");
        }
    };

    return (
        <button className="btn bg-[#50B1C9] border-none text-white hover:bg-[#3f8e9f] font-bold px-8 rounded-lg" onClick={() => handleWishBtn()}>Wishlist</button>
    );
};

export default Wishbtn;