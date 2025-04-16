import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NewAppointmentPage from "../../pages/newAppointment/NewAppointmentPage";
import AvailableAppointmentPage from "../../pages/availableAppointment/AvailableAppoimentPage";
import AppointmentCancellationPage from "../../pages/appointmentCancellation/AppointmentCancellationPage";

const HomePage = () => {
  const [activeComponent] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <Box>

      {/* Ana Başlık */}
      <Typography variant="h4" align="center" gutterBottom>
        Yeni Randevu Oluştur
      </Typography>

      {/* Butonlar */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/new-appointment")}
        >
          Yeni Randevu Oluştur
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/cancel-appointment")}
        >
          Randevu Sorgula ve İptal Et
        </Button>

        <Button
          variant="contained"
          sx={{ backgroundColor: "green", ":hover": { backgroundColor: "#2e7d32" } }}
          onClick={() => navigate("/available-appointments")}
        >
          Durumu Kontrol Et
        </Button>
      </Box>

      {/* Tıklanan Component */}
      <Box sx={{ mt: 5 }}>
        {activeComponent === "new" && <NewAppointmentPage />}
        {activeComponent === "cancel" && <AppointmentCancellationPage />}
        {activeComponent === "available" && <AvailableAppointmentPage />}
      </Box>
    </Box>
  );
};

export default HomePage;
