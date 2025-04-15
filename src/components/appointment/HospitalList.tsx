// src/components/HospitalList.tsx
import { List, ListItem, ListItemText } from "@mui/material";

type Hospital = {
  id: string;
  name: string;
  availability: string;
};

interface HospitalListProps {
  hospitals: Hospital[];
  onHospitalClick: (hospitalId: string) => void;
}

const HospitalList = ({ hospitals, onHospitalClick }: HospitalListProps) => {
  return (
    <List>
      {hospitals.map((hospital) => (
        <ListItem
          key={hospital.id}
          divider
          component="button"
          onClick={() => onHospitalClick(hospital.id)}
        >
          <ListItemText
            primary={hospital.name}
            secondary={hospital.availability === "1" ? "Aktif" : "Pasif"}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default HospitalList;
