import React from "react";
import {
    List,
    ListItem,
    ListItemButton,
    Card,
    CardContent,
    Typography,
} from "@mui/material";
import type { Hospital } from "../../types/appointmentTypes";

interface Props {
    hospitals: Hospital[];
    onSelect: (id: string) => void;
}

const HospitalList: React.FC<Props> = ({ hospitals, onSelect }) => {
    return (
        <List>
            {hospitals.map((hospital) => (
                <ListItem key={hospital.id} disablePadding sx={{ mb: 2 }}>
                    <Card variant="outlined" sx={{ width: "100%" }}>
                        <ListItemButton onClick={() => onSelect(hospital.id)}>
                            <CardContent>
                                <Typography variant="subtitle1" fontWeight={600}>
                                    {hospital.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: {hospital.id}
                                </Typography>
                            </CardContent>
                        </ListItemButton>
                    </Card>
                </ListItem>
            ))}
        </List>
    );
};

export default HospitalList;
