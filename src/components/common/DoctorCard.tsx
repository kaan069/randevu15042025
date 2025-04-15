import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

type Props = {
    name: string;
    branch: string;
    department: string;
    imageUrl?: string; // doktor görseli gelirse burada gösterilecek
};

const DoctorCard: React.FC<Props> = ({ name, branch, department, imageUrl }) => {
    return (
        <Card sx={{ display: "flex", alignItems: "center", p: 2, mb: 2 }}>
            <Avatar
                alt={name}
                src={imageUrl || ""}
                sx={{ width: 64, height: 64, mr: 2 }}
            >
                {name[0]}
            </Avatar>

            <CardContent sx={{ p: 0 }}>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {branch} - {department}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default DoctorCard;
