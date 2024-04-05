import JarvisMarchAnalysisTable from "../JarvisMarch/JarvisMarchAnalysisTable"
import JarvisMarchAnalysisChart from "../JarvisMarch/JarvisMarchAnaslysisChart"
import KirkpatrickAnalysisChart from "../KirkpatrickSiedel/KirkpatrickAnalysisChart"
import KirkpatrickAnalysisTable from "../KirkpatrickSiedel/KirkpatrickAnalysisTable"

function Analysis() {
    return (
        <div className="bg-slate-900 min-h-screen font-code text-white pb-8 lg:pb-20">
            <h1 className='text-2xl lg:text-5xl sm:text-4xl font-medium text-center p-3 lg:p-5'>Analysis</h1>
            <div className="text-sm sm:text-lg max-w-80 sm:max-w-2xl text-white lg:max-w-6xl mx-auto mt-3 lg:text-xl">
                <h2 className="text-xl sm:text-2xl lg:text-3xl">Jarvis March</h2>

                <div className="flex justify-center my-5 lg:my-10">
                    <ul>
                        <li>
                            n : number of points
                        </li>
                        <li>
                            h : number of points on the convex hull
                        </li>
                    </ul>
                </div>

                <ul className="max-w-72 sm:max-w-xl lg:max-w-5xl mx-auto mt-3 list-decimal list-inside">
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

                <div className="max-w-md mx-auto lg:max-w-6xl mt-10 flex flex-col lg:flex-row sm:space-y-2">
                    <div className='mx-auto h-full mb-2 lg:mb-0 lg:mr-2 w-full'>
                        <JarvisMarchAnalysisTable />
                    </div>
                    <div className='mx-auto h-full bg-white rounded-md p-3 lg:ml-2 w-full flex justify-center'>
                        <JarvisMarchAnalysisChart />
                    </div>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl mt-10 lg:mt-20">Kirkpatrick-Seidel</h2>

                <div className="flex justify-center my-5 lg:my-10">
                    <ul>
                        <li>
                            n : number of points
                        </li>
                        <li>
                            h : number of points on the convex hull
                        </li>
                    </ul>
                </div>

                <ul className="max-w-72 sm:max-w-xl lg:max-w-5xl mx-auto mt-3 list-decimal list-inside">
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

                <div className="max-w-md mx-auto lg:max-w-6xl mt-10 flex flex-col lg:flex-row sm:space-y-2">
                    <div className='mx-auto h-full mb-2 lg:mb-0 lg:mr-2 w-full'>
                        <KirkpatrickAnalysisTable />
                    </div>
                    <div className='mx-auto h-full bg-white rounded-md p-3 lg:ml-2 w-full flex justify-center'>
                        <KirkpatrickAnalysisChart />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Analysis