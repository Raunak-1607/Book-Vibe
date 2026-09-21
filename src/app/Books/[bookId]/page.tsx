import React from 'react';
import Image from 'next/image';
import { IBook } from '../../Type/Type';
import Readbtn from '@/app/Shared-Components/BookDetails/Readbtn';
import Wishbtn from '@/app/Shared-Components/BookDetails/Wishbtn';

const getBooks = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        throw new Error("Failed to fetch");
    }
}

export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    const data = await res.json();

    // Next.js requires the route parameters to be strings
    return data.map((book: IBook) => ({
        bookId: book.bookId.toString(),
    }));
}

const BookDetailPage = async ({ params }: { params: { bookId: string } }) => {
    const { bookId } = await params;
    const books = await getBooks();

    // Find the specific book by its ID
    const book = books.find((b: IBook) => b.bookId === Number(bookId));

    if (!book) {
        return <div className="text-center mt-20 text-2xl font-bold">Book not found</div>;
    }

    return (
        <div className="container mx-auto px-5 py-10 flex flex-col lg:flex-row gap-12">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 bg-[#1313130d] rounded-2xl flex items-center justify-center p-12 lg:p-20 min-h-[400px] lg:h-[700px]">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={400}
                    height={500}
                    className="h-full w-auto object-contain drop-shadow-2xl rounded-md"
                />
            </div>

            {/* Details Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h1 className="text-4xl lg:text-5xl font-bold font-serif text-[#131313] mb-5">{book.bookName}</h1>
                <p className="text-[#131313cc] font-medium text-xl mb-6">By : {book.author}</p>

                <div className="border-t border-gray-200 mb-4"></div>
                <p className="text-[#131313cc] font-medium text-xl mb-4">{book.category}</p>
                <div className="border-t border-gray-200 mb-6"></div>

                <p className="text-[#131313cc] text-base leading-relaxed mb-10">
                    <span className="font-bold text-[#131313]">Review : </span> {book.review}
                </p>

                <div className="flex items-center gap-4 mb-6">
                    <span className="font-bold text-[#131313]">Tag</span>
                    <div className="flex gap-3 flex-wrap">
                        {book.tags?.map((tag: string, index: number) => (
                            <span key={index} className="bg-[#23BE0A0d] text-[#23BE0A] font-bold px-4 py-1.5 rounded-full text-sm">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="border-t border-gray-200 mb-8"></div>

                <div className="grid grid-cols-2 max-w-[400px] gap-y-4 mb-10 text-base">
                    <span className="text-[#131313b3]">Number of Pages:</span>
                    <span className="font-bold text-[#131313]">{book.totalPages}</span>

                    <span className="text-[#131313b3]">Publisher:</span>
                    <span className="font-bold text-[#131313]">{book.publisher}</span>

                    <span className="text-[#131313b3]">Year of Publishing:</span>
                    <span className="font-bold text-[#131313]">{book.yearOfPublishing}</span>

                    <span className="text-[#131313b3]">Rating:</span>
                    <span className="font-bold text-[#131313]">{book.rating}</span>
                </div>

                <div className="flex gap-4">
                    <Readbtn book={book} />
                    <Wishbtn book={book} />
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;