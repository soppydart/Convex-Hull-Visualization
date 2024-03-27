function KirkpatrickAnalysisTable() {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-lg text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">

            </th>
            <th scope="col" className="px-6 py-3">
              n<sub>1</sub>
            </th>
            <th scope="col" className="px-6 py-3">
              n<sub>2</sub>
            </th>
            <th scope="col" className="px-6 py-3">
              n<sub>3</sub>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg">
              h<sub>1</sub>
            </th>
            <td className="px-6 py-4">
              3593 us
            </td>
            <td className="px-6 py-4">
              3990 us
            </td>
            <td className="px-6 py-4">
              4333 us
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg">
              h<sub>2</sub>
            </th>
            <td className="px-6 py-4">
              3700 us
            </td>
            <td className="px-6 py-4">
              4178 us
            </td>
            <td className="px-6 py-4">
              4506 us
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg">
              h<sub>3</sub>
            </th>
            <td className="px-6 py-4">
              4035 us
            </td>
            <td className="px-6 py-4">
              4698 us
            </td>
            <td className="px-6 py-4">
              5113 us
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default KirkpatrickAnalysisTable