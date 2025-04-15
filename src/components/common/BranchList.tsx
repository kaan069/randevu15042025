import React from "react";
import {
    List,
    ListItem,
    ListItemButton,
    Card,
    CardContent,
    Typography,
} from "@mui/material";
import type { Branch } from "../../types/appointmentTypes";

interface Props {
    branches: Branch[];
    onSelect: (id: string) => void;
}

const BranchList: React.FC<Props> = ({ branches, onSelect }) => {
    return (
        <List>
            {branches.map((branch) => (
                <ListItem key={branch.id} disablePadding sx={{ mb: 2 }}>
                    <Card sx={{ width: "100%" }}>
                        <ListItemButton onClick={() => onSelect(branch.id)}>
                            <CardContent>
                                <Typography variant="subtitle1" fontWeight={600}>
                                    {branch.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: {branch.id}
                                </Typography>
                            </CardContent>
                        </ListItemButton>
                    </Card>
                </ListItem>
            ))}
        </List>
    );
};

export default BranchList;
