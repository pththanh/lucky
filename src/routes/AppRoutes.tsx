import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

function AppRoutes() {
  return (
    <Routes>
      {/* <Route element={<MainLayout />}> */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route> */}
    </Routes>
  );
}

export default AppRoutes;
