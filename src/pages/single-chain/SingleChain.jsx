import Sol from "../../assets/logos/sol.png";
import DashboardCandleLightGraph from "../../charts/DashboardCandleLightGraph";
import GitOverviewChart from "../../charts/GitOverviewChart";
import RepositoryLineChart from "../../charts/RepositryLineChart";
import Footer from "../../components/ui/Footer";
import TopNavigation from "../../components/ui/TopNavigation";

const SingleChain = () => {
  return (
    <div className="px-3 flex flex-col gap-3">
      <TopNavigation page={"dashboard"} />
      <div className="px-4  py-10 mt-2 max-w-[1100px]">
        <h1 className="text-3xl mb-3 uppercase font-semibold text-primaryText">
          Cosmos
        </h1>
        <p className="text-secondaryText py-2 mb-3 font-medium text-base capitalize">
          The Cosmos Hub is an Internet of Blockchains, a network of blockchains
          able to communicate with each other in a decentralized way.
        </p>
      </div>

      <GraphOverviewSection />

      <ProposalsValidatorSection />

      <DevActivitySection />

      <Footer />
    </div>
  );
};

export default SingleChain;

const GraphOverviewSection = () => {
  return (
    <div className="px-2 flex gap-2 w-full mb-10 ">
      <div className="w-[60%]  border border-solid border-zinc-200  flex flex-col">
        <div>
          <DashboardCandleLightGraph />
        </div>
        {/* <div>
          <h1>too</h1>
        </div> */}
      </div>
      <div className="w-[40%]   rounded-lg  ">
        <div className="flex flex-col px-9 pt-7 pb-4 border border-solid border-zinc-200  max-md:px-5">
          <div className="text-lg font-semibold leading-7 text-zinc-800 max-md:max-w-full">
            Onchain Metrics
          </div>
          <div className="flex gap-2.5  mt-5 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1 grow shrink-0 justify-center items-start py-3 pr-1 pl-4 bg-[#FBFBFB] rounded-md basis-0 w-fit max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">
                Block Height
              </div>
              <div className="mt-2 text-base font-semibold leading-6 text-zinc-900">
                20,264,525
              </div>
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 justify-center items-start py-3 pr-1 pl-4 whitespace-nowrap bg-[#FBFBFB] rounded-md basis-0 w-fit max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">
                Transactions
              </div>
              <div className="mt-3 text-base font-semibold leading-6 text-zinc-900">
                69,058,175
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1 grow shrink-0 justify-center items-start py-3 pr-1 pl-4 bg-[#FBFBFB] rounded-md basis-0 w-fit max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">
                Transactions Per Block
              </div>
              <div className="mt-3 text-base font-semibold leading-6 text-zinc-900">
                3.41
              </div>
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 justify-center items-start py-3 pr-1 pl-4 bg-[#FBFBFB] rounded-md basis-0 w-fit max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">Block Time</div>
              <div className="mt-3 text-base font-semibold leading-6 text-zinc-900">
                6.05 s
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1 grow shrink-0 justify-center items-start py-3 pr-1 pl-4 whitespace-nowrap bg-[#FBFBFB] rounded-md basis-0 w-fit max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">Inflation</div>
              <div className="mt-3 text-base font-semibold leading-6 text-zinc-900">
                10.00%
              </div>
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 justify-center items-start py-3 pr-1 pl-4 bg-[#FBFBFB] rounded-md basis-0 w-fit max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">Staking APR</div>
              <div className="mt-2 text-base font-semibold leading-6 text-zinc-900">
                14.30%
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1 grow shrink-0 justify-center items-start py-3 pr-1 pl-4 bg-[#FBFBFB] rounded-md basis-0 w-fit max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">
                Bonded Tokens
              </div>
              <div className="mt-3 text-base font-semibold leading-6 text-zinc-900">
                63.0% / 249.68m
              </div>
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 justify-center items-start py-3 pr-1 pl-4 bg-[#FBFBFB] rounded-md basis-0 w-fit max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">
                Supply Tokens
              </div>
              <div className="mt-2 text-base font-semibold leading-6 text-zinc-900">
                396.57m
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProposalsValidatorSection = () => {
  return (
    <div className="w-full flex px-2 gap-2 mb-6">
      <div className=" w-[50%] max-h-[560px] overflow-y-auto flex flex-col grow px-4 py-11 border border-solid border-zinc-200 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-3.5 items-end">
            <div className="flex flex-col self-stretch">
              <div className="text-lg font-semibold leading-7 text-zinc-800">
                Proposals
              </div>
              <div className="mt-5 text-sm leading-5 text-zinc-900">
                Live Proposals · 4
              </div>
            </div>
            <div className="shrink-0 mt-9 w-px h-3.5 bg-black bg-opacity-20" />
            <div className="flex-auto mt-10 text-sm leading-5 text-zinc-900">
              Total Proposals · 203
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12f5cc17e4e7bef384bf3d8291c89d74cc6ba3332a92cf49e7de4d114f1a5951?apiKey=4da174b503c046938aa1866c42a60f69&"
            className="shrink-0 w-5 aspect-square"
          />
        </div>

        <div className="flex flex-col justify-center px-4 py-4 mt-3 bg-[#FBFBFB] rounded-md border border-solid border-black border-opacity-0 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-start px-px w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-1 items-center  text-xs font-semibold leading-5 text-[#FDA772]">
              <div>Voting Period</div>
            </div>
            <div className="justify-center px-2 py-1.5 text-xs font-bold leading-5 text-primaryText bg-[#1f4f6f59] rounded">
              Msg Community Pool Spend
            </div>
          </div>
          <div className="flex gap-5 mt-2 font-semibold max-md:flex-wrap">
            <div className="flex-auto text-sm leading-6 text-zinc-900">
              #917. [CORRECTED] DoraHacks: AEZ Quadratic Fun
            </div>
            <div className="flex gap-1.5 self-start text-[10px] text-nowrap leading-5">
              <p className=" text-gray-500">Voting End on</p>
              <p className="text-zinc-700">05/15 20:25</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-end px-16 mt-3.5 bg-gray-400 max-md:pl-5 max-md:max-w-full">
            <div className="shrink-0 bg-slate-500 h-[3px] w-[60px]" />
          </div>
        </div>
        <div className="flex flex-col justify-center px-4 py-4 mt-3 bg-[#FBFBFB] rounded-md border border-solid border-black border-opacity-0 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-start px-px w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-1 items-center  text-xs font-semibold leading-5 text-[#FDA772]">
              <div>Voting Period</div>
            </div>
            <div className="justify-center px-2 py-1.5 text-xs font-bold leading-5 text-primaryText bg-[#1f4f6f59] rounded">
              -
            </div>
          </div>
          <div className="flex gap-5 mt-2 font-semibold max-md:flex-wrap">
            <div className="flex-auto text-sm leading-6 text-zinc-900">
              #916. DoraHacks: AEZ Quadratic Funding Program
            </div>
            <div className="flex gap-1.5 self-start text-[10px] text-nowrap leading-5">
              <p className=" text-gray-500">Voting End on</p>
              <p className="text-zinc-700">05/15 20:25</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-end px-16 mt-3.5 bg-gray-400 max-md:pl-5 max-md:max-w-full">
            <div className="shrink-0 bg-slate-500 h-[3px] w-[60px]" />
          </div>
        </div>
      </div>
      <div className=" w-[50%] max-h-[560px] o  flex flex-col grow px-6 py-11 border border-solid  border-zinc-200 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-3.5 items-end">
            <div className="flex flex-col self-stretch">
              <div className="text-lg font-semibold leading-7 text-zinc-800">
                Validators
              </div>
              <div className="mt-5 text-sm leading-5 text-zinc-900">
                Active Vals. 180
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12f5cc17e4e7bef384bf3d8291c89d74cc6ba3332a92cf49e7de4d114f1a5951?apiKey=4da174b503c046938aa1866c42a60f69&"
            className="shrink-0 w-5 aspect-square"
          />
        </div>
        <div className="flex flex-col bg-[#FBFBFB]  px-2 py-4 mt-3  rounded-md border border-solid border-black border-opacity-0 ">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div>
                <img src={Sol} className="w-8" alt="" />
              </div>
              <div className="text-base font-bold text-[#48515B]">
                <h2>#1 Coinbase Custody</h2>
              </div>
            </div>
            <div className="text-[#A4ACB7]  flex items-end text-sm font-medium">
              <p>$178.75m</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#FBFBFB]  px-2 py-4 mt-3  rounded-md border border-solid border-black border-opacity-0 ">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div>
                <img src={Sol} className="w-8" alt="" />
              </div>
              <div className="text-base font-bold text-[#48515B]">
                <h2>#1 Coinbase Custody</h2>
              </div>
            </div>
            <div className="text-[#A4ACB7]  flex items-end text-sm font-medium">
              <p>$178.75m</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#FBFBFB]  px-2 py-4 mt-3  rounded-md border border-solid border-black border-opacity-0 ">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div>
                <img src={Sol} className="w-8" alt="" />
              </div>
              <div className="text-base font-bold text-[#48515B]">
                <h2>#1 Coinbase Custody</h2>
              </div>
            </div>
            <div className="text-[#A4ACB7]  flex items-end text-sm font-medium">
              <p>$178.75m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DevActivitySection = () => {
  return (
    <div className="mb-8">
      <div className="px-2">
        <h2
          // onClick={() => setToggleMenu("mainnet")}
          className={`text-base font-semibold px-2 py-3 text-[#181A20] opacity-75 ease-in delay-20  `}
        >
          Dev Activities
        </h2>

        <div className="flex flex-wrap px-2 font-medium text-[#48515B] text-xs py-2 gap-4">
          <p>
            <span className="text-[#FFC533]">Star - </span>15618
          </p>
          <p>Forked - 11,607</p>
          <p>Repositories - 106</p>
        </div>

        <div className="w-full border-slate-300 border h-fit">
          <GitOverviewChart />
        </div>
      </div>

      <div className="px-2">
        <h2
          // onClick={() => setToggleMenu("mainnet")}
          className={`text-sm font-semibold px-2 py-3 text-[#181A20] opacity-75 ease-in delay-20    capitalize `}
        >
          most active repositry 1 year{" "}
        </h2>

        <div className="flex flex-col px-4 gap-2 ">
          <div className="flex gap-3 cursor-pointer justify-end py-2.5 pl-2 font-semibold text-gray-600  rounded border border-solid bg-neutral-50 hover:bg-neutral-100 border-white border-opacity-0 max-md:flex-wrap">
            <div className="flex gap-0 ">
              <div className="flex flex-col">
                <div className="text-xs">chain-registry</div>
                <div className="flex gap-2 items-center mt-1 text-xs">
                  <div className="flex gap-0.5 self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fb492092be46c72c96ca3dffebda1914e999d06d6cef3e5e9accbffe02417bf?apiKey=4da174b503c046938aa1866c42a60f69&"
                      className="shrink-0 aspect-[1.1] w-[11px]"
                    />
                    <div>2,175</div>
                  </div>
                  <div className="flex gap-1 self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e815711aabd8d151af53dbfb30eca43a0dd51017237bfbdccf9ac38959962a46?apiKey=4da174b503c046938aa1866c42a60f69&"
                      className="shrink-0 aspect-square w-[9px]"
                    />
                    <div>475</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/35480f030fe3be9d8274248ed8e216c7be791a9f6eb98cceaabb15029726a699?apiKey=4da174b503c046938aa1866c42a60f69&"
                    className="shrink-0 self-stretch w-3 aspect-[0.93]"
                  />
                </div>
              </div>
              <div className="self-start mt-5 text-xs">3,976</div>
            </div>
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/64ab232c95bf3d3303ef037dce9f167834c7d9e7e37febb5dc23d83384ae7485?apiKey=4da174b503c046938aa1866c42a60f69&"
              className="grow shrink-0 aspect-[33.33] basis-0 w-fit max-md:max-w-full"
            /> */}
            <div className="w-full h">
              <RepositoryLineChart />
            </div>
          </div>
          <div className="flex gap-3 cursor-pointer justify-end py-2.5 pl-2 font-semibold text-gray-600  rounded border border-solid bg-neutral-50 hover:bg-neutral-100 border-white border-opacity-0 max-md:flex-wrap">
            <div className="flex gap-0 ">
              <div className="flex flex-col">
                <div className="text-xs">chain-registry</div>
                <div className="flex gap-2 items-center mt-1 text-xs">
                  <div className="flex gap-0.5 self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fb492092be46c72c96ca3dffebda1914e999d06d6cef3e5e9accbffe02417bf?apiKey=4da174b503c046938aa1866c42a60f69&"
                      className="shrink-0 aspect-[1.1] w-[11px]"
                    />
                    <div>2,175</div>
                  </div>
                  <div className="flex gap-1 self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e815711aabd8d151af53dbfb30eca43a0dd51017237bfbdccf9ac38959962a46?apiKey=4da174b503c046938aa1866c42a60f69&"
                      className="shrink-0 aspect-square w-[9px]"
                    />
                    <div>475</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/35480f030fe3be9d8274248ed8e216c7be791a9f6eb98cceaabb15029726a699?apiKey=4da174b503c046938aa1866c42a60f69&"
                    className="shrink-0 self-stretch w-3 aspect-[0.93]"
                  />
                </div>
              </div>
              <div className="self-start mt-5 text-xs">3,976</div>
            </div>
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/64ab232c95bf3d3303ef037dce9f167834c7d9e7e37febb5dc23d83384ae7485?apiKey=4da174b503c046938aa1866c42a60f69&"
              className="grow shrink-0 aspect-[33.33] basis-0 w-fit max-md:max-w-full"
            /> */}
            <div className="w-full h">
              <RepositoryLineChart />
            </div>
          </div>
        </div>

        {/* <RepositoryLineChart/> */}
      </div>
    </div>
  );
};
