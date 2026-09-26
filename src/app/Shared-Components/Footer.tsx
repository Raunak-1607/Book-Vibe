import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-amber-50">

    <div className="container mx-auto flex flex-col gap-3 sm:flex-row justify-between items-center h-[100] p-8 bottom-0">
      <div>
        <Link href="/" className="btn btn-ghost text-xl font-bold italic">Book Vibe</Link>
      </div>
      <div>
        <p className="text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Book Vibe - All Rights Are Reserved.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
