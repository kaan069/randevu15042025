// src/state/appointmentState.ts
import { useState } from "react";
import type {
    Hospital,
    Branch,
    Department,
    Doctor,
} from "../types/appointmentTypes"; // tipleri import ettik

import { getHospitalList } from "../api/soap/SoapGetHospitalList";
import { getBranchList } from "../api/soap/SoapGetBranchList";
import { getDepartmentList } from "../api/soap/SoapGetDepartmentList";
import { getDoctorList } from "../api/soap/SoapGetDoctorList";
import { getEmptySlotsForDoctor } from "../api/soap/SoapGetEmptySlotsForDoctor";

import {
    parseHospitalListXML,
    parseBranchListXML,
    parseDepartmentListXML,
    parseDoctorListXML,
    parseEmptySlotsXML,
} from "../utils/xmlParser";

export const fetchHospitals = async () => {
    const [xml] = await getHospitalList();
    return parseHospitalListXML(xml);
};

export const fetchBranches = async (hospitalId: string) => {
    const [xml] = await getBranchList(hospitalId);
    return parseBranchListXML(xml);
};

export const fetchDepartments = async (hospitalId: string, branchId: string) => {
    const [xml] = await getDepartmentList(hospitalId, branchId);
    return parseDepartmentListXML(xml);
};

export const fetchDoctors = async (
    hospitalId: string,
    branchId: string,
    departmentId: string
) => {
    const [xml] = await getDoctorList(hospitalId, branchId, departmentId);
    return parseDoctorListXML(xml);
};

export const fetchEmptySlots = async (
    hospitalId: string,
    departmentId: string,
    doctorId: string,
    startTime: string,
    endTime: string,
    date: string
): Promise<boolean> => {
    const [xml] = await getEmptySlotsForDoctor(
        hospitalId,
        departmentId,
        doctorId,
        startTime,
        endTime
    );
    return parseEmptySlotsXML(xml, date);
};
export const useAppointmentState = () => {
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
    const [branches, setBranches] = useState<Branch[]>([]);
    const [departments, setDepartments] = useState<Department[]>([]);
    const [doctors, setDoctors] = useState<Doctor[]>([]);

    const [selectedHospital, setSelectedHospital] = useState<string>("");
    const [selectedBranch, setSelectedBranch] = useState<string>("");
    const [selectedDepartment, setSelectedDepartment] = useState<string>("");
    const [selectedDoctor, setSelectedDoctor] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState<string>("");

    const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showSummaryModal, setShowSummaryModal] = useState(false);

    const [appointmentInfo, setAppointmentInfo] = useState<{
        hospital: string;
        branch: string;
        department: string;
        doctor: string;
        date: string;
    }>({
        hospital: "",
        branch: "",
        department: "",
        doctor: "",
        date: "",
    });

    return {
        hospitals, setHospitals,
        branches, setBranches,
        departments, setDepartments,
        doctors, setDoctors,

        selectedHospital, setSelectedHospital,
        selectedBranch, setSelectedBranch,
        selectedDepartment, setSelectedDepartment,
        selectedDoctor, setSelectedDoctor,
        selectedDate, setSelectedDate,

        isAvailable, setIsAvailable,
        showSuccess, setShowSuccess,
        showSummaryModal, setShowSummaryModal,
        appointmentInfo, setAppointmentInfo,
    };

};
