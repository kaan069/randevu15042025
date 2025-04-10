// src/components/DoctorList.tsx
import { List, ListItem, ListItemText, Button } from "@mui/material";
import { useState } from "react";
import { DatePicker } from "@mui/lab"; // Takvim için Material UI DatePicker
import { Typography, TextField } from "@mui/material"; // Burada gerekli bileşenleri import ettik
import { TextFieldProps } from '@mui/material/TextField';


type Doctor = {
  id: string;
  name: string;
  availability: string;
  deptName: string;
  branchName: string;
};

interface DoctorListProps {
  doctors: Doctor[];
}

const DoctorList = ({ doctors }: DoctorListProps) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDoctorClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor); // Seçilen doktoru state'e kaydediyoruz
    setSelectedDate(null); // Takvimi sıfırlıyoruz
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date); // Seçilen tarihi state'e kaydediyoruz
  };

  return (
    <div>
      <List>
        {doctors.map((doctor) => (
          <ListItem key={doctor.id} divider component="button" onClick={() => handleDoctorClick(doctor)}>
            <ListItemText
              primary={doctor.name}
              secondary={`Bölüm: ${doctor.deptName}, Branş: ${doctor.branchName}`}
            />
          </ListItem>
        ))}
      </List>

      {selectedDoctor && (
        <div>
          <Typography variant="h6" gutterBottom>
            Seçilen Doktor: {selectedDoctor.name}
          </Typography>
          <DatePicker
            label="Randevu Tarihini Seçin"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(props: TextFieldProps) => <TextField {...props} />}
          />
          <Button variant="contained" color="primary">
            Randevu Oluştur
          </Button>
        </div>
      )}
    </div>
  );
};

export default DoctorList;
