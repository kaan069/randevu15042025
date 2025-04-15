import React from "react";
import {
    List,
    ListItem,
    ListItemButton,
    Card,
    CardContent,
    Typography,
} from "@mui/material";
import type { Doctor } from "../../types/appointmentTypes";

interface Props {
    doctors: Doctor[];
    onSelect: (id: string) => void;
}

const DoctorList: React.FC<Props> = ({ doctors, onSelect }) => {
    return (
        <List>
            {doctors.map((doctor) => (
                <ListItem key={doctor.id} disablePadding sx={{ mb: 2 }}>
                    <Card sx={{ width: "100%" }}>
                        <ListItemButton onClick={() => onSelect(doctor.id)}>
                            <CardContent>
                                <Typography variant="subtitle1" fontWeight={600}>
                                    {doctor.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Bölüm: {doctor.deptName} - Şube: {doctor.branchName}
                                </Typography>
                            </CardContent>
                        </ListItemButton>
                    </Card>
                </ListItem>
            ))}
        </List>
    );
};

export default DoctorList;
