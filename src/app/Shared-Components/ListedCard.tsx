import React from 'react';
import { IBook } from '../Type/Type';
import Link from 'next/link';
import Image from 'next/image';

import CrossBtn from './BookDetails/CrossBtn';
interface bookProps{
    book:IBook
}
const ListedCard = ({book}:bookProps) => {
    console.log("Books" , book)
    return (
        <div className="w-full border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition duration-300">
      <div className="flex flex-col md:flex-row gap-5">

        {/* Book Image */}
        <div className="w-full md:w-[160px] h-[200px] md:h-[160px] bg-gray-100 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
          <Image
            src={book.image}
           alt={book.bookName}
            height={200}
            width={160}
            className="w-full h-full object-contain p-3"
          />
        </div>

        {/* Book Information */}
        <div className="flex-1">

          {/* Book Name */}
          <h2 className="text-xl font-bold text-gray-900">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="text-sm text-gray-600 mt-1">
            By : <span className="font-medium">{book.author}</span>
          </p>

          {/* Tags + Year */}
          <div className="flex flex-wrap items-center gap-2 mt-4">

            <span className="font-bold text-sm text-gray-800">
              Tags
            </span>

            {book.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium"
              >
                #{tag}
              </span>
            ))}

            <span className="text-gray-400 hidden sm:block">|</span>

            <span className="text-sm text-gray-600">
              📍 Year of Publishing:{" "}
              <span className="font-medium">
                {book.yearOfPublishing}
              </span>
            </span>
          </div>

          {/* Publisher + Pages */}
          <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-gray-500">

            <span className="flex items-center gap-2">
              👥 Publisher:{" "}
              <span className="font-medium">
                {book.publisher}
              </span>
            </span>

            <span className="flex items-center gap-2">
              📄 Page {book.totalPages}
            </span>

          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mt-3"></div>

          {/* Bottom Information */}
          <div className="flex flex-wrap items-center gap-2 mt-3">

            {/* Category */}
            <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-500 text-sm">
              Category: {book.category}
            </span>

            {/* Rating */}
            <span className="px-4 py-2 rounded-full bg-orange-50 text-orange-500 text-sm">
              Rating: {book.rating}
            </span>

            {/* Button */}

            <Link href={`/Books/${book.bookId}`}>
            
            <button
              className="px-5 py-2 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition"
            >
              View Details
            </button>
            </Link>
            <div>
              <CrossBtn book={book}/>
            </div>

          </div>
        </div>
      </div>
    </div>
    );
};

export default ListedCard;