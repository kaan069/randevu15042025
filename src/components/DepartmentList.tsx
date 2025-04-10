// src/components/DepartmentList.tsx
import { List, ListItem, ListItemText } from "@mui/material";

type Department = {
  id: string;
  name: string;
  availability: string;
};

interface DepartmentListProps {
  departments: Department[];
  onDepartmentClick: (departmentId: string) => void;
}

const DepartmentList = ({ departments, onDepartmentClick }: DepartmentListProps) => {
  return (
    <List>
      {departments.map((department) => (
        <ListItem
          key={department.id}
          divider
          component="button"
          onClick={() => onDepartmentClick(department.id)}
        >
          <ListItemText
            primary={department.name}
            secondary={department.availability === "1" ? "Aktif" : "Pasif"}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default DepartmentList;
