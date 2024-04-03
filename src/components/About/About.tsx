function About() {
    return (
        <div className="bg-slate-900 min-h-screen font-code text-white pb-5 sm:pb-8 lg:pb-15">
            <h1 className='text-2xl lg:text-5xl sm:text-4xl font-medium text-center p-3 lg:p-5'>About</h1>
            <h1 className='text-xl lg:text-4xl sm:text-3xl font-medium text-center p-3 lg:p-5'>
                CS F364 : Design and Analysis of Algorithms - Assignment I
            </h1>
            <div className="text-sm sm:text-lg max-w-80 sm:max-w-2xl text-white lg:max-w-6xl mx-auto mt-3 lg:text-xl">

                <h1 className='text-xl lg:text-2xl font-bold underline pb-5 lg:py-5'>Objective</h1>
                <p>
                    In this assignment, you have to implement two convex hull algorithms. You also have to
                    develop a web-based visualization of the working of your algorithms. <a href="https://jacquesheunis.com/post/fortunes-algorithm/"
                        className="font-medium text-blue-500 hover:underline" target="_blank">Here</a> is an example
                    (for your understanding only) which computes a data structure called Voronoi Diagram.
                    You should observe how the working of the algorithm is demonstrated in the visualization.
                    <br />
                    <br />
                    The two algorithms you have to implement are for finding the convex hull in two dimensions. They are:
                    <ul className="max-w-5xl mx-auto mt-3 lg:text-xl list-decimal list-inside mb-3 lg:mb-10">
                        <li>
                            The Jarvis March Algorithm
                        </li>
                        <li>
                            The Kirk Patrick Seidel Algorithm
                        </li>
                    </ul>
                    As part of the Documentation you will produce:
                    <ul className="max-w-5xl mx-auto mt-3 lg:text-xl list-decimal list-inside lg:mb-10">
                        <li>
                            Documentation of the code and its design.
                        </li>
                        <li>
                            Pages to document the analysis of your implementation, comparison between the two
                            algorithms.
                        </li>
                    </ul>
                </p>
            </div>
        </div >
    )
}

export default About