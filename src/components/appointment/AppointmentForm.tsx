// src/components/AppointmentForm.tsx
import { TextField, Button, Container } from "@mui/material";
import React, { useState } from "react";
interface AppointmentFormProps {
  onSubmit: (hospitalId: string, branchId: string, departmentId: string, selectedDate: string) => void;
}

const AppointmentForm = ({ onSubmit }: AppointmentFormProps) => {
  const [hospitalId, setHospitalId] = useState<string | null>(null);
  const [branchId, setBranchId] = useState<string | null>(null);
  const [departmentId, setDepartmentId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleSubmit = () => {
    if (hospitalId && branchId && departmentId && selectedDate) {
      onSubmit(hospitalId, branchId, departmentId, selectedDate);
    }
  };

  return (
    <Container>
      <TextField
        label="Hastane ID"
        value={hospitalId || ""}
        onChange={(e) => setHospitalId(e.target.value)}
      />
      <TextField
        label="Branş ID"
        value={branchId || ""}
        onChange={(e) => setBranchId(e.target.value)}
      />
      <TextField
        label="Bölüm ID"
        value={departmentId || ""}
        onChange={(e) => setDepartmentId(e.target.value)}
      />
      <TextField
        label="Tarih"
        value={selectedDate || ""}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <Button onClick={handleSubmit}>Randevu Oluştur</Button>
    </Container>
  );
};

export default AppointmentForm;
