"use client"

import { IBook } from "@/app/Type/Type";
import { ImCross } from "react-icons/im";
import React, { useContext } from "react";
import { BookContext } from "@/app/Context/BookContext";
import { toast } from "react-toastify";
interface bookProps{
    book:IBook
}
const CrossBtn = ({ book }: bookProps) => {
    const {readBooks, setReadBooks, wishlistBooks , setWishlistBooks} = useContext(BookContext)
    const handleBtn = ()=>{
        setReadBooks(readBooks.filter((books) => books.bookId != book.bookId))
        setWishlistBooks(wishlistBooks.filter((books) => books.bookId != book.bookId))
        toast.success("Successfully removed");

    }

  return (
    <div>
      <button className="px-5 py-2 rounded-full text-red-600 text-sm font-semibold hover:bg-red-100 cursor-auto transition"
      onClick={()=> handleBtn()}>
         <ImCross />
      </button>
    </div>
  );
};

export default CrossBtn;
