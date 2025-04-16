// src/components/ui/SelectableDateCalendar.tsx
import React from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Dayjs } from "dayjs";

interface Props {
    selectedDate: Dayjs | null;
    onChange: (date: Dayjs | null) => void;
}

const SelectableDateCalendar: React.FC<Props> = ({ selectedDate, onChange }) => {
    return (
        <DateCalendar
            value={selectedDate}
            onChange={onChange}
            disablePast
            sx={{
                bgcolor: "#fff",
                borderRadius: 2,
                boxShadow: 1,
                p: 1,
            }}
        />
    );
};

export default SelectableDateCalendar;
