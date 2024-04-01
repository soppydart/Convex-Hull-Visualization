function KirkpatrickSeidelDocumentation() {
    return (
        <div className="text-white max-w-6xl mx-auto mt-3 text-xl pb-20">
            <h2 className="text-4xl underline">Functions</h2>
            <ul className="max-w-5xl mx-auto mt-3 text-xl list-decimal">
                <li>
                    <h3 className="text-3xl mt-6">
                        UpperHull()
                    </h3>
                    <ul className="max-w-4xl mx-auto mt-3 text-xl list-disc list-inside">
                        <li className="py-5">
                            <strong>Description:</strong> Find Pmin and Pmax points, Filters points
                            collinear with Pmin and Pmax
                        </li>
                        <li className="py-5">
                            <strong>Parameters:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl list-none list-inside">
                                <li>
                                    vector&lt;pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;&gt;
                                    <span className="text-green-400"> points</span>: Stores list of points on which
                                    Upper Hull is to be computed
                                </li>
                                <li className="mt-4">
                                    vector&lt;vector&lt;pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double
                                    </span>&gt;,pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double</span>&gt;&gt;&gt;
                                    <span className="text-green-400"> edges</span>: Stores the edges of the upper hull
                                </li>
                            </ul>
                        </li>
                        <li className="py-5">
                            <strong>Returns:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl  list-none list-inside">
                                <li>
                                    <span className="text-pink-400">void</span>: (none)
                                </li>
                            </ul>
                        </li>
                        <li className="py-5">
                            <strong>Variables:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl list-none list-inside">
                                <li>
                                    pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;
                                    <span className="text-green-400"> pmin</span>: point with the lowest x-coordinate
                                    in the set of points and with maximum possible y coordinate(if multiple points with
                                    same x coordinate exist)
                                </li>
                                <li className="mt-4">
                                    pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;
                                    <span className="text-green-400"> pmax</span>: point with the maximum x-coordinate
                                    in the set of points and with maximum possible y coordinate(if multiple points
                                    with same x coordinate exist)
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;&gt;
                                    <span className="text-green-400">uhPoints</span>: List of points with x
                                    coordinates between pmin.x, pmax.x and the points pmin, pmax
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>


                <li>
                    <h3 className="text-3xl mt-6">
                        connect_upper()
                    </h3>
                    <ul className="max-w-4xl mx-auto mt-3 text-xl list-disc list-inside">
                        <li className="py-5">
                            <strong>Description:</strong> Finds median line and divides
                            points to two equal size sets based on the upper bridge
                        </li>
                        <li className="py-5">
                            <strong>Parameters:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl list-none list-inside">
                                <li>
                                    pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;
                                    <span className="text-green-400"> pk</span>: point with the
                                    minimum x coordinate in the set of points
                                </li>
                                <li className="mt-4">
                                    pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;
                                    <span className="text-green-400"> pm</span>: point with
                                    the maximum x coordinate in the set of points
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double
                                    </span>&gt;,pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double</span>&gt;&gt;&gt;
                                    <span className="text-green-400"> edges</span>: Stores the edges of the upper hull
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;&gt;
                                    <span className="text-green-400">S</span>: set of points on which upper hull is to be computed
                                </li>
                            </ul>
                        </li>
                        <li className="py-5">
                            <strong>Returns:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl  list-none list-inside">
                                <li>
                                    <span className="text-pink-400">void</span>: (none)
                                </li>
                            </ul>
                        </li>
                        <li className="py-5">
                            <strong>Variables:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl list-none list-inside">
                                <li>
                                    pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;
                                    <span className="text-green-400"> pi</span>: left hand side
                                    vertex of the upper bridge on S
                                </li>
                                <li className="mt-4">
                                    pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;
                                    <span className="text-green-400"> pj</span>: right hand
                                    side vertex of the upper bridge on S
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;&gt;
                                    <span className="text-green-400">S_left</span>: Points to the left
                                    of pi and right of pk on which connect is recursively applied
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;&gt;
                                    <span className="text-green-400">S_right</span>: Points to the
                                    right of pj and left of pm on which connect is recursively applied
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>


                <li>
                    <h3 className="text-3xl mt-6">
                        UpperBridge()
                    </h3>
                    <ul className="max-w-4xl mx-auto mt-3 text-xl list-disc list-inside">
                        <li className="py-5">
                            <strong>Description:</strong> Computes the left and right vertices of
                            the upper bridge which lies above all points in the set and is part
                            of the upper hull
                        </li>
                        <li className="py-5">
                            <strong>Parameters:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl list-none list-inside">
                                <li>
                                    vector&lt;pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;&gt;
                                    <span className="text-green-400"> points</span>: Set of points
                                    for which upper bridge is calculated
                                </li>
                                <li className="mt-4">
                                    <span className="text-pink-400">double</span>
                                    <span className="text-green-400"> a</span>: the median line X=a
                                </li>

                            </ul>
                        </li>
                        <li className="py-5">
                            <strong>Returns:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl  list-none list-inside">
                                <li>
                                    pair&lt;pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;, pair&lt;
                                    <span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;&gt;
                                    <span className="text-green-400"> endPoints</span>
                                    : The left and right end points of the upper bridge
                                </li>
                            </ul>
                        </li>
                        <li className="py-5">
                            <strong>Variables:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl list-none list-inside">
                                <li>
                                    vector&lt;pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;&gt;
                                    <span className="text-green-400"> candidates</span>: Set of
                                    points which potentially lie on the upper bridge
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double
                                    </span>&gt;,pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double</span>&gt;&gt;&gt;
                                    <span className="text-green-400"> pairs</span>: list of pairs of
                                    points which can be possible upper bridges
                                </li>
                                <li className="mt-4">
                                    vector&lt;<span className="text-pink-400">double</span>&gt;
                                    <span className="text-green-400"> K</span>: slopes of lines
                                    formed by each pair in pairs
                                </li>
                                <li className="mt-4">
                                    <span className="text-pink-400">double</span>
                                    <span className="text-green-400"> medianK</span>: median slope
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double
                                    </span>&gt;,pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double</span>&gt;&gt;&gt;
                                    <span className="text-green-400"> smaller</span>: pairs of points
                                    with slope smaller than medianK
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double
                                    </span>&gt;,pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double</span>&gt;&gt;&gt;
                                    <span className="text-green-400"> equal</span>: pairs of points
                                    with slope equal to medianK
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double
                                    </span>&gt;,pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double</span>&gt;&gt;&gt;
                                    <span className="text-green-400"> larger</span>: pairs of points
                                    with slope larger than medianK
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>


                {/* for lower hull */}

                <li>
                    <h3 className="text-3xl mt-6">
                        LowerHull()
                    </h3>
                    <ul className="max-w-4xl mx-auto mt-3 text-xl list-disc list-inside">
                        <li className="py-5">
                            <strong>Description:</strong> Find Pmin and Pmax points, Filters points
                            collinear with Pmin and Pmax
                        </li>
                        <li className="py-5">
                            <strong>Parameters:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl list-none list-inside">
                                <li>
                                    vector&lt;pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;&gt;
                                    <span className="text-green-400"> points</span>: Stores list of points on which
                                    Lower Hull is to be computed
                                </li>
                                <li className="mt-4">
                                    vector&lt;vector&lt;pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double
                                    </span>&gt;,pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double</span>&gt;&gt;&gt;
                                    <span className="text-green-400"> edges</span>: Stores the edges of the lower hull
                                </li>
                            </ul>
                        </li>
                        <li className="py-5">
                            <strong>Returns:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl  list-none list-inside">
                                <li>
                                    <span className="text-pink-400">void</span>: (none)
                                </li>
                            </ul>
                        </li>
                        <li className="py-5">
                            <strong>Variables:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl list-none list-inside">
                                <li>
                                    pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;
                                    <span className="text-green-400"> pmin</span>: point with the lowest x-coordinate
                                    in the set of points and with minimum possible y coordinate(if multiple points with
                                    same x coordinate exist)
                                </li>
                                <li className="mt-4">
                                    pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;
                                    <span className="text-green-400"> pmax</span>: point with the maximum x-coordinate
                                    in the set of points and with minimum possible y coordinate(if multiple points
                                    with same x coordinate exist)
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;&gt;
                                    <span className="text-green-400"> lhPoints</span>: List of points with x
                                    coordinates between pmin.x, pmax.x and the points pmin, pmax
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>


                <li>
                    <h3 className="text-3xl mt-6">
                        connect_lower()
                    </h3>
                    <ul className="max-w-4xl mx-auto mt-3 text-xl list-disc list-inside">
                        <li className="py-5">
                            <strong>Description:</strong> Finds median line and divides
                            points to two equal size sets based on the lower bridge
                        </li>
                        <li className="py-5">
                            <strong>Parameters:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl list-none list-inside">
                                <li>
                                    pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;
                                    <span className="text-green-400"> pk</span>: point with the
                                    minimum x coordinate in the set of points
                                </li>
                                <li className="mt-4">
                                    pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;
                                    <span className="text-green-400"> pm</span>: point with
                                    the maximum x coordinate in the set of points
                                </li>
                                <li className="mt-4">
                                    vector&lt;vector&lt;pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double
                                    </span>&gt;,pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double</span>&gt;&gt;&gt;
                                    <span className="text-green-400"> edges</span>: Stores the edges of the lower hull
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;&gt;
                                    <span className="text-green-400">S</span>: set of points on which lower hull is to be computed
                                </li>
                            </ul>
                        </li>
                        <li className="py-5">
                            <strong>Returns:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl  list-none list-inside">
                                <li>
                                    <span className="text-pink-400">void</span>: (none)
                                </li>
                            </ul>
                        </li>
                        <li className="py-5">
                            <strong>Variables:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl list-none list-inside">
                                <li>
                                    pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;
                                    <span className="text-green-400"> pi</span>: left hand side
                                    vertex of the lower bridge on S
                                </li>
                                <li className="mt-4">
                                    pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;
                                    <span className="text-green-400"> pj</span>: right hand
                                    side vertex of the lower bridge on S
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;&gt;
                                    <span className="text-green-400">S_left</span>: Points to the left
                                    of pi and right of pk on which connect is recursively applied
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;&gt;
                                    <span className="text-green-400">S_right</span>: Points to the
                                    right of pj and left of pm on which connect is recursively applied
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>


                <li>
                    <h3 className="text-3xl mt-6">
                        LowerBridge()
                    </h3>
                    <ul className="max-w-4xl mx-auto mt-3 text-xl list-disc list-inside">
                        <li className="py-5">
                            <strong>Description:</strong> Computed the left and right vertices of
                            the lower bridge which lies above all points in the set and it part
                            of the lower hull
                        </li>
                        <li className="py-5">
                            <strong>Parameters:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl list-none list-inside">
                                <li>
                                    vector&lt;pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;&gt;
                                    <span className="text-green-400"> points</span>: Set of points
                                    for which lower bridge is calculated
                                </li>
                                <li className="mt-4">
                                    <span className="text-pink-400">double</span>
                                    <span className="text-green-400"> a</span>: the median line X=a
                                </li>

                            </ul>
                        </li>
                        <li className="py-5">
                            <strong>Returns:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl  list-none list-inside">
                                <li>
                                    pair&lt;pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;, pair&lt;
                                    <span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;&gt;
                                    <span className="text-green-400"> endPoints</span>
                                    : The left and right end points of the lower bridge
                                </li>
                            </ul>
                        </li>
                        <li className="py-5">
                            <strong>Variables:</strong>
                            <ul className="max-w-2xl mx-auto mt-3 text-xl list-none list-inside">
                                <li>
                                    vector&lt;pair&lt;<span className="text-pink-400">double</span>,
                                    <span className="text-pink-400">double</span>&gt;&gt;
                                    <span className="text-green-400"> candidates</span>: Set of
                                    points which potentially lie on the lower bridge
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double
                                    </span>&gt;,pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double</span>&gt;&gt;&gt;
                                    <span className="text-green-400"> pairs</span>: list of pairs of
                                    points which can be possible lower bridges
                                </li>
                                <li className="mt-4">
                                    vector&lt;<span className="text-pink-400">double</span>&gt;
                                    <span className="text-green-400"> K</span>: slopes of lines
                                    formed by each pair in pairs
                                </li>
                                <li className="mt-4">
                                    <span className="text-pink-400">double</span>
                                    <span className="text-green-400"> medianK</span>: median slope
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double
                                    </span>&gt;,pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double</span>&gt;&gt;&gt;
                                    <span className="text-green-400"> smaller</span>: pairs of points
                                    with slope smaller than medianK
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double
                                    </span>&gt;,pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double</span>&gt;&gt;&gt;
                                    <span className="text-green-400"> equal</span>: pairs of points
                                    with slope equal to medianK
                                </li>
                                <li className="mt-4">
                                    vector&lt;pair&lt;pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double
                                    </span>&gt;,pair&lt;<span className="text-pink-400">
                                        double</span>,<span className="text-pink-400">double</span>&gt;&gt;&gt;
                                    <span className="text-green-400"> larger</span>: pairs of points
                                    with slope larger than medianK
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