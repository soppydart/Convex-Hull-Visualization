import { Link } from "@tanstack/react-router"

function Home() {
    return (
        <div className="bg-slate-900 min-h-screen font-code text-white pb-5 sm:pb-8 lg:pb-15">
            <h1 className="text-2xl lg:text-5xl sm:text-4xl font-medium text-center p-3 lg:p-5">Convex Hull Visualization</h1>

            <div className="text-sm sm:text-lg max-w-80 sm:max-w-2xl text-white lg:max-w-6xl mx-auto mt-3 lg:text-xl">
                <p>
                    Convex hulls are fundamental concepts in computational geometry, essential
                    for various applications such as computer graphics, robotics, and geographic
                    information systems. In simple terms, a convex hull is the smallest convex
                    shape that encloses a set of points in a plane or higher-dimensional space.
                </p>
                <h1 className='text-base py-2 sm:py-4 sm:text-xl lg:text-2xl font-bold underline lg:py-5'>Jarvis March (Gift Wrapping Algorithm)</h1>
                <p>
                    Jarvis March, also known as the Gift Wrapping Algorithm, is one of the
                    simplest algorithms used to compute the convex hull of a set of points.
                    It iteratively selects the point with the smallest polar angle with respect
                    to the current point and gradually constructs the convex hull. It's often used for
                    educational purposes and in scenarios with a small number of points.
                </p>
                <h1 className='text-base py-2 sm:py-4 sm:text-xl lg:text-2xl font-bold underline lg:py-5'>Kirkpatrick Seidel (Divide and Conquer Algorithm)</h1>
                <p>
                    Kirkpatrick Seidel algorithm is a more advanced method for computing the convex hull.
                    It utilizes the principle of divide and conquer to efficiently find the convex hull
                    in logarithmic time complexity. Although more complex than Jarvis March, Kirkpatrick
                    Seidel is highly efficient for large datasets and is widely used in practical applications.
                </p>
                <p>
                    <br />
                    Explore further to see these algorithms in action:
                </p>
            </div>

            <div className="flex justify-center">
                <ul className="text-sm sm:text-lg list-disc list-inside lg:text-xl font-medium">
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