import React from 'react';
import { IBook } from '../Type/Type';
import Image from 'next/image';
import Link from 'next/link';

interface BookCardProps {
    book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
    return (
        <Link href={`/Books/${book.bookId}`}>
        
        <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 h-[570]">
            <div className="bg-[#1313130d] rounded-2xl p-8 flex justify-center items-center mb-6 h-64">
                <Image 
                    src={book.image} 
                    alt={book.bookName} 
                    width={130} 
                    height={180} 
                    className="drop-shadow-xl h-full w-auto object-contain"
                />
            </div>

            <div className="flex flex-wrap gap-3 mb-4">
                {book.tags?.map((tag, index) => (
                    <span 
                        key={index} 
                        className="bg-[#23BE0A0d] text-[#23BE0A] font-bold text-sm px-4 py-1.5 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className=' h-[150]'>

            <h2 className="text-2xl font-bold text-[#131313] mb-3 font-serif">
                {book.bookName}
            </h2>
            <p className="text-[#131313cc] font-medium text-base mb-5">
                By : {book.author}
            </p>
            </div>


            <div className="border-t border-dashed border-gray-300 mb-5"></div>

            <div className="flex justify-between items-center text-[#131313cc] font-medium">
                <span>{book.category}</span>
                <div className="flex items-center gap-2">
                    <span>{book.rating?.toFixed(2) || book.rating}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default BookCard;