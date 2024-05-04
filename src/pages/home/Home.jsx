import Footer from "../../components/ui/Footer";
import { HighlightedChainSection } from "../../sections/home"
import { BsFillLightningChargeFill } from "react-icons/bs";

const Home = () => {
  return (
    <div>

      <div className="px-10 py-8">
        <h2 className="flex items-center gap-3"><BsFillLightningChargeFill className=" rounded-full bg-[#e0a100] text-white p-1 text-xl"/> <span className="text-primaryText text-base font-semibold">Hightlighted Chains</span></h2>
        <HighlightedChainSection/>
      </div>

      <Footer/>
    </div>
  )
}

export default Home