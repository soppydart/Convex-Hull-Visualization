function About() {
    return (
        <div className="bg-slate-900 min-h-screen font-code text-white text-xl pb-20">
            <h1 className='text-6xl font-medium text-white text-center p-10'>About</h1>
            <h1 className='text-3xl font-medium text-white text-center'>
                CS F364 : Design and Analysis of Algorithms - Assignment I
            </h1>
            <div className="text-white max-w-6xl mx-auto mt-3 text-xl">

                <h1 className='text-2xl font-bold underline py-5'>Objective</h1>
                <p>
                    In this assignment, you have to implement two convex hull algorithms. You also have to
                    develop a web-based visualization of the working of your algorithms. <a href="https://jacquesheunis.com/post/fortunes-algorithm/"
                        className="font-medium text-blue-500 hover:underline">Here</a> is an example
                    (for your understanding only) which computes a data structure called Voronoi Diagram.
                    You should observe how the working of the algorithm is demonstrated in the visualization.
                    <br />
                    <br />
                    The two algorithms you have to implement are for finding the convex hull in two dimensions. They are:
                    <ul className="max-w-5xl mx-auto mt-3 text-xl list-decimal list-inside mb-10">
                        <li>
                            The Jarvis March Algorithm
                        </li>
                        <li>
                            The Kirk Patrick Seidel Algorithm
                        </li>
                    </ul>
                    As part of the Documentation you will produce:
                    <ul className="max-w-5xl mx-auto mt-3 text-xl list-decimal list-inside mb-5">
                        <li>
                            Documentation of the code and its design.
                        </li>
                        <li>
                            Pages to document the analysis of your implementation. Comparison between the two
                            algorithms.
                        </li>
                    </ul>
                </p>
            </div>
        </div >
    )
}

export default About