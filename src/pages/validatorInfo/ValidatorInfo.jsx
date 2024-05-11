import Footer from "../../components/ui/Footer";
import TopNavigation from "../../components/ui/TopNavigation";

const ValidatorInfo = () => {
  return (
    <div className="px-3 flex flex-col gap-4">
      <TopNavigation page={"validator"} />

      <div className="px-6 py-4 bg-gray-50">
        <div className="flex flex-col mb-4">
          <div className="flex gap-5  justify-between px-0.5 w-full font-semibold max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-3.5 items-start px-5 text-2xl leading-10 whitespace-nowrap text-zinc-900">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a30ad90bb72596f0131f7516a60d37e013415a6ead7ef6fa3cfc060f45bf050b?apiKey=4da174b503c046938aa1866c42a60f69&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a30ad90bb72596f0131f7516a60d37e013415a6ead7ef6fa3cfc060f45bf050b?apiKey=4da174b503c046938aa1866c42a60f69&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a30ad90bb72596f0131f7516a60d37e013415a6ead7ef6fa3cfc060f45bf050b?apiKey=4da174b503c046938aa1866c42a60f69&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a30ad90bb72596f0131f7516a60d37e013415a6ead7ef6fa3cfc060f45bf050b?apiKey=4da174b503c046938aa1866c42a60f69&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a30ad90bb72596f0131f7516a60d37e013415a6ead7ef6fa3cfc060f45bf050b?apiKey=4da174b503c046938aa1866c42a60f69&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a30ad90bb72596f0131f7516a60d37e013415a6ead7ef6fa3cfc060f45bf050b?apiKey=4da174b503c046938aa1866c42a60f69&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a30ad90bb72596f0131f7516a60d37e013415a6ead7ef6fa3cfc060f45bf050b?apiKey=4da174b503c046938aa1866c42a60f69&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a30ad90bb72596f0131f7516a60d37e013415a6ead7ef6fa3cfc060f45bf050b?apiKey=4da174b503c046938aa1866c42a60f69&"
                className="shrink-0 w-8 aspect-square"
              />
              <div className="flex-auto self-stretch my-auto">kava_labs</div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8844b381d5e6087ac3b5664c40729d3450938e1fc4f474c6ca34748f471542bf?apiKey=4da174b503c046938aa1866c42a60f69&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8844b381d5e6087ac3b5664c40729d3450938e1fc4f474c6ca34748f471542bf?apiKey=4da174b503c046938aa1866c42a60f69&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8844b381d5e6087ac3b5664c40729d3450938e1fc4f474c6ca34748f471542bf?apiKey=4da174b503c046938aa1866c42a60f69&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8844b381d5e6087ac3b5664c40729d3450938e1fc4f474c6ca34748f471542bf?apiKey=4da174b503c046938aa1866c42a60f69&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8844b381d5e6087ac3b5664c40729d3450938e1fc4f474c6ca34748f471542bf?apiKey=4da174b503c046938aa1866c42a60f69&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8844b381d5e6087ac3b5664c40729d3450938e1fc4f474c6ca34748f471542bf?apiKey=4da174b503c046938aa1866c42a60f69&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8844b381d5e6087ac3b5664c40729d3450938e1fc4f474c6ca34748f471542bf?apiKey=4da174b503c046938aa1866c42a60f69&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8844b381d5e6087ac3b5664c40729d3450938e1fc4f474c6ca34748f471542bf?apiKey=4da174b503c046938aa1866c42a60f69&"
                className="shrink-0 rounded-2xl aspect-[2.33] w-[79px]"
              />
            </div>
            <div className="justify-center self-start px-5 py-3.5 text-xs leading-5 border border-pink-800 border-solid bg-pink-200 rounded-[54px] text-pink-800">
              Connect Wallet
            </div>
          </div>
          <div className="mt-11 max-w-full w-[616px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col px-5 text-base md:text-nowrap leading-6 text-gray-500 max-md:mt-10">
                  <div>Validator Address</div>
                  <div className="mt-7">Account Address</div>
                  <div className="mt-7">Details</div>
                  <div className="mt-7">Additional Info</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 text-base leading-6 whitespace-nowrap text-zinc-900 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-wrap">
                    <div className="flex-auto">
                      akashvaloper1qvsus5qg8yhre7k2c78xkkw4nvqqgev7zw5wzs
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0c40b9add88bfcfe41c624a3fe31324db76539828b48aa2a96f39ea87f2ab2f?apiKey=4da174b503c046938aa1866c42a60f69&"
                      className="shrink-0 self-start w-3.5 aspect-[0.93]"
                    />
                  </div>
                  <div className="mt-6 text-cyan-700 max-md:max-w-full">
                    akash1qvsus5qg8yhre7k2c78xkkw4nvqqgev7gv6gj6
                  </div>
                  <div className="mt-8 max-md:max-w-full">-</div>
                  <div className="flex gap-2.5 self-start mt-7 text-xs font-bold leading-5 text-slate-700">
                    <div className="flex gap-1.5 justify-center px-2.5 py-2 rounded border border-solid bg-slate-200 border-slate-400">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb0014dc43e759fb3e5859c740562ea54662de9590140e35e5efd39c3a0db2d7?apiKey=4da174b503c046938aa1866c42a60f69&"
                        className="shrink-0 aspect-square w-[15px]"
                      />
                      <div className="my-auto">VALIDATORS</div>
                    </div>
                    <div className="flex gap-1.5 justify-center px-2.5 py-2 rounded border border-solid bg-slate-200 border-slate-400">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/664e473982cd7fdaafd9d6bf6e98fd638c535ad1593d4e1b170163cced1836c1?apiKey=4da174b503c046938aa1866c42a60f69&"
                        className="shrink-0 aspect-square w-[15px]"
                      />
                      <div className="my-auto">STATS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 w-full bg-black bg-opacity-10 min-h-[1px] max-md:max-w-full" />
          <div className="flex gap-2.5 px-5 mt-5 w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1 justify-center items-start py-3 pr-20 pl-4 whitespace-nowrap bg-gray-200 rounded-md max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">Commission</div>
              <div className="mt-3 text-base font-semibold leading-6 text-zinc-900">
                5.00%
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-start py-3 pr-20 pl-4 bg-gray-200 rounded-md max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">Expect APR</div>
              <div className="mt-2 text-base font-semibold leading-6 text-zinc-900">
                18.08%
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-start py-3 pr-20 pl-4 bg-gray-200 rounded-md max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">
                Voting Power
              </div>
              <div className="mt-2 text-base font-semibold leading-6 text-zinc-900">
                10.07%
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-start py-3 pr-20 pl-4 whitespace-nowrap bg-gray-200 rounded-md max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">Delegators</div>
              <div className="mt-2 text-base font-semibold leading-6 text-zinc-900">
                10,459
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-start py-3.5 pr-20 pl-4 bg-gray-200 rounded-md max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">
                Start Height
              </div>
              <div className="mt-3.5 text-base font-semibold leading-6 text-zinc-900">
                -
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 px-5 mt-2.5 w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1 justify-center items-start py-3 pr-20 pl-4 whitespace-nowrap bg-gray-200 rounded-md max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">Uptime</div>
              <div className="mt-2 text-base font-semibold leading-6 text-zinc-900">
                100.00%
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-start py-3 pr-20 pl-4 bg-gray-200 rounded-md max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">
                Uptime Block Miss
              </div>
              <div className="mt-2 text-base font-semibold leading-6 text-zinc-900">
                0 / 500
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-start py-3 pr-20 pl-4 bg-gray-200 rounded-md max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">
                Window Block Miss
              </div>
              <div className="mt-3 text-base font-semibold leading-6 text-zinc-900">
                2
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-start py-3 pr-20 pl-4 bg-gray-200 rounded-md max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">
                Bonded Tokens
              </div>
              <div className="mt-3 text-base font-semibold leading-6 text-zinc-900">
                12.97m
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-start py-3 pr-20 pl-4 bg-gray-200 rounded-md max-md:pr-5">
              <div className="text-xs leading-5 text-gray-500">
                Self Bonded Tokens
              </div>
              <div className="mt-3 text-base font-semibold leading-6 text-zinc-900">
                2.59m
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-5 py-4">
          <h2 className="self-start text-lg font-semibold leading-7 text-zinc-900">
            Proposed Blocks
          </h2>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right border-none text-gray-500 ">
              <thead className="text-xs text-gray-700 border-b-[2px] border-white uppercase   ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Height 
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Block Hash
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Txs
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b  ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    20,306
                  </th>
                  <td className="px-6 py-4">BB60374D...3A4B2163</td>
                  <td className="px-6 py-4">Txs</td>
                  <td className="px-6 py-4">TIme</td>
                </tr>
             
            
              </tbody>
            </table>
          </div>

          

          {/* <div className="flex gap-4 items-center self-end mt-3.5">
        <div className="flex gap-2 items-center self-stretch text-xs font-semibold leading-5 whitespace-nowrap text-zinc-900">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d27fdcab668857eeb506e27e67f13e7e0ddf33d9245feefe4cb08cd3af906adc?apiKey=4da174b503c046938aa1866c42a60f69&"
            className="shrink-0 self-stretch my-auto aspect-square w-[17px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2e1ac9cfd9b154849db29641ec48429de16ea02fc23efa4da6c705efa8cc236?apiKey=4da174b503c046938aa1866c42a60f69&"
            className="shrink-0 self-stretch my-auto aspect-square w-[17px]"
          />
          <div className="justify-center items-center self-stretch rounded bg-zinc-200 h-[26px] w-[26px]">
            1
          </div>
        </div>
        <div className="flex gap-5 justify-between self-stretch my-auto text-xs font-semibold leading-5 whitespace-nowrap text-zinc-700">
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
        <div className="flex gap-2 self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ed35ee7af1b65926e40819106b5726adbe5a14931c052db38670bbd4151e6ee?apiKey=4da174b503c046938aa1866c42a60f69&"
            className="shrink-0 aspect-square w-[17px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/da37c183cd29b03b0838ceca86c0fea371a6ef1d8b1ca16f276bb8c00bf81736?apiKey=4da174b503c046938aa1866c42a60f69&"
            className="shrink-0 aspect-square w-[17px]"
          />
        </div>
      </div> */}
        </div>

        <div className="flex flex-col px-5 py-4">
          <h2 className="self-start text-lg font-semibold leading-7 text-zinc-900">
            Proposed Blocks
          </h2>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right border-none text-gray-500 ">
              <thead className="text-xs text-gray-700 border-b-[2px] border-white uppercase   ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Height 
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Block Hash
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Txs
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b  ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    20,306
                  </th>
                  <td className="px-6 py-4">BB60374D...3A4B2163</td>
                  <td className="px-6 py-4">Txs</td>
                  <td className="px-6 py-4">TIme</td>
                </tr>
             
            
              </tbody>
            </table>
          </div>

          

          {/* <div className="flex gap-4 items-center self-end mt-3.5">
        <div className="flex gap-2 items-center self-stretch text-xs font-semibold leading-5 whitespace-nowrap text-zinc-900">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d27fdcab668857eeb506e27e67f13e7e0ddf33d9245feefe4cb08cd3af906adc?apiKey=4da174b503c046938aa1866c42a60f69&"
            className="shrink-0 self-stretch my-auto aspect-square w-[17px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2e1ac9cfd9b154849db29641ec48429de16ea02fc23efa4da6c705efa8cc236?apiKey=4da174b503c046938aa1866c42a60f69&"
            className="shrink-0 self-stretch my-auto aspect-square w-[17px]"
          />
          <div className="justify-center items-center self-stretch rounded bg-zinc-200 h-[26px] w-[26px]">
            1
          </div>
        </div>
        <div className="flex gap-5 justify-between self-stretch my-auto text-xs font-semibold leading-5 whitespace-nowrap text-zinc-700">
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
        <div className="flex gap-2 self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ed35ee7af1b65926e40819106b5726adbe5a14931c052db38670bbd4151e6ee?apiKey=4da174b503c046938aa1866c42a60f69&"
            className="shrink-0 aspect-square w-[17px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/da37c183cd29b03b0838ceca86c0fea371a6ef1d8b1ca16f276bb8c00bf81736?apiKey=4da174b503c046938aa1866c42a60f69&"
            className="shrink-0 aspect-square w-[17px]"
          />
        </div>
      </div> */}
        </div> 
        
        <div className="flex flex-col px-5 py-4">
          <h2 className="self-start text-lg font-semibold leading-7 text-zinc-900">
            Pover Events
          </h2>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right border-none text-gray-500 ">
              <thead className="text-xs text-gray-700 border-b-[2px] border-white uppercase   ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Height 
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Block Hash
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Txs
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b  ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    20,306
                  </th>
                  <td className="px-6 py-4">BB60374D...3A4B2163</td>
                  <td className="px-6 py-4">Txs</td>
                  <td className="px-6 py-4">TIme</td>
                </tr>
             
            
              </tbody>
            </table>
          </div>

          

        </div>

        <div className="flex flex-col px-5 py-4">
          <h2 className="self-start text-lg font-semibold leading-7 text-zinc-900">
            Delegators
          </h2>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right border-none text-gray-500 ">
              <thead className="text-xs text-gray-700 border-b-[2px] border-white uppercase   ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Height 
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Block Hash
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Txs
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b  ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    20,306
                  </th>
                  <td className="px-6 py-4">BB60374D...3A4B2163</td>
                  <td className="px-6 py-4">Txs</td>
                  <td className="px-6 py-4">TIme</td>
                </tr>
             
            
              </tbody>
            </table>
          </div>

        
        </div>

        <div className="flex flex-col px-5 py-4">
          <h2 className="self-start text-lg font-semibold leading-7 text-zinc-900">
            Votes Of Chores One
          </h2>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right border-none text-gray-500 ">
              <thead className="text-xs text-gray-700 border-b-[2px] border-white uppercase   ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Height 
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Block Hash
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Txs
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b  ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    20,306
                  </th>
                  <td className="px-6 py-4">BB60374D...3A4B2163</td>
                  <td className="px-6 py-4">Txs</td>
                  <td className="px-6 py-4">TIme</td>
                </tr>
             
            
              </tbody>
            </table>
          </div>

        
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ValidatorInfo;
