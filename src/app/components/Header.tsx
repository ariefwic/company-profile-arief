import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
    return (
        <nav className="py-2 px-4 max-w-7xl bg-white bg-opacity-10 flex justify-between items-center">
            <div>
                <Link href="/">
                  <Image src="/images/logo.jpg" alt="logo" width={40} height={40} className="h-10"/>
                </Link>
            </div>
            <ul className="flex list-none text-sm m-0 p-0">
                <li className="mr-4">
                    <Link href="/">
                        <div className="text-black hover:text-gray-500 cursor-pointer">Home</div>
                    </Link>
                </li>
                <li className="mr-4">
                    <Link href="/about">
                        <div className="text-black hover:text-gray-500 cursor-pointer">About Us</div>
                    </Link>
                </li>
                <li className="mr-4">
                    <Link href="/teams">
                        <div className="text-black hover:text-gray-500 cursor-pointer">Teams</div>
                    </Link>
                </li>
                <li className="mr-4">
                    <Link href="/service">
                        <div className="text-black hover:text-gray-500 cursor-pointer">Service</div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
