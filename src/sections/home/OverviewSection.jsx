/* eslint-disable react/prop-types */
import { useState } from "react";
import Cosmos from "../../assets/logos/cosmos.svg";
import { FaSearch } from "react-icons/fa";
import MainNetTable from "../../components/tables/MainNetTable";


const SearchBar = () => {
  return (
    <div className="flex bg-[#E6EBF3] items-center px-2 py-1 rounded-md hover:bg-[#dfe6f0]">
      <span>
        <FaSearch fillColor={"#6c7989"} />
      </span>
      <input
        className="pl-2 border-none cursor-pointer focus:outline-none bg-transparent placeholder:font-custom1 placeholder:text-[14px] placeholder:font-medium placeholder:text-secondaryText text-primaryText"
        type="text"
        placeholder="Search Chain"
      />
    </div>
  );
};

const FilterItem = ({ name, active }) => {
  return (
    <>
      <span
        className="text-[11px] text-[#f4f5f6] hover:bg-[#e6ebf362] font-semibold px-[10px] py-1 rounded-[4px]"
        style={{
          backgroundColor: active ? "#E6EBF3" : "",
          color: active ? "#5D5F62" : "#818d9c",
          cursor: "pointer",
        }}
      >
        {name}
      </span>
    </>
  );
};

const OverviewSection = () => {
  const [toggleMenu, setToggleMenu] = useState("mainnet");

  return (
    <section className="flex flex-col">
      <div className=" max-w-full mt-4 px-2 mb-4  flex flex-wrap gap-x-16 gap-y-6 min-h-fit py-6 pt-3  ">
        <div className="min-w-fit   flex items-center gap-2">
          <img src={Cosmos} alt="" className="w-8" />
          <h6 className="text-base font-semibold text-primaryText uppercase">
            Cosmos
          </h6>
        </div>
        <div className="min-w-fit flex items-center gap-2">
          <img src={Cosmos} alt="" className="w-8" />
          <h6 className="text-base font-semibold text-primaryText uppercase">
            Cosmos
          </h6>
        </div>
        <div className="min-w-fit flex items-center gap-2">
          <img src={Cosmos} alt="" className="w-8" />
          <h6 className="text-base font-semibold text-primaryText uppercase">
            Cosmos
          </h6>
        </div>
        <div className="min-w-fit flex items-center gap-2">
          <img src={Cosmos} alt="" className="w-8" />
          <h6 className="text-base font-semibold text-primaryText uppercase">
            Cosmos
          </h6>
        </div>
        <div className="min-w-fit flex items-center gap-2">
          <img src={Cosmos} alt="" className="w-8" />
          <h6 className="text-base font-semibold text-primaryText uppercase">
            Cosmos
          </h6>
        </div>{" "}
        <div className="min-w-fit flex items-center gap-2">
          <img src={Cosmos} alt="" className="w-8" />
          <h6 className="text-base font-semibold text-primaryText uppercase">
            Cosmos
          </h6>
        </div>
        <div className="min-w-fit flex items-center gap-2">
          <img src={Cosmos} alt="" className="w-8" />
          <h6 className="text-base font-semibold text-primaryText uppercase">
            Cosmos
          </h6>
        </div>
        <div className="min-w-fit flex items-center gap-2">
          <img src={Cosmos} alt="" className="w-8" />
          <h6 className="text-base font-semibold text-primaryText uppercase">
            Cosmos
          </h6>
        </div>
        <div className="min-w-fit flex items-center gap-2">
          <img src={Cosmos} alt="" className="w-8" />
          <h6 className="text-base font-semibold text-primaryText uppercase">
            Cosmos
          </h6>
        </div>
   
    
      </div>

      <div className="mt-2">
        <nav className="flex justify-between ">
          {/* <div>
                
            </div> */}
            <div className="flex gap-6">
            <div>
            <h2
              onClick={() => setToggleMenu("mainnet")}
              className="text-base font-semibold text-[#818D9C] ease-in delay-200 cursor-pointer hover:text-primaryText "
            >
              Mainnet <span>{`(40)`}</span>
            </h2>
            <div
              className={`w-full h-[2px] mt-2 rounded-t-lg ${
                toggleMenu === "mainnet"
                  ? "bg-[#70add7] cursor-pointer ease-in transition-colors delay-150"
                  : "bg-white"
              }`}
            />
          </div>
          <div>
            <h2
              onClick={() => setToggleMenu("testnet")}
              className="text-base font-semibold text-[#818D9C] ease-in delay-200 cursor-pointer hover:text-primaryText "
            >
              Testnet <span>{`(20)`}</span>
            </h2>
            <div
              className={`w-full h-[2px] mt-2 rounded-t-lg ${
                toggleMenu === "testnet"
                  ? "bg-[#70add7] cursor-pointer ease-in transition-colors delay-150"
                  : "bg-white"
              }`}
            />
          </div>
            </div>
      

          <div className="flex justify-end ">
            <div className="flex items-center">
              <div>
                <FilterItem name={"USD"} active={true} />
                <FilterItem name={"BTC"} />
              </div>
              <div className="mx-8">
                <FilterItem name={"24H"} active={true} />
                <FilterItem name={"7D"} />
                <FilterItem name={"30D"} />
              </div>
              <div>
                <SearchBar />
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div>
        <MainNetTable/>
      </div>
    </section>
  );
};

export default OverviewSection;
