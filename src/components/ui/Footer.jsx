/* eslint-disable react/prop-types */
import {  FaFacebook,
    FaGithub,
    FaMedium,
    FaTwitter,} from '../../styles/icons/index'

const Footer = () => {
  return (
    <div className="p-9 pb-[45px] w-full border-b-[1px] border-[#2d3239] text-white">
      <div className="flex justify-between mt-1 mr-1">
        <div className="">
          <div className="text-[26px] tracking-widest font-semibold text-primaryText">
            Nuchain
          </div>
          <div className="text-[#636f7e] text-[16px]">Powered by Nuchain</div>
          <div className="text-[#636f7e] text-[16px] mt-8 w-[800px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit
            dignissimos aut ducimus ex quam soluta cum recusandae distinctio
            ipsam, tempore tempora molestiae? Veniam alias, at fugiat reiciendis
            cupiditate asperiores.
          </div>
        </div>
        <div className="p-1 px-3 ">
          <div className="flex mb-4 justify-between">
            <div className="pr-7  py-1 ">
              <Links
                title={"Medium"}
                icon={<FaMedium width={18} height={18} />}
              />
            </div>
            <div className=" px-9 py-1 ">
              <Links
                title={"Github"}
                icon={<FaGithub width={18} height={18} />}
              />
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="pr-7  py-1 ">
              <Links
                title={"Cosmostation"}
                icon={<FaFacebook width={18} height={18} />}
              />
            </div>
            <div className="pr-7  py-1 ">
              <Links
                title={"Twitter"}
                icon={<FaTwitter width={18} height={18} />}
              />
            </div>
          </div>
      
        </div>
      </div>
      <div className="h-16"></div>

      <div className="h-10"></div>
    </div>
  );
};

export default Footer;

const Links = ({ title, icon }) => {
  return (
    <>
      <div className="text-[#828791] hover:text-primaryText flex cursor-pointer">
        <span>{icon}</span>
        <span className="text-[14px] ml-3 font-semibold">{title}</span>
      </div>
    </>
  );
};
