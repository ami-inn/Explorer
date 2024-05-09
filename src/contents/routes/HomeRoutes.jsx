import { Routes, Route, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { Home, SingleChain, Validator } from "../../pages";


const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home/>} />
        <Route path="/overview/:chain" element={<SingleChain/>} />
        <Route path="/overview/:chain/validator" element={<Validator/>} />
        <Route path="/wallet"/>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default HomeRoutes;
