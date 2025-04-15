import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HospitalPage from "../modules/Hospital/HospitalPage";
import Home from "../modules/Hospital/Home";
import NewAppointmentPage from "../pages/NewAppointmentPage";
import AppointmentCancellationPage from "../pages/AppointmentCancellationPage";
import AvailableAppoimentPage from "../pages/AvailableAppoimentPage";
import SelectBranchPage from "../pages/SelectBranchPage";
import SelectDepartmentPage from "../pages/SelectDepartmentPage";
import SelectDoctorPage from "../pages/SelectDoctorPage";
import SelectDatePage from "../pages/SelectDatePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HospitalPage />
            </MainLayout>
          }
        />
        <Route
          path="/home"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/new-appointment"
          element={
            <MainLayout>
              <NewAppointmentPage />
            </MainLayout>
          }
        />
        <Route
          path="/cancel-appointment"
          element={
            <MainLayout>
              <AppointmentCancellationPage />
            </MainLayout>
          } />
        <Route
          path="/available-appointments"
          element={
            <MainLayout>
              <AvailableAppoimentPage />
            </MainLayout>
          } />
        <Route
          path="/select-branch/:hospitalId"
          element={
            <MainLayout>
              <SelectBranchPage />
            </MainLayout>
          } />

        <Route
          path="/select-department/:hospitalId/:branchId"
          element={
            <MainLayout>
              <SelectDepartmentPage />
            </MainLayout>
          }
        />
        <Route
          path="/select-doctor/:hospitalId/:branchId/:departmentId"
          element={
            <MainLayout>
              <SelectDoctorPage />
            </MainLayout>
          } />
        <Route
          path="/select-date/:hospitalId/:branchId/:departmentId/:doctorId"
          element={
            <MainLayout>
              <SelectDatePage />
            </MainLayout>
          } />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
