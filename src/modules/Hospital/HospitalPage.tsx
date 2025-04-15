// src/pages/HospitalPage.tsx
import { useState, useEffect } from "react";
import HospitalList from "../../components/appointment/HospitalList";
import BranchList from "../../components/appointment/BranchList";
import DepartmentList from "../../components/appointment/DepartmentList";
import DoctorList from "../../components/appointment/DoctorList";
import AppointmentForm from "../../components/appointment/AppointmentForm";
import { getHospitalList } from "../../api/soap/SoapGetHospitalList";
import { getBranchList } from "../../api/soap/SoapGetBranchList";
import { getDepartmentList } from "../../api/soap/SoapGetDepartmentList";
import { getDoctorList } from "../../api/soap/SoapGetDoctorList";
import { parseHospitalListXML, parseBranchListXML, parseDepartmentListXML, parseDoctorListXML } from "../../utils/xmlParser";


type Hospital = {
  id: string;
  name: string;
  availability: string;
};

type Branch = {
  id: string;
  name: string;
  availability: string;
};

type Department = {
  id: string;
  name: string;
  availability: string;
};
type Doctor = {
  id: string;
  name: string;
  availability: string;
  deptName: string;
  branchName: string
};

const HospitalPage = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const [selectedHospitalId, setSelectedHospitalId] = useState<string | null>(null);
  const [selectedBranchId, setSelectedBranchId] = useState<string | null>(null);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<string | null>(null);

  useEffect(() => {
    const fetchHospitals = async () => {
      const [xml] = await getHospitalList();
      const parsed = parseHospitalListXML(xml);
      setHospitals(parsed);
    };

    fetchHospitals();
  }, []);

  const handleHospitalClick = async (hospitalId: string) => {
    setSelectedHospitalId(hospitalId);
    const [xml] = await getBranchList(hospitalId);
    const parsed = parseBranchListXML(xml);
    setBranches(parsed);
  };

  const handleBranchClick = async (branchId: string) => {
    setSelectedBranchId(branchId);
    const [xml] = await getDepartmentList(selectedHospitalId!, branchId);
    const parsed = parseDepartmentListXML(xml);
    setDepartments(parsed);
  };

  const handleDepartmentClick = async (selectedDepartmentId: string) => {
    setSelectedDepartmentId(selectedDepartmentId);
    const [xml] = await getDoctorList(selectedHospitalId!, selectedBranchId!, selectedDepartmentId);
    const parsed = parseDoctorListXML(xml);
    setDoctors(parsed);
  };

  const handleAppointmentSubmit = (hospitalId: string, branchId: string, selectedDepartmentId: string, selectedDate: string) => {
    console.log("Randevu verileri:", { hospitalId, branchId, selectedDepartmentId, selectedDate });
    // Backend'e gönderme işlemi yapılacak
  };

  return (
    <div>
      <HospitalList hospitals={hospitals} onHospitalClick={handleHospitalClick} />
      {branches.length > 0 && <BranchList branches={branches} onBranchClick={handleBranchClick} />}
      {departments.length > 0 && <DepartmentList departments={departments} onDepartmentClick={handleDepartmentClick} />}
      {doctors.length > 0 && <DoctorList doctors={doctors} />}
      <AppointmentForm onSubmit={handleAppointmentSubmit} />
    </div>
  );
};

export default HospitalPage;
