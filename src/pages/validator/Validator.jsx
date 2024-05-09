/* eslint-disable no-constant-condition */

import TopNavigation from "../../components/ui/TopNavigation";
import { SearchBar } from "../../sections/home/OverviewSection";
import ValidatorsTable from "../../components/tables/ValidatorsTable";
import Footer from "../../components/ui/Footer";

const Validator = () => {
  return (
    <div className="px-3 flex flex-col gap-4">
      <TopNavigation page={"validator"} />
      <div className="px-4  py-8 max-w-full border-primaryText border-t-[1px] border-b-[1px] ">
        <h2 className="text-xl font-semibold text-[#48515B]">
          Validator Summary
        </h2>

        <div className=" flex gap-5 py-3 max-w-full flex-wrap">
          <div className="flex flex-col items-start py-3 pr-20 pl-3.5 rounded-md bg-gray-200 bg-opacity-40 min-w-[253px]">
            <div className="text-sm leading-5 text-neutral-900">
              Active / Allocated
            </div>
            <div className="mt-3 text-base font-semibold leading-6 text-[#772044]">
              180 / 548
            </div>
          </div>
          <div className="flex flex-col items-start py-3 pr-20 pl-3.5 rounded-md bg-gray-200 bg-opacity-40 min-w-[253px]">
            <div className="text-sm leading-5 text-neutral-900">
              Onchain Apr
            </div>
            <div className="mt-3 text-base font-semibold leading-6 text-[#772044]">
              14.30%
            </div>
          </div>
          <div className="flex flex-col items-start py-3 pr-20 pl-3.5 rounded-md bg-gray-200 bg-opacity-40 min-w-[253px]">
            <div className="text-sm leading-5 text-neutral-900">
              Bonded Rate
            </div>
            <div className="mt-3 text-base font-semibold leading-6 text-[#772044]">
              62.96%
            </div>
          </div>
          <div className="flex flex-col items-start py-3 pr-20 pl-3.5 rounded-md bg-gray-200 bg-opacity-40 min-w-[253px]">
            <div className="text-sm leading-5 text-neutral-900">
              Avg / Weighted Commission
            </div>
            <div className="mt-3 text-base font-semibold leading-6 text-[#772044]">
              12.07% / 11.68%
            </div>
          </div>
        </div>
      </div>

      <ValidatorSection />
    </div>
  );
};

export default Validator;

const ValidatorSection = () => {
  return (
    <section>
      <div className="felx flex-col">
        <nav className="flex px-2 justify-between ">
          <div className="flex  gap-6">
            <div>
              <h2
                //   onClick={() => setToggleMenu("mainnet")}
                className="text-sm font-semibold text-[#818D9C] ease-in delay-200 cursor-pointer hover:text-primaryText "
              >
                validators
              </h2>
              <div
                className={`w-full h-[3px] mt-2 rounded-t-lg ${
                  true
                    ? "bg-[#4B208B] cursor-pointer ease-in transition-colors delay-150"
                    : "bg-white"
                }`}
              />
            </div>
            <div>
              <h2
                //   onClick={() => setToggleMenu("testnet")}
                className="text-sm font-semibold text-[#818D9C] ease-in delay-200 cursor-pointer hover:text-primaryText "
              >
                V.P. Trends <span>{`(20)`}</span>
              </h2>
              <div
                className={`w-full h-[3px] mt-2 rounded-t-lg ${
                  false
                    ? "bg-[#4B208B] cursor-pointer ease-in transition-colors delay-150"
                    : "bg-white"
                }`}
              />
            </div>
            <div>
              <h2
                //   onClick={() => setToggleMenu("testnet")}
                className="text-sm font-semibold text-[#818D9C] ease-in delay-200 cursor-pointer hover:text-primaryText "
              >
                Consensus <span>{`(20)`}</span>
              </h2>
              <div
                className={`w-full h-[3px] mt-2 rounded-t-lg ${
                  false
                    ? "bg-[#4B208B] cursor-pointer ease-in transition-colors delay-150"
                    : "bg-white"
                }`}
              />
            </div>
          </div>
        </nav>

        <div className="flex justify-end pr-12 ">
          <div className="flex gap-3">
            <div className="bg-[#E6EBF3] flex items-center rounded-md ">
              <div className="px-3">
                <h2 className="text-sm text-primaryText font-medium">
                  Select Item
                </h2>
              </div>
            </div>
            <div className=" items-center max-w-48">
              <SearchBar />
            </div>
          </div>
        </div>

        <div className="mb-8">
            <ValidatorsTable/>
        </div> 


      </div>
      <Footer/>
    </section>
  );
};
