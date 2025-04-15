import React from "react";
import {
    Autocomplete,
    TextField,
    Box,
    Typography,
} from "@mui/material";

interface Option {
    id: string;
    name: string;
    [key: string]: any; // ekstra alanlar için
}

interface Props {
    label: string;
    options: Option[];
    value: string;
    onChange: (id: string) => void;
}

const SearchableSelect: React.FC<Props> = ({
    label,
    options,
    value,
    onChange,
}) => {
    const selectedOption = options.find((opt) => opt.id === value) || null;

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                {label}
            </Typography>

            <Autocomplete
                options={options}
                getOptionLabel={(option) => option.name}
                value={selectedOption}
                onChange={(event, newValue) => {
                    onChange(newValue?.id || "");
                }}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={`${label} Ara`}
                        placeholder="Yazmaya başlayın..."
                        fullWidth
                    />
                )}
            />
        </Box>
    );
};

export default SearchableSelect;
