"use client";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import ImagePage from "../adminview/ImagePage";
import { HiOutlineLogin } from "react-icons/hi";



function Navbar() {
    const [open, setOpen] = useState(false);
    const [updates, setUpdates] = useState([]);

    // Fetch all users
    useEffect(() => {
        const fetchUpdatess = async () => {
            try {
                const { data } = await axios.get("/api/updates");
                setUpdates(data.updates || []);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUpdatess();
    }, []);

    return (
        <>

            <nav className=" fixed  z-10 w-full h-20 flex md:justify-between items-center justify-center bg-black  lg:pl-16 lg:pr-16 pl-4 pr-4 ">

                <div
                    to="/"
                    className=" font-bold font-carattere tracking-widest  items-center gap-4 hidden md:flex  "

                >
                    <Link
                        href="/"
                        className="bg-blue-500  md:block hover:bg-transparent px-4 py-1 rounded-md flex gap-2 items-center text-white text-lg font-medium"
                    >
                        Home
                    </Link>
                   
                    {updates.length !== 0 ? <Image src={updates[0].logo} alt="pic-1"width={100} height={100} className="rounded-full w-16 h-11" /> : <div>Loading...</div>}
                </div>

              

                <div className="flex gap-4">




                     <div className="flex justify-center items-center gap-4">


                        <Link
                            href="/userform"
                            className="bg-blue-400  hover:bg-transparent px-4 py-1 rounded-xl flex gap-2 items-center text-white text-lg font-medium"
                        >
                            Email
                        </Link>
                        <Link
                            href="/admin"
                            className="bg-blue-400  hover:bg-transparent px-4 py-1 rounded-xl flex gap-2 items-center text-white text-lg font-medium"
                        >
                            Admin
                        </Link>
                        <div className="flex gap-4 items-center justify-center">
                            <button className="bg-blue-400  hover:bg-transparent px-4 py-1 rounded-xl flex gap-2 items-center">
                                Login{" "}
                                <HiOutlineLogin/>
                            </button>

                        </div>
                    </div>

                    {/* <button
                        className="md:hidden block text-2xl"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <ImCross /> : <GiHamburgerMenu />}
                    </button> */}

                </div>
            </nav>

        </>
    );
}

export default Navbar;