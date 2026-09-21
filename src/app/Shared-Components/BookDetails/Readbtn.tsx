"use client";

import { BookContext } from '@/app/Context/BookContext';
import { IBook } from '@/app/Type/Type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

interface readProps {
    book: IBook;
}

const Readbtn = ({ book }: readProps) => {

    const { readBooks, setReadBooks } = useContext(BookContext)

    const handleReadBooks = () => {
        const isAlreadyRead = readBooks.some((b) => b.bookId === book.bookId);

        if (isAlreadyRead) {
            toast.error("You have already read this book");
        } else {
            setReadBooks([...readBooks, book]);
            toast.success("Book added successfully");
        }
        console.log("Read btn triggered");
    };
    return (
        <button className="btn bg-transparent border border-gray-300 text-[#131313] hover:bg-gray-100 font-bold px-8 rounded-lg" onClick={() => handleReadBooks()}>Read</button>
    );
};

export default Readbtn;