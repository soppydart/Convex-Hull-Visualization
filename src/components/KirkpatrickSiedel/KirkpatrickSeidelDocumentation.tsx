function KirkpatrickSeidelDocumentation() {
    return (
        <div className="text-white max-w-6xl mx-auto mt-3 text-xl">
            <h2 className="text-4xl underline">Classes</h2>
            <ul className="max-w-5xl mx-auto mt-3 text-xl list-decimal">
                <li>
                    <h3 className="text-3xl mt-6">
                        Point
                    </h3>
                    <ul className="max-w-4xl mx-auto mt-3 text-xl list-disc list-inside">
                        <li className="py-5">
                            <strong>Description:</strong> Data Structure to store 2D points using X, and Y cartesian coordinates
                        </li>
                        <li className="py-5">
                            <strong>Constructor Parameters:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl list-none list-inside">
                                <li>
                                    <span className="text-pink-400">double</span> <span className="text-green-400">x</span>: X coordindate of the point
                                </li>
                                <li>
                                    <span className="text-pink-400">double</span> <span className="text-green-400">y</span>: Y coordinate of the point
                                </li>
                            </ul>
                        </li>
                        <li className="py-5">
                            <strong>Methods:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl  list-none list-inside">
                                <li>
                                    <span className="text-pink-400">double</span> <span className="text-green-400">getX</span>(): Returns the X coordinate
                                </li>
                                <li>
                                    <span className="text-pink-400">double</span> <span className="text-green-400">getY</span>(): Returns Y corrdinate
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-4xl underline">Functions</h2>
            <ul className="max-w-5xl mx-auto mt-3 text-xl list-decimal">
                <li>
                    <h3 className="text-3xl mt-6">
                        orientation()
                    </h3>
                    <ul className="max-w-4xl mx-auto mt-3 text-xl list-disc list-inside">
                        <li className="py-5">
                            <strong>Description:</strong> Determines the orientation of the
                            third point to the line joining the first and second point in the
                            coordinate plane using cross-product
                        </li>
                        <li className="py-5">
                            <strong>Parameters:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl list-none list-inside">
                                <li>
                                    <span className="text-pink-400">Point</span>
                                    <span className="text-green-400"> p</span>: First point of the line segment
                                </li>
                                <li>
                                    <span className="text-pink-400">Point</span>
                                    <span className="text-green-400"> q</span>: Second point of the line segment
                                </li>
                                <li>
                                    <span className="text-pink-400">Point</span>
                                    <span className="text-green-400"> r</span>: Third point whose orientation with respect
                                    to PQ should be calculated
                                </li>
                            </ul>
                        </li>
                        <li className="py-5">
                            <strong>Returns:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl  list-none list-inside">
                                <li>
                                    <span className="text-pink-400">int</span>
                                    <span className="text-green-400"> val</span>: Return value is 0
                                    if P, Q and R are collinear, 1 if R is to the right of the line
                                    PQ and 2 if R is to the left of the line PQ
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>


                <li>
                    <h3 className="text-3xl mt-6">
                        convexHull()
                    </h3>
                    <ul className="max-w-4xl mx-auto mt-3 text-xl list-disc list-inside">
                        <li className="py-5">
                            <strong>Description:</strong> Implements the Jarvis march algorithm
                            by identifying the leftmost point and repeatedly selecting the most
                            counterclockwise point with respect to the current point
                        </li>
                        <li className="py-5">
                            <strong>Parameters:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl list-none list-inside">
                                <li>
                                    <span className="text-pink-400">Point</span>[]
                                    <span className="text-green-400"> points</span>: Array of Point objects for which
                                    convex hull is to be computed
                                </li>
                                <li>
                                    <span className="text-pink-400">int</span>
                                    <span className="text-green-400"> n</span>: Number of points in the 2D plane
                                </li>
                            </ul>
                        </li>
                        <li className="py-5">
                            <strong>Returns:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl  list-none list-inside">
                                <li>
                                    <span className="text-pink-400">void</span>
                                    <span className="text-green-400"> </span>: (none)
                                </li>
                            </ul>
                        </li>

                        <li className="py-5">
                            <strong>Variables:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl  list-none list-inside">
                                <li>
                                    vector&lt;<span className="text-pink-400">Point</span>&gt;
                                    <span className="text-green-400"> Hull</span>: A vector of points
                                    which are part of the convex hull
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

            </ul >


        </div >
    )
}

export default KirkpatrickSeidelDocumentation