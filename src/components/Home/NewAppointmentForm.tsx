import React from "react";
import {
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Button,
    Alert,
    Paper,
} from "@mui/material";

interface Props {
    hospitals: any[];
    branches: any[];
    departments: any[];
    doctors: any[];
    selectedHospital: string;
    selectedBranch: string;
    selectedDepartment: string;
    selectedDoctor: string;
    selectedDate: string;
    isAvailable: boolean | null;
    onHospitalChange: (e: any) => void;
    onBranchChange: (e: any) => void;
    onDepartmentChange: (e: any) => void;
    onDoctorChange: (e: any) => void;
    onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
}

const NewAppointmentForm: React.FC<Props> = ({
    hospitals,
    branches,
    departments,
    doctors,
    selectedHospital,
    selectedBranch,
    selectedDepartment,
    selectedDoctor,
    selectedDate,
    isAvailable,
    onHospitalChange,
    onBranchChange,
    onDepartmentChange,
    onDoctorChange,
    onDateChange,
    onSubmit,
}) => {
    return (
        <Paper
            elevation={4}
            sx={{
                maxWidth: 500,
                mx: "auto",
                my: 5,
                px: 4,
                py: 5,
                borderRadius: 3,
                backgroundColor: "#fafafa",
            }}
        >
            <Typography variant="h5" align="center" gutterBottom>
                🩺 Yeni Randevu Oluştur
            </Typography>

            <Typography variant="subtitle2" sx={{ mb: 2 }} align="center" color="text.secondary">
                Lütfen gerekli alanları eksiksiz doldurun
            </Typography>

            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Şube</InputLabel>
                <Select value={selectedHospital} onChange={onHospitalChange} label="Şube">
                    {hospitals.map((hospital) => (
                        <MenuItem key={hospital.id} value={hospital.id}>
                            {hospital.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Branş</InputLabel>
                <Select
                    value={selectedBranch}
                    onChange={onBranchChange}
                    label="Branş"
                    disabled={!selectedHospital}
                >
                    {branches.map((branch) => (
                        <MenuItem key={branch.id} value={branch.id}>
                            {branch.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Bölüm</InputLabel>
                <Select
                    value={selectedDepartment}
                    onChange={onDepartmentChange}
                    label="Bölüm"
                    disabled={!selectedBranch}
                >
                    {departments.map((department) => (
                        <MenuItem key={department.id} value={department.id}>
                            {department.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Doktor</InputLabel>
                <Select
                    value={selectedDoctor}
                    onChange={onDoctorChange}
                    label="Doktor"
                    disabled={!selectedDepartment}
                >
                    {doctors.map((doctor) => (
                        <MenuItem key={doctor.id} value={doctor.id}>
                            {doctor.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                label="Randevu Tarihi"
                type="date"
                fullWidth
                sx={{ marginBottom: 3 }}
                value={selectedDate}
                onChange={onDateChange}
                InputLabelProps={{ shrink: true }}
            />

            {isAvailable !== null && (
                <Alert
                    severity={isAvailable ? "success" : "warning"}
                    sx={{ mb: 2 }}
                >
                    {isAvailable
                        ? "Bu tarihte randevu alınabilir."
                        : "Bu tarihte doktorun uygunluğu bulunmamaktadır."}
                </Alert>
            )}

            <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ mt: 1, textTransform: "none", fontWeight: "bold" }}
                onClick={onSubmit}
            >
                Randevu Oluştur
            </Button>
        </Paper>
    );
};

export default NewAppointmentForm;
