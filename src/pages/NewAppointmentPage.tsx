import React, { useEffect } from "react";
import {
    Box,
    Typography,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import {
    fetchHospitals,
    fetchBranches,
} from "../state/appointmentState";

import { useAppointmentState } from "../state/appointmentState";
import SearchableSelect from "../components/common/SearchableSelect";
import HospitalList from "../components/common/HospitalList";

const NewAppointmentPage = () => {
    const navigate = useNavigate();

    const {
        hospitals, setHospitals,
        setBranches,
        selectedHospital, setSelectedHospital,
        setSelectedBranch,
    } = useAppointmentState();

    useEffect(() => {
        const loadHospitals = async () => {
            try {
                const data = await fetchHospitals();
                setHospitals(data);
            } catch (err) {
                console.error("Hastaneler alınamadı", err);
            }
        };

        loadHospitals();
    }, [setHospitals]);

    const handleHospitalSelect = async (id: string) => {
        setSelectedHospital(id);
        setSelectedBranch("");

        try {
            const data = await fetchBranches(id);
            setBranches(data);
            navigate(`/select-branch/${id}`);
        } catch (err) {
            console.error("Branşlar alınamadı", err);
        }
    };

    return (
        <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, px: 2 }}>
            <Button
                variant="outlined"
                color="secondary"
                onClick={() => navigate("/home")}
                sx={{ mb: 2 }}
            >
                ← Ana Sayfaya Dön
            </Button>

            <Typography variant="h4" align="center" gutterBottom>
                Yeni Randevu Oluştur
            </Typography>

            {/* Autocomplete ile arama */}
            <SearchableSelect
                label="Şube"
                options={hospitals}
                value={selectedHospital}
                onChange={handleHospitalSelect}
            />

            {/* Liste olarak gösterim */}
            <Box mt={3}>
                <HospitalList hospitals={hospitals} onSelect={handleHospitalSelect} />
            </Box>
        </Box>
    );
};

export default NewAppointmentPage;
