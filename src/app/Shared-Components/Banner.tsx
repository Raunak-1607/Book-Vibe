import Image from 'next/image';
import React from 'react';
import pic from '@/app/assets/hero_img.jpg'

const Banner = () => {
    return (
        <div className="container mx-auto mt-10 px-5">
            <div className="flex flex-col md:flex-row justify-between items-center bg-[#1313130D] rounded-3xl p-10 lg:px-24 lg:py-20">
                <div className="max-w-xl text-center md:text-left mb-10 md:mb-0">
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight lg:leading-snug mb-10 text-[#131313]">
                        Books to freshen up <br className="hidden lg:block" /> your bookshelf
                    </h1>
                    <button className="btn bg-[#23BE0A] hover:bg-[#1eb008] text-white border-none font-bold px-8 rounded-xl text-lg h-auto py-3">
                        View The List
                    </button>
                </div>
                <div>
                    <Image src={pic} width={350} height={400} alt='book' className="drop-shadow-xl rounded-3xl" />
                </div>
            </div>
        </div>
    );
};

export default Banner;