import { Routes, Route, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { Home, SingleChain } from "../../pages";


const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home/>} />
        <Route path="/overview/:dynamicParam" element={<SingleChain/>} />
    
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default HomeRoutes;
