// src/hooks/useAppointment.ts
import { useState, useEffect } from "react";
import { fetchHospitals, fetchBranches, fetchDepartments, fetchDoctors } from "../api/appointmentApi";


export const useAppointment = () => {
  const [hospitals, setHospitals] = useState([]);
  const [branches, setBranches] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const fetchHospitalsData = async () => {
      const [hospitalsData] = await fetchHospitals();
      setHospitals(hospitalsData);
    };
    fetchHospitalsData();
  }, []);

  const handleHospitalChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedHospital(event.target.value as string);
    const [branchesData] = await fetchBranches(event.target.value as string);
    setBranches(branchesData);
  };

  const handleBranchChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedBranch(event.target.value as string);
    const [departmentsData] = await fetchDepartments(selectedHospital, event.target.value as string);
    setDepartments(departmentsData);
  };

  const handleDepartmentChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedDepartment(event.target.value as string);
    const [doctorsData] = await fetchDoctors(selectedHospital, selectedBranch, event.target.value as string);
    setDoctors(doctorsData);
  };

  return {
    hospitals,
    branches,
    departments,
    doctors,
    selectedHospital,
    selectedBranch,
    selectedDepartment,
    selectedDoctor,
    selectedDate,
    setSelectedDoctor,
    setSelectedDate,
    handleHospitalChange,
    handleBranchChange,
    handleDepartmentChange,
  };
};
