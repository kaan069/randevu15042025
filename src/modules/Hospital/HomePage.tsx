import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/shared/Logo";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
      bgcolor="#f9f9f9"
      px={2}
    >

      {/* Butonlar */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        width="100%"
        maxWidth={300}
      >
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ py: 1.5, fontWeight: "bold", fontSize: "1rem" }}
          onClick={() => navigate("/new-appointment")}
        >
          Yeni Randevu Oluştur
        </Button>

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ py: 1.5, fontWeight: "bold", fontSize: "1rem" }}
          onClick={() => navigate("/cancel-appointment")}
        >
          Randevu Sorgula ve İptal Et
        </Button>

        <Button
          variant="contained"
          fullWidth
          sx={{
            py: 1.5,
            fontWeight: "bold",
            fontSize: "1rem",
            backgroundColor: "#2e7d32",
            "&:hover": {
              backgroundColor: "#1b5e20",
            },
          }}
          onClick={() => navigate("/available-appointments")}
        >
          Durumu Kontrol Et
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
