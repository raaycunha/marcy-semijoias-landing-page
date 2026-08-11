import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Terms from "../pages/Terms";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
