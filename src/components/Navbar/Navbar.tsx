import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsNavOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <nav className="bg-blue-950 text-sm sm:text-base p-2 sm:p-4 sticky top-0 z-50 opacity-100 border-slate-800 font-code">
            <div className="container mx-auto flex justify-between items-center">
                <Link onClick={() => {
                    if (isNavOpen) toggleNav();
                }} to="/" className="text-white hover:text-gray-300">Home</Link>
                <div className="md:hidden">
                    <button onClick={toggleNav} className="text-white hover:text-gray-300 ml-40">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className="md:flex hidden space-x-6">
                    <Link to="/jarvis-march" className="text-white hover:text-gray-300">Jarvis March</Link>
                    <Link to="/kirkpatrick-seidel" className="text-white hover:text-gray-300">Kirkpatrick-Seidel</Link>
                    <Link to="/analysis" className="text-white hover:text-gray-300">Analysis</Link>
                    <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                </div>
            </div>
            {isNavOpen &&

                <aside ref={navRef} className="fixed top-0 right-0 z-40 w-40 h-70 transition-transform text-white
                rounded border-2 border-slate-800 md:hidden">

                    <div className="h-full px-0 py-4 overflow-y-auto bg-blue-950 text-xs">
                        <button onClick={toggleNav} className="text-white hover:text-gray-300
                        float-right pr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16 M4 12h16 M4 18h16"></path>
                            </svg>
                        </button>
                        <ul className="space-y-2 font-medium ms-3 mt-10">
                            <li className="flex justify-left">
                                <Link onClick={toggleNav} to="/jarvis-march" className="p-2 rounded-lg
                                text-white hover:text-gray-400 hover:underline">
                                    Jarvis March
                                </Link>
                            </li>
                            <li className="flex justify-left">
                                <Link onClick={toggleNav} to="/kirkpatrick-seidel" className="p-2 rounded-lg
                                text-white hover:text-gray-400 hover:underline">
                                    Kirkpatrick-Seidel
                                </Link>
                            </li>
                            <li className="flex justify-left">
                                <Link onClick={toggleNav} to="/analysis" className="p-2 rounded-lg
                                text-white hover:text-gray-400 hover:underline">
                                    Analysis
                                </Link>
                            </li>
                            <li className="flex justify-left">
                                <Link onClick={toggleNav} to="/about" className="p-2 rounded-lg
                                text-white hover:text-gray-400 hover:underline">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>

            }
        </nav>
    );
};

export default Navbar;