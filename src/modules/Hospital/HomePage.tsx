import React, { useState } from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
//import NewAppointment from "../../components/Home/NewAppointment";
import AppointmentCancellation from "../../components/Home/AppointmentCancellation";
import { useNavigate } from "react-router-dom";
import NewAppointmentPage from "../../pages/NewAppointmentPage";
import AvailableAppointmentPage from "../../pages/AvailableAppoimentPage";

const HomePage = () => {
  const [activeComponent] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <Box>
      {/* Logo */}
      <Grid container justifyContent="center" alignItems="center" direction="column" sx={{ marginBottom: 3 }}>
        <img src="/logo512.png" alt="Logo" style={{ maxWidth: "50px" }} />
      </Grid>

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
        {activeComponent === "cancel" && <AppointmentCancellation />}
        {activeComponent === "available" && <AvailableAppointmentPage />}
      </Box>
    </Box>
  );
};

export default HomePage;
