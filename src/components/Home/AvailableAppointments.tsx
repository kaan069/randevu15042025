// src/components/Home/availableAppointment.tsx
import { Button, Typography } from "@mui/material";

const AvailableAppointment = () => {
  return (
    <>
      <Typography variant="h5" component="div" align="center" gutterBottom>
        Müsait Randevu Durumu
      </Typography>
      <Button
        fullWidth
        variant="contained"
        color="success"
        size="large"
        sx={{ marginTop: 2 }}
        onClick={() => console.log("Müsait randevu durumu seçildi")}
      >
        Durumu Kontrol Et
      </Button>
    </>
  );
};

export default AvailableAppointment;
