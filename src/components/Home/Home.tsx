import { Link } from "@tanstack/react-router"

function Home() {
    return (
        <div className="bg-slate-900 min-h-screen font-code">
            <h1 className='text-5xl font-medium text-white text-center p-10'>Convex Hull Visualization</h1>

            <div className="flex justify-center">
                <ul className="list-disc list-inside text-3xl font-medium text-white">
                    <li className="m-2">
                        <Link to="/jarvis-march" className="hover:text-sky-700">
                            Jarvis March
                        </Link>
                    </li>
                    <li className="m-2">
                        <Link to="/kirkpatrick-seidel" className="hover:text-sky-700">
                            Kirkpatrick-Seidel
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Home