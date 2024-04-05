function JarvisMarchAnalysisTable() {
    return (
        <div className="relative overflow-x-auto h-full rounded-md">
            <table className="w-full text-xs lg:text-sm rtl:text-right text-gray-400 text-center">
                <thead className="text-xs mx-auto lg:text-lg bg-blue-950 text-white">
                    <tr>
                        <th scope="col" className="px-2 py-4 lg:px-8 lg:py-6">

                        </th>
                        <th scope="col" className="px-2 py-4 lg:px-8 lg:py-6">
                            n<sub>1</sub> = 10
                        </th>
                        <th scope="col" className="px-2 py-4 lg:px-8 lg:py-6">
                            n<sub>2</sub> = 15
                        </th>
                        <th scope="col" className="px-2 py-4 lg:px-8 lg:py-6">
                            n<sub>3</sub> = 20
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-800 border-gray-500">
                        <th scope="row" className="px-2 py-2 lg:px-8 lg:py-5 font-bold whitespace-nowrap text-white text-xs lg:text-lg">
                            h<sub>1</sub> = 4
                        </th>
                        <td className="px-2 py-4 lg:px-8 lg:py-7">
                            3593 us
                        </td>
                        <td className="px-2 py-4 lg:px-8 lg:py-7">
                            3990 us
                        </td>
                        <td className="px-2 py-4 lg:px-8 lg:py-7">
                            4333 us
                        </td>
                    </tr>
                    <tr className="bg-gray-800 border-gray-500">
                        <th scope="row" className="px-2 py-2 lg:px-8 lg:py-5 font-bold whitespace-nowrap text-white text-xs lg:text-lg">
                            h<sub>2</sub> = 6
                        </th>
                        <td className="px-2 py-4 lg:px-8 lg:py-7">
                            3700 us
                        </td>
                        <td className="px-2 py-4 lg:px-8 lg:py-7">
                            4178 us
                        </td>
                        <td className="px-2 py-4 lg:px-8 lg:py-7">
                            4506 us
                        </td>
                    </tr>
                    <tr className="bg-gray-800 border-gray-500">
                        <th scope="row" className="px-2 py-2 lg:px-8 lg:py-5 font-bold whitespace-nowrap text-white text-xs lg:text-lg">
                            h<sub>3</sub> = 8
                        </th>
                        <td className="px-2 py-4 lg:px-8 lg:py-7">
                            4035 us
                        </td>
                        <td className="px-2 py-4 lg:px-8 lg:py-7">
                            4698 us
                        </td>
                        <td className="px-2 py-4 lg:px-8 lg:py-7">
                            5113 us
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default JarvisMarchAnalysisTable