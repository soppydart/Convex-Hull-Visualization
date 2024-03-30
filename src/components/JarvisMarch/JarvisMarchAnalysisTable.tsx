function JarvisMarchAnalysisTable() {
    return (
        <div className="relative overflow-x-auto h-full rounded-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                <thead className="text-lg bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" className="px-8 py-6">

                        </th>
                        <th scope="col" className="px-8 py-6">
                            n<sub>1</sub> = 10
                        </th>
                        <th scope="col" className="px-8 py-6">
                            n<sub>2</sub> = 15
                        </th>
                        <th scope="col" className="px-8 py-6">
                            n<sub>3</sub> = 20
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-800 border-gray-700">
                        <th scope="row" className="px-8 py-5 font-medium text-gray-900 whitespace-nowrap text-white text-lg">
                            h<sub>1</sub> = 4
                        </th>
                        <td className="px-8 py-7">
                            3593 us
                        </td>
                        <td className="px-8 py-7">
                            3990 us
                        </td>
                        <td className="px-8 py-7">
                            4333 us
                        </td>
                    </tr>
                    <tr className="bg-gray-800 border-gray-700">
                        <th scope="row" className="px-8 py-5 font-medium text-gray-900 whitespace-nowrap text-white text-lg">
                            h<sub>2</sub> = 6
                        </th>
                        <td className="px-8 py-7">
                            3700 us
                        </td>
                        <td className="px-8 py-7">
                            4178 us
                        </td>
                        <td className="px-8 py-7">
                            4506 us
                        </td>
                    </tr>
                    <tr className="bg-gray-800">
                        <th scope="row" className="px-8 py-5 font-medium text-gray-900 whitespace-nowrap text-white text-lg">
                            h<sub>3</sub> = 8
                        </th>
                        <td className="px-8 py-7">
                            4035 us
                        </td>
                        <td className="px-8 py-7">
                            4698 us
                        </td>
                        <td className="px-8 py-7">
                            5113 us
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default JarvisMarchAnalysisTable