import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDepartments } from "../../state/appointmentState";
import { useAppointmentState } from "../../state/appointmentState";

import SearchableSelect from "../../components/common/SearchableSelect";
import DepartmentList from "../../components/common/DepartmentList";

const SelectDepartmentPage = () => {
  const { hospitalId, branchId } = useParams<{ hospitalId: string; branchId: string }>();
  const navigate = useNavigate();

  const {
    departments, setDepartments,
    selectedDepartment, setSelectedDepartment,
  } = useAppointmentState();

  useEffect(() => {
    const loadDepartments = async () => {
      if (!hospitalId || !branchId) return;

      try {
        const data = await fetchDepartments(hospitalId, branchId);
        setDepartments(data);
      } catch (err) {
        console.error("Departmanlar alınamadı", err);
      }
    };

    loadDepartments();
  }, [hospitalId, branchId, setDepartments]);

  const handleDepartmentSelect = (id: string) => {
    setSelectedDepartment(id);
    navigate(`/select-doctor/${hospitalId}/${branchId}/${id}`);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, px: 2 }}>
      <Button
        variant="outlined"
        onClick={() => navigate(`/select-branch/${hospitalId}`)}
        sx={{ mb: 2 }}
      >
        ← Branşa Geri Dön
      </Button>

      <Typography variant="h5" align="center" gutterBottom>
        Bölüm (Departman) Seçimi
      </Typography>

      {/* Arama */}
      <SearchableSelect
        label="Departman"
        options={departments}
        value={selectedDepartment}
        onChange={handleDepartmentSelect}
      />

      {/* Liste */}
      <Box mt={3}>
        <DepartmentList departments={departments} onSelect={handleDepartmentSelect} />
      </Box>
    </Box>
  );
};

export default SelectDepartmentPage;
