/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import Cosmos from '../../assets/logos/cosmos.svg'
import "datatables.net";
import { FaStar } from "react-icons/fa";
// import $ from "jquery";
import './table.css'

const MainNetTable = () => {
  const tableRef = useRef(null);

  //   useEffect(() => {
  //     if (tableRef.current) {
  //       $(tableRef.current).DataTable({
  //         searching: false, // Disable search box
  //         paging: false, // Disable pagination
  //         lengthChange: false, // Disable per-page dropdown
  //         info: false // Disable the "Showing X to X of X entries" info
  //       });
  //     }
  //   }, []);

  return (
    <div className="relative mt-4 overflow-x-auto table-scrollbar shadow-md sm:rounded-lg">
      <table
        className="w-full overviewTable text-sm text-left lg:text-nowrap rtl:text-right text-gray-500"
        ref={tableRef}
      >
        <thead className="text-[12px] font-medium text-[#98A2AE] font-montserrat tracking-wider capitalize bg-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              Pin
            </th>
            <th scope="col" className="px-6 py-3">
              Chain 
            </th>
            <th scope="col" className="px-6 py-3">
              Price Chain
            </th>
            <th scope="col" className="px-6 py-3">
              Change Chain
            </th>
            <th scope="col" className="px-6 py-3">
              Apr
            </th>
            <th scope="col" className="px-6 py-3">
              Inflation
            </th>
            <th scope="col" className="px-6 py-3 lg:text-nowrap ">
            Market Cap
            </th>
            <th scope="col" className="px-6 py-3  lg:text-nowrap">
             Staked Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Blocks
            </th>
            <th scope="col" className="px-6 py-3">
              BlockTime
            </th>
            <th scope="col" className="px-6 py-3">
              Transactions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b  hover:bg-gray-50">
            <td className="px-6 py-4">
              
              <FaStar/>
             
            </td>
            <td
              scope="row"
              className="px-6 py-4 flex items-center gap-3 min-w-fit font-medium text-gray-900 whitespace-nowrap"
            >
             <img src={Cosmos} alt="" className="w-10" />
             <div className="flex flex-col">
                <h6 className="text-[14px] text-[#48515B] font-[600]">COSMOS</h6>
                <p className="uppercase text-[12px]">Atom</p>
             </div>
              
            </td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">$ 7.950</td>
            <td className="px-6 py-4 font-semibold text-red-400">-0.84%</td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">14.3%</td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">10.0%</td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">$2999</td>
            <td className="px-6 py-4">
                <div className="flex max-w-fit flex-col">
                  <p
                  className="font-semibold text-[#48515B]"
                  >
                  $ 3.11b
                  </p>
                  <p>
                  35th
                  </p>
                </div>
               
                </td>
            <td className="px-6 py-4">15,338,404</td>
            <td className="px-6 py-4">6.04s</td>
            <td className="px-6 py-4">68,815,272</td>
     


          </tr>
          <tr className="bg-white border-b  hover:bg-gray-50">
            <td className="px-6 py-4">
              
              <FaStar/>
             
            </td>
            <td
              scope="row"
              className="px-6 py-4 flex items-center gap-3 min-w-fit font-medium text-gray-900 whitespace-nowrap"
            >
             <img src={Cosmos} alt="" className="w-10" />
             <div className="flex flex-col">
                <h6 className="text-[14px] text-[#48515B] font-[600]">COSMOS</h6>
                <p className="uppercase text-[12px]">Atom</p>
             </div>
              
            </td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">$ 7.950</td>
            <td className="px-6 py-4 font-semibold text-red-400">-0.84%</td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">14.3%</td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">10.0%</td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">$2999</td>
            <td className="px-6 py-4">
                <div className="flex max-w-fit flex-col">
                  <p
                  className="font-semibold text-[#48515B]"
                  >
                  $ 3.11b
                  </p>
                  <p>
                  35th
                  </p>
                </div>
               
                </td>
            <td className="px-6 py-4">15,338,404</td>
            <td className="px-6 py-4">6.04s</td>
            <td className="px-6 py-4">68,815,272</td>
     


          </tr>
          <tr className="bg-white border-b  hover:bg-gray-50">
            <td className="px-6 py-4">
              
              <FaStar/>
             
            </td>
            <td
              scope="row"
              className="px-6 py-4 flex items-center gap-3 min-w-fit font-medium text-gray-900 whitespace-nowrap"
            >
             <img src={Cosmos} alt="" className="w-10" />
             <div className="flex flex-col">
                <h6 className="text-[14px] text-[#48515B] font-[600]">COSMOS</h6>
                <p className="uppercase text-[12px]">Atom</p>
             </div>
              
            </td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">$ 7.950</td>
            <td className="px-6 py-4 font-semibold text-red-400">-0.84%</td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">14.3%</td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">10.0%</td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">$2999</td>
            <td className="px-6 py-4">
                <div className="flex max-w-fit flex-col">
                  <p
                  className="font-semibold text-[#48515B]"
                  >
                  $ 3.11b
                  </p>
                  <p>
                  35th
                  </p>
                </div>
               
                </td>
            <td className="px-6 py-4">15,338,404</td>
            <td className="px-6 py-4">6.04s</td>
            <td className="px-6 py-4">68,815,272</td>
     


          </tr>
          <tr className="bg-white border-b  hover:bg-gray-50">
            <td className="px-6 py-4">
              
              <FaStar/>
             
            </td>
            <td
              scope="row"
              className="px-6 py-4 flex items-center gap-3 min-w-fit font-medium text-gray-900 whitespace-nowrap"
            >
             <img src={Cosmos} alt="" className="w-10" />
             <div className="flex flex-col">
                <h6 className="text-[14px] text-[#48515B] font-[600]">COSMOS</h6>
                <p className="uppercase text-[12px]">Atom</p>
             </div>
              
            </td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">$ 7.950</td>
            <td className="px-6 py-4 font-semibold text-red-400">-0.84%</td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">14.3%</td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">10.0%</td>
            <td className="px-6 py-4 font-semibold text-[#48515B]">$2999</td>
            <td className="px-6 py-4">
                <div className="flex max-w-fit flex-col">
                  <p
                  className="font-semibold text-[#48515B]"
                  >
                  $ 3.11b
                  </p>
                  <p>
                  35th
                  </p>
                </div>
               
                </td>
            <td className="px-6 py-4">15,338,404</td>
            <td className="px-6 py-4">6.04s</td>
            <td className="px-6 py-4">68,815,272</td>
     


          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MainNetTable;
