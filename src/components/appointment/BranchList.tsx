// src/components/BranchList.tsx
import { List, ListItem, ListItemText } from "@mui/material";

type Branch = {
  id: string;
  name: string;
  availability: string;
};

interface BranchListProps {
  branches: Branch[];
  onBranchClick: (branchId: string) => void;
}

const BranchList = ({ branches, onBranchClick }: BranchListProps) => {
  return (
    <List>
      {branches.map((branch) => (
        <ListItem
          key={branch.id}
          divider
          component="button"
          onClick={() => onBranchClick(branch.id)}
        >
          <ListItemText
            primary={branch.name}
            secondary={branch.availability === "1" ? "Aktif" : "Pasif"}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default BranchList;
