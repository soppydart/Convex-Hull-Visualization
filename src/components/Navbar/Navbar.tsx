import { Link } from "@tanstack/react-router";

const Navbar = () => {
    return (
        <nav className="bg-blue-950 p-4 sticky top-0 z-50 opacity-100 font-code">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                <div className="flex space-x-6">
                    <Link to="/jarvis-march" className="text-white hover:text-gray-300">Jarvis March</Link>
                    <Link to="/kirkpatrick-seidel" className="text-white hover:text-gray-300">Kirkpatrick-Seidel</Link>
                    <Link to="/analysis" className="text-white hover:text-gray-300">Analysis</Link>
                    <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;