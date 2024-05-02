import { Routes, Route } from "react-router-dom";
import HomeRoutes from "./HomeRoutes";



const AppRoutes = () => {

  return (
    <Routes>
        <Route path="*" element={<HomeRoutes/>} />
    </Routes>
  )
}

export default AppRoutes