"use client";

import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import ListedCard from "../Shared-Components/ListedCard";

const ListedPage = () => {
  const { readBooks, wishlistBooks } = useContext(BookContext);
  console.log("ReadBooks", readBooks);
  return (
    <>
      <div className="container mx-auto bg-amber-100 mt-5 h-20 flex justify-center items-center rounded-3xl">
        <h1 className=" text-center text-3xl font-bold">Listed Books</h1>
      </div>

      <div className="tabs tabs-box container mx-auto mt-4">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Read Books"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {
            readBooks.map((book,index) => <ListedCard key={index} book={book}></ListedCard>)
          }
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Wishlist Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {
            wishlistBooks.map((book,ind)=> <ListedCard key={ind} book={book}></ListedCard>)
          }
        </div>

        
      </div>
    </>
  );
};

export default ListedPage;
