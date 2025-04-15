// src/components/Home/AppointmentCancellation.tsx
import { Button, Typography } from "@mui/material";

const AppointmentCancellation = () => {
  return (
    <>
      <Typography variant="h5" component="div" align="center" noWrap>
        Randevu Sorgulama ve İptal
      </Typography>
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        size="large"
        sx={{ marginTop: 2 }}
        onClick={() => console.log("Randevu sorgulama ve iptal seçildi")}
      >
        Randevu Sorgula ve İptal Et
      </Button>
    </>
  );
};

export default AppointmentCancellation;
