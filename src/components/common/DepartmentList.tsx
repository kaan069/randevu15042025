import React from "react";
import {
    List,
    ListItem,
    ListItemButton,
    Card,
    CardContent,
    Typography,
} from "@mui/material";
import type { Department } from "../../types/appointmentTypes";

interface Props {
    departments: Department[];
    onSelect: (id: string) => void;
}

const DepartmentList: React.FC<Props> = ({ departments, onSelect }) => {
    return (
        <List>
            {departments.map((department) => (
                <ListItem key={department.id} disablePadding sx={{ mb: 2 }}>
                    <Card sx={{ width: "100%" }}>
                        <ListItemButton onClick={() => onSelect(department.id)}>
                            <CardContent>
                                <Typography variant="subtitle1" fontWeight={600}>
                                    {department.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: {department.id}
                                </Typography>
                            </CardContent>
                        </ListItemButton>
                    </Card>
                </ListItem>
            ))}
        </List>
    );
};

export default DepartmentList;
