import { BrowserRouter, Routes, Route } from "react-router-dom";
//import HomePage from "../modules/Home/HomePage";
import HospitalPage from "../modules/Hospital/HospitalPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HospitalPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
