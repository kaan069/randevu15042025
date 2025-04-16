// src/components/shared/Logo.tsx
import React from "react";
import { Box } from "@mui/material";

const Logo: React.FC = () => {
    return (
        <Box>
            <img
                src="/assets/bizmed-logo.png"
                alt="BizMed Logo"
                style={{
                    maxWidth: 350,
                    height: "auto",
                }}
            />
        </Box>
    );
};

export default Logo;
