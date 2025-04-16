import React, { useEffect } from "react";
import {
    Box,
    Typography,
    Button,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBranches } from "../../state/appointmentState";
import { useAppointmentState } from "../../state/appointmentState";

import SearchableSelect from "../../components/common/SearchableSelect";
import BranchList from "../../components/common/BranchList";

const SelectBranchPage = () => {
    const { hospitalId } = useParams<{ hospitalId: string }>();
    const navigate = useNavigate();

    const {
        branches, setBranches,
        selectedBranch, setSelectedBranch,
    } = useAppointmentState();

    useEffect(() => {
        const loadBranches = async () => {
            if (!hospitalId) return;

            try {
                const data = await fetchBranches(hospitalId);
                setBranches(data);
            } catch (err) {
                console.error("Branşlar alınamadı", err);
            }
        };

        loadBranches();
    }, [hospitalId, setBranches]);

    const handleBranchSelect = (id: string) => {
        setSelectedBranch(id);
        navigate(`/select-department/${hospitalId}/${id}`);
    };

    return (
        <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, px: 2 }}>
            <Button
                variant="outlined"
                onClick={() => navigate("/new-appointment")}
                sx={{ mb: 2 }}
            >
                ← Şubeye Geri Dön
            </Button>

            <Typography variant="h5" align="center" gutterBottom>
                Branş Seçimi
            </Typography>

            {/* 🔍 Arama */}
            <SearchableSelect
                label="Branş"
                options={branches}
                value={selectedBranch}
                onChange={handleBranchSelect}
            />

            {/* 📋 Liste */}
            <Box mt={3}>
                <BranchList branches={branches} onSelect={handleBranchSelect} />
            </Box>
        </Box>
    );
};

export default SelectBranchPage;
