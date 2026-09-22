import React from 'react';
import BookCard from '../Shared-Components/BookCard';
import { IBook } from '../Type/Type';

const getBooks = async () => {
    try {
        const res = await fetch(`https://raw.githubusercontent.com/Raunak-1607/Book-Vibe/main/public/booksData.json`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        throw new Error("Failed to fetch");
    }
}

const BookPage = async () => {
    const books = await getBooks();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 container mx-auto">
            {
                books.map((book: IBook, index: number) => <BookCard key={index} book={book} />)
            }
        </div>
    );
};

export default BookPage;