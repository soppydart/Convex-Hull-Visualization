function KirkpatrickAnalysisTable() {
  return (
    <div className="relative overflow-x-auto h-full rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-lg text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-8 py-7">

            </th>
            <th scope="col" className="px-8 py-7">
              n<sub>1</sub> = 10
            </th>
            <th scope="col" className="px-8 py-7">
              n<sub>2</sub> = 15
            </th>
            <th scope="col" className="px-8 py-7">
              n<sub>3</sub> = 20
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-8 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg">
              h<sub>1</sub> = 4
            </th>
            <td className="px-8 py-7">
              123 us
            </td>
            <td className="px-8 py-7">
              195 us
            </td>
            <td className="px-8 py-7">
              244 us
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-8 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg">
              h<sub>2</sub> = 6
            </th>
            <td className="px-8 py-7">
              170 us
            </td>
            <td className="px-8 py-7">
              243 us
            </td>
            <td className="px-8 py-7">
              312 us
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="px-8 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg">
              h<sub>3</sub> = 8
            </th>
            <td className="px-8 py-7">
              203 us
            </td>
            <td className="px-8 py-7">
              290 us
            </td>
            <td className="px-8 py-7">
              419 us
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default KirkpatrickAnalysisTable