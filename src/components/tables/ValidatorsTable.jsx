import Cosmos from "../../assets/logos/cosmos.svg";

const ValidatorsTable = () => {
  return (
    <div className="relative mt-4 overflow-x-auto table-scrollbar shadow-md sm:rounded-lg">
      <table
        className="w-full ValidatorTable text-sm text-left lg:text-nowrap rtl:text-right text-gray-500"
        // ref={tableRef}
      >
        <thead className="text-[12px] font-medium text-[#98A2AE] font-montserrat tracking-wider capitalize bg-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              Validators
            </th>
            <th scope="col" className="px-6 py-3">
              V.R
            </th>
            <th scope="col" className="px-6 py-3">
              Cumulative Share %
            </th>
            <th scope="col" className="px-6 py-3">
              Score
            </th>
            <th scope="col" className="px-6 py-3">
              comm.
            </th>
            <th scope="col" className="px-6 py-3 lg:text-nowrap ">
              Participation
            </th>
            <th scope="col" className="px-6 py-3  lg:text-nowrap">
              Miss Block
            </th>
            <th scope="col" className="px-6 py-3">
              Uptime
            </th>
            <th scope="col" className="px-6 py-3">
              Delegators
            </th>
            <th scope="col" className="px-6 py-3">
              Liquid Shares
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b  hover:bg-gray-50">
            <td
              scope="row"
              className="px-6 cursor-pointer py-4 flex items-center gap-3 min-w-fit font-medium text-gray-900 whitespace-nowrap"
            >
              <img src={Cosmos} alt="" className="w-10" />
              <div className="flex flex-col">
                <h6 className="text-[14px] text-[#48515B] font-[600]">
                  Coinbase Custody
                </h6>
                {/* <p className="uppercase text-[12px]">Atom</p> */}
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-[#48515B]">
              <div className="flex max-w-fit flex-col">
                <p className="font-semibold text-[#48515B]">20,651,446</p>
                <p>8.28%</p>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">8.28%</td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">
              <div className="flex max-w-fit flex-col">
                <p className=" text-[#48515B]">1943</p>
                <p className="font-medium">108th</p>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">
              <div className="flex max-w-fit flex-col">
                <p className=" text-[#48515B]">20.0%</p>
                <p className="font-medium">11.45%</p>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">
            <div className="flex max-w-fit flex-col">
                  <p
                  className=" text-red-500"
                  >
                  0.00%
                  </p>
                  <p className='font-medium text-red-500'>
                  11.45%
                  </p>
                </div>
                </td>
            <td className="px-6 py-4">
              <div className="flex max-w-fit flex-col">
                <p className="font-semibold text-[#48515B]">19</p>
                <p>0.19%</p>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold">100%</td>
            <td className="px-6 py-4 font-semibold">11,067</td>
            <td className="px-6 py-4 font-semibold">624</td>
          </tr>
          <tr className="bg-white border-b  hover:bg-gray-50">
            <td
              scope="row"
              className="px-6 cursor-pointer py-4 flex items-center gap-3 min-w-fit font-medium text-gray-900 whitespace-nowrap"
            >
              <img src={Cosmos} alt="" className="w-10" />
              <div className="flex flex-col">
                <h6 className="text-[14px] text-[#48515B] font-[600]">
                  Coinbase Custody
                </h6>
                {/* <p className="uppercase text-[12px]">Atom</p> */}
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-[#48515B]">
              <div className="flex max-w-fit flex-col">
                <p className="font-semibold text-[#48515B]">20,651,446</p>
                <p>8.28%</p>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">8.28%</td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">
              <div className="flex max-w-fit flex-col">
                <p className=" text-[#48515B]">1943</p>
                <p className="font-medium">108th</p>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">
              <div className="flex max-w-fit flex-col">
                <p className=" text-[#48515B]">20.0%</p>
                <p className="font-medium">11.45%</p>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">
            <div className="flex max-w-fit flex-col">
                  <p
                  className=" text-red-500"
                  >
                  0.00%
                  </p>
                  <p className='font-medium text-red-500'>
                  11.45%
                  </p>
                </div>
                </td>
            <td className="px-6 py-4">
              <div className="flex max-w-fit flex-col">
                <p className="font-semibold text-[#48515B]">19</p>
                <p>0.19%</p>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold">100%</td>
            <td className="px-6 py-4 font-semibold">11,067</td>
            <td className="px-6 py-4 font-semibold">624</td>
          </tr>
          <tr className="bg-white border-b  hover:bg-gray-50">
            <td
              scope="row"
              className="px-6 cursor-pointer py-4 flex items-center gap-3 min-w-fit font-medium text-gray-900 whitespace-nowrap"
            >
              <img src={Cosmos} alt="" className="w-10" />
              <div className="flex flex-col">
                <h6 className="text-[14px] text-[#48515B] font-[600]">
                  Coinbase Custody
                </h6>
                {/* <p className="uppercase text-[12px]">Atom</p> */}
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-[#48515B]">
              <div className="flex max-w-fit flex-col">
                <p className="font-semibold text-[#48515B]">20,651,446</p>
                <p>8.28%</p>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">8.28%</td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">
              <div className="flex max-w-fit flex-col">
                <p className=" text-[#48515B]">1943</p>
                <p className="font-medium">108th</p>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">
              <div className="flex max-w-fit flex-col">
                <p className=" text-[#48515B]">20.0%</p>
                <p className="font-medium">11.45%</p>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">
            <div className="flex max-w-fit flex-col">
                  <p
                  className=" text-red-500"
                  >
                  0.00%
                  </p>
                  <p className='font-medium text-red-500'>
                  11.45%
                  </p>
                </div>
                </td>
            <td className="px-6 py-4">
              <div className="flex max-w-fit flex-col">
                <p className="font-semibold text-[#48515B]">19</p>
                <p>0.19%</p>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold">100%</td>
            <td className="px-6 py-4 font-semibold">11,067</td>
            <td className="px-6 py-4 font-semibold">624</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ValidatorsTable;
