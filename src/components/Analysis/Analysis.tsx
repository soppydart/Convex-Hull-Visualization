import JarvisMarchAnalysisTable from "../JarvisMarch/JarvisMarchAnalysisTable"
import JarvisMarchAnalysisChart from "../JarvisMarch/JarvisMarchAnaslysisChart"
import KirkpatrickAnalysisChart from "../KirkpatrickSiedel/KirkpatrickAnalysisChart"
import KirkpatrickAnalysisTable from "../KirkpatrickSiedel/KirkpatrickAnalysisTable"

function Analysis() {
    return (
        <div className="bg-slate-900 min-h-screen font-code text-white text-xl pb-20">
            <h1 className='text-6xl font-medium text-white text-center p-10'>Analysis</h1>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl">Jarvis March</h2>

                <div className="flex justify-center my-10 text-xl">
                    <ul>
                        <li>
                            n : number of points
                        </li>
                        <li>
                            h : number of points on the convex hull
                        </li>
                    </ul>
                </div>

                <ul className="max-w-5xl mx-auto mt-3 text-xl list-decimal list-inside">
                    <li className="my-3">
                        Time Complexity: O(nh)
                    </li>
                    <li className="my-3">
                        Space Complexity: O(n+h)
                    </li>
                    <li className="my-3">
                        As n increases for a constant h, the time taken steadily increases
                    </li>
                    <li className="my-3">
                        As h increases for a constant n, the time taken steadily increases
                    </li>
                    <li className="my-3">
                        This is a greedy algorithm
                    </li>
                </ul>

                <div className="mx-auto max-w-6xl mt-10 flex flex-col md:flex-row">
                    <div className='mx-auto h-full mb-2 md:mb-0 md:mr-2 w-full'>
                        <JarvisMarchAnalysisTable />
                    </div>
                    <div className='mx-auto bg-white rounded-md p-3 md:ml-2 w-full'>
                        <JarvisMarchAnalysisChart />
                    </div>
                </div>

                <h2 className="text-4xl mt-20">Kirkpatrick-Seidel</h2>

                <div className="flex justify-center my-10 text-xl">
                    <ul>
                        <li>
                            n : number of points
                        </li>
                        <li>
                            h : number of points on the convex hull
                        </li>
                    </ul>
                </div>

                <ul className="max-w-5xl mx-auto mt-3 text-xl list-decimal list-inside">
                    <li className="my-3">
                        Time Complexity: O(nlogh)
                    </li>
                    <li className="my-3">
                        Space Complexity: O(n)
                    </li>
                    <li className="my-3">
                        As n increases for a constant h, the time taken steadily increases
                    </li>
                    <li className="my-3">
                        As h increases for a constant n, the time taken steadily increases.
                        But the rate of increase is not very large which can be attributed to logarithmic factor of h
                    </li>
                    <li className="my-3">
                        This is a divide and conquer approach
                    </li>
                </ul>

                <div className="mx-auto max-w-6xl mt-10 flex flex-col md:flex-row">
                    <div className='mx-auto h-full mb-2 md:mb-0 md:mr-2 w-full'>
                        <KirkpatrickAnalysisTable />
                    </div>
                    <div className='mx-auto bg-white rounded-md p-3 md:ml-2 w-full'>
                        <KirkpatrickAnalysisChart />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Analysis