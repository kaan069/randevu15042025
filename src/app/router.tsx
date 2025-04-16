import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

import MainLayout from "../layout/MainLayout";
import Home from "../modules/Hospital/Home";
import NewAppointmentPage from "../pages/newAppointment/NewAppointmentPage";
import AppointmentCancellationPage from "../pages/appointmentCancellation/AppointmentCancellationPage";
import AvailableAppoimentPage from "../pages/availableAppointment/AvailableAppoimentPage";
import SelectBranchPage from "../pages/newAppointment/SelectBranchPage";
import SelectDepartmentPage from "../pages/newAppointment/SelectDepartmentPage";
import SelectDoctorPage from "../pages/newAppointment/SelectDoctorPage";
import SelectDatePage from "../pages/newAppointment/SelectDatePage";
import Denemechackmodal from "../components/forms/IdentityCheck";

const AppRouter = () => (
  <BrowserRouter>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/new-appointment" element={<MainLayout><NewAppointmentPage /></MainLayout>} />
        <Route path="/cancel-appointment" element={<MainLayout><AppointmentCancellationPage /></MainLayout>} />
        <Route path="/available-appointments" element={<MainLayout><AvailableAppoimentPage /></MainLayout>} />
        <Route path="/select-branch/:hospitalId" element={<MainLayout><SelectBranchPage /></MainLayout>} />
        <Route path="/select-department/:hospitalId/:branchId" element={<MainLayout><SelectDepartmentPage /></MainLayout>} />
        <Route path="/select-doctor/:hospitalId/:branchId/:departmentId" element={<MainLayout><SelectDoctorPage /></MainLayout>} />
        <Route path="/select-date/:hospitalId/:branchId/:departmentId/:doctorId" element={<MainLayout><SelectDatePage /></MainLayout>} />
        <Route path="/form" element={<MainLayout><Denemechackmodal /></MainLayout>} />
      </Routes>
    </LocalizationProvider>
  </BrowserRouter>
);

export default AppRouter;
