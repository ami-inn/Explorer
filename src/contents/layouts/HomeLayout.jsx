import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom"
import Sidebar from "../../components/ui/Sidebar";
import Header from "../../components/ui/Header";

const HomeLayout = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();
    const divRef = useRef(null);
  
    const scrollToTop = () => {
      divRef.current.scroll({
        top: 0,
        behavior: "smooth",
      });
    };
  
    useEffect(() => {
      scrollToTop();
    }, [pathname]);

  return (
    <div className=" font-montserrat ">
    <div className="flex h-screen  ">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div
        className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden main-scrollbar"
        ref={divRef}
      >
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="font-montserrat">
          <Outlet />
        </main>
      </div>

    </div>

  </div>
  )
}

export default HomeLayout