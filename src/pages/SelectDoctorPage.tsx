import React, { useEffect } from "react";
import {
    Box,
    Typography,
    Button,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDoctors } from "../state/appointmentState";
import { useAppointmentState } from "../state/appointmentState";

import SearchableSelect from "../components/common/SearchableSelect";
import DoctorList from "../components/common/DoctorList";

const SelectDoctorPage = () => {
    const { hospitalId, branchId, departmentId } = useParams<{
        hospitalId: string;
        branchId: string;
        departmentId: string;
    }>();
    const navigate = useNavigate();

    const {
        doctors, setDoctors,
        selectedDoctor, setSelectedDoctor,
    } = useAppointmentState();

    useEffect(() => {
        const loadDoctors = async () => {
            if (!hospitalId || !branchId || !departmentId) return;

            try {
                const data = await fetchDoctors(hospitalId, branchId, departmentId);
                setDoctors(data);
            } catch (err) {
                console.error("Doktorlar alınamadı", err);
            }
        };

        loadDoctors();
    }, [hospitalId, branchId, departmentId, setDoctors]);

    const handleDoctorSelect = (id: string) => {
        setSelectedDoctor(id);
        navigate(`/select-date/${hospitalId}/${branchId}/${departmentId}/${id}`);
    };

    return (
        <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, px: 2 }}>
            <Button
                variant="outlined"
                onClick={() => navigate(`/select-department/${hospitalId}/${branchId}`)}
                sx={{ mb: 2 }}
            >
                ← Bölüme Geri Dön
            </Button>

            <Typography variant="h5" align="center" gutterBottom>
                Doktor Seçimi
            </Typography>

            {/* Arama */}
            <SearchableSelect
                label="Doktor"
                options={doctors}
                value={selectedDoctor}
                onChange={handleDoctorSelect}
            />

            {/* Liste */}
            <Box mt={3}>
                <DoctorList doctors={doctors} onSelect={handleDoctorSelect} />
            </Box>
        </Box>
    );
};

export default SelectDoctorPage;
