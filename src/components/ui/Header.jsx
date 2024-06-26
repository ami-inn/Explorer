/* eslint-disable react/prop-types */
import { FaSearch, FaWallet } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import BasicBreadcrumbs from "../mui/BreadCrumbs";

const Header = (props) => {
  let location = useLocation();
  console.log(location, "location");

  return (
    <header className="sticky top-0 z-50 flex w-full bg-white  border-b-2 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            {/* <img src={LogoIcon} alt="Logo" /> */}
          </Link>
        </div>

        <div className="hidden sm:block">
          <div className=" text-[16px] pl-[18px] font-semibold text-[#636f7e] hover:text-primaryText font-custom1 cursor-pointer">
            {location.pathname === "/" ? (
              "Overview"
            ) : location.pathname.includes("/overview/") ? (
              <BasicBreadcrumbs />
            ) : (
              "Overview"
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <div className="flex items-center justify-evenly mr-4">
            <div
              onClick={() => {
                // setOpen(true);
              }}
              className="flex items-center justify-between w-[216px] py-4 h-[34px] bg-white rounded-md border border-[#dfe1e4] cursor-pointer "
            >
              <div className="pl-2">
                <FaSearch className="text-[#294b7a]" />
              </div>
              <div className="bg-[#c2d1e5] text-[13px] text-[#294b7a] px-2 mr-2 rounded-sm">
                /
              </div>
            </div>
            <div className=" p-[6px] text-secondaryText hover:text-primaryText rounded-md ml-[10px] pl-2 text-[18px] cursor-pointer hover:bg-primaryHover">
              <FaWallet />
            </div>
            {/* <div className=" p-[6px] text-secondaryText hover:text-primaryText rounded-md ml-[10px] pl-2 cursor-pointer hover:bg-[#363c45]">
            <FaUser  />
          </div> */}
          </div>

          {/* <!-- User Area --> */}
          {/* <DropdownUser /> */}
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
