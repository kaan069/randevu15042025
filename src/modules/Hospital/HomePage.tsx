import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} sm={6} md={4} component="div">
        <Card sx={{ maxWidth: "100%", boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" component="div" align="center" gutterBottom>
              Yeni Randevu
            </Typography>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{ marginTop: 2 }}
              onClick={() => console.log("Yeni randevu seçildi")}
            >
              Randevu Oluştur
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} component="div">
        <Card sx={{ maxWidth: "100%", boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" component="div" align="center" gutterBottom>
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
              Randevu Sorgula
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} component="div">
        <Card sx={{ maxWidth: "100%", boxShadow: 3 }}>
          <CardContent>
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
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomePage;
