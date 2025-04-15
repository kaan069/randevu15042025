// src/components/Home/NewAppointmentModal.tsx
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

interface AppointmentModalProps {
  open: boolean;
  handleClose: () => void;
  appointmentData: {
    hospital: string;
    branch: string;
    department: string;
    doctor: string;
    date: string;
  };
}

const NewAppointmentModal: React.FC<AppointmentModalProps> = ({
  open,
  handleClose,
  appointmentData,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ width: 400, padding: 2, margin: "auto", marginTop: "100px", bgcolor: "white" }}>
        <Typography variant="h6" component="div" gutterBottom>
          Randevu Detayları
        </Typography>

        <Typography variant="body1" gutterBottom>
          <strong>Hastane:</strong> {appointmentData.hospital}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Şube:</strong> {appointmentData.branch}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Bölüm:</strong> {appointmentData.department}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Doktor:</strong> {appointmentData.doctor}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Tarih:</strong> {appointmentData.date}
        </Typography>

        <Button variant="contained" color="primary" fullWidth onClick={handleClose}>
          Kapat
        </Button>
      </Box>
    </Modal>
  );
};

export default NewAppointmentModal;
