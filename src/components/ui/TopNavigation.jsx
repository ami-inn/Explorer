import { Link, useLocation } from "react-router-dom";
import { ExtractChainName } from "../../utils/helpers/helpers";
import PropTypes from "prop-types";

const TopNavigation = ({ page }) => {
  const location = useLocation();
  const Chain = ExtractChainName(location);

  return (
    <nav className="w-full flex px-3 gap-4  mt-2 bg-gray-50">
      <div className="w-fit hover:bg-[#FBFBFB]   delay-75 ease-in ">
        <h2
          // onClick={() => setToggleMenu("mainnet")}
          className={`text-base font-semibold px-2 py-3 text-primaryText ease-in delay-200 cursor- hover:opacity-10pointer hover:text-primaryText `}
        >
          <Link to={`/overview/${Chain}/`}>Dashboard</Link>
        </h2>
        <div
          className={`w-full h-[4px]  rounded-t-lg ${
            page === "dashboard"
              ? "bg-[#4B208B] cursor-pointer ease-in transition-colors delay-150"
              : "bg-gray-50"
          }`}
        />
      </div>
      <div className="w-fit hover:bg-[#FBFBFB]  delay-75 ease-in">
        <h2
          // onClick={() => setToggleMenu("mainnet")}
          className={`text-base font-semibold px-2 py-3 text-[#181A20] opacity-75 ease-in delay-20 hover:opacity-100 cursor-pointer hover:text-primaryText `}
        >
          <Link to={`/overview/${Chain}/validator`}>Validators</Link>
        </h2>
        <div
          className={`w-full h-[4px] rounded-t-lg ${
            page === "validator"
              ? "bg-[#4B208B] cursor-pointer ease-in transition-colors delay-150"
              : "bg-gray-50 "
          }`}
        />
      </div>
      <div className="w-fit hover:bg-[#FBFBFB]  delay-75 ease-in">
        <h2
          // onClick={() => setToggleMenu("mainnet")}
          className={`text-base font-semibold px-2 py-3 text-[#181A20] opacity-75 ease-in delay-20 hover:opacity-100 cursor-pointer hover:text-primaryText `}
        >
          Proposals
        </h2>
        <div
          className={`w-full h-[4px] rounded-t-lg ${
            page === "proposals"
              ? "bg-[#4B208B] cursor-pointer ease-in transition-colors delay-150"
              : "bg-gray-50"
          }`}
        />
      </div>
      <div className="w-fit hover:bg-[#FBFBFB]  delay-75 ease-in">
        <h2
          // onClick={() => setToggleMenu("mainnet")}
          className={`text-base font-semibold px-2 py-3 text-[#181A20] opacity-75 ease-in delay-20 hover:opacity-100 cursor-pointer hover:text-primaryText `}
        >
          Blocks
        </h2>
        <div
          className={`w-full h-[4px] rounded-t-lg ${
            page === "blocks"
              ? "bg-[#70add7] cursor-pointer ease-in transition-colors delay-150"
              : "bg-gray-50"
          }`}
        />
      </div>
      <div className="w-fit hover:bg-[#FBFBFB]  delay-75 ease-in">
        <h2
          // onClick={() => setToggleMenu("mainnet")}
          className={`text-base font-semibold px-2 py-3 text-[#181A20] opacity-75 ease-in delay-20 hover:opacity-100 cursor-pointer hover:text-primaryText `}
        >
          Transactions
        </h2>
        <div
          className={`w-full h-[4px]  rounded-t-lg ${
            page === "transactions"
              ? "bg-[#70add7] cursor-pointer ease-in transition-colors delay-150"
              : "bg-gray-50"
          }`}
        />
      </div>
      <div className="w-fit hover:bg-[#FBFBFB]  delay-75 ease-in">
        <h2
          // onClick={() => setToggleMenu("mainnet")}
          className={`text-base font-semibold px-2 py-3 text-[#181A20] opacity-75 ease-in delay-20 hover:opacity-100 cursor-pointer hover:text-primaryText `}
        >
          Relayers
        </h2>
        <div
          className={`w-full h-[4px] rounded-t-lg ${
            page === "relayers"
              ? "bg-[#70add7] cursor-pointer ease-in transition-colors delay-150"
              : "bg-gray-50"
          }`}
        />
      </div>
      <div className="w-fit hover:bg-[#FBFBFB]  delay-75 ease-in">
        <h2
          // onClick={() => setToggleMenu("mainnet")}
          className={`text-base font-semibold px-2 py-3 text-[#181A20] opacity-75 ease-in delay-20 hover:opacity-100 cursor-pointer hover:text-primaryText `}
        >
          Assets
        </h2>
        <div
          className={`w-full h-[4px]  rounded-t-lg ${
            page === "assets"
              ? "bg-[#70add7] cursor-pointer ease-in transition-colors delay-150"
              : "bg-gray-50"
          }`}
        />
      </div>
      <div className="w-fit hover:bg-[#FBFBFB]  delay-75 ease-in">
        <h2
          // onClick={() => setToggleMenu("mainnet")}
          className={`text-base font-semibold px-2 py-3 text-[#181A20] opacity-75 ease-in delay-20 hover:opacity-100 cursor-pointer hover:text-primaryText `}
        >
          Accounts
        </h2>
        <div
          className={`w-full h-[4px] rounded-t-lg ${
            page === "accounts"
              ? "bg-[#70add7] cursor-pointer ease-in transition-colors delay-150"
              : "bg-gray-50"
          }`}
        />
      </div>
      <div className="w-fit hover:bg-[#FBFBFB]  delay-75 ease-in">
        <h2
          // onClick={() => setToggleMenu("mainnet")}
          className={`text-base font-semibold px-2 py-3  text-[#181A20] opacity-75 hover:opacity-100 cursor-pointer hover:text-primaryText `}
        >
          Parameters
        </h2>
        <div
          className={`w-full h-[4px]  rounded-t-lg ${
            page === "parameters"
              ? "bg-[#70add7] cursor-pointer ease-in transition-colors delay-150"
              : "bg-gray-50"
          }`}
        />
      </div>
    </nav>
  );
};

export default TopNavigation;



// types
TopNavigation.propTypes = {
  page: PropTypes.string.isRequired,
};
