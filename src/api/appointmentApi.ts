// src/api/appointmentApi.ts
import { getHospitalList } from "../api/soap/SoapGetHospitalList";
import { getBranchList } from "../api/soap/SoapGetBranchList";
import { getDepartmentList } from "../api/soap/SoapGetDepartmentList";
import { getDoctorList } from "../api/soap/SoapGetDoctorList";

// API fonksiyonlarını burada toplayın
export const fetchHospitals = async () => {
  const hospitals = await getHospitalList();
  return hospitals;
};

export const fetchBranches = async (hospitalId: string) => {
  const branches = await getBranchList(hospitalId);
  return branches;
};

export const fetchDepartments = async (hospitalId: string, branchId: string) => {
  const departments = await getDepartmentList(hospitalId, branchId);
  return departments;
};

export const fetchDoctors = async (hospitalId: string, branchId: string, departmentId: string) => {
  const doctors = await getDoctorList(hospitalId, branchId, departmentId);
  return doctors;
};
