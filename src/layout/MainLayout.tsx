import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Logo from "../components/shared/Logo";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh", // sayfa yüksekliği minimum ekran kadar olsun
            }}
        >
            {/* Üst Logo Alanı */}
            <Box sx={{ bgcolor: "#f5f5f5", py: 2, px: 4 }}>
                <Logo />
            </Box>

            {/* Sayfa İçeriği */}
            <Container sx={{ mt: 4, flexGrow: 1 }}>
                {children}
            </Container>

            {/* Footer */}
            <Box sx={{ bgcolor: "#eee", py: 2 }}>
                <Typography align="center" variant="body2">
                    © {new Date().getFullYear()} BizMed Randevu Sistemi
                </Typography>
            </Box>
        </Box>
    );
};

export default MainLayout;
