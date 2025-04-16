import { Box, Button, IconButton, Typography } from "@mui/material";
import dayjs from "dayjs";
import 'dayjs/locale/tr';
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

type Props = {
    selected: string;
    onChange: (date: string) => void;
};

const HorizontalDateSelector = ({ selected, onChange }: Props) => {
    const [offset, setOffset] = useState(0); // Kaç gün ileri gösterilecek
    const today = dayjs();

    const visibleDays = Array.from({ length: 5 }, (_, i) =>
        today.add(offset + i, "day")
    );

    const handlePrev = () => setOffset((prev) => Math.max(prev - 5, 0));
    const handleNext = () => setOffset((prev) => prev + 5);

    return (
        <Box display="flex" alignItems="center" gap={2} py={2}>
            {/* Geri Butonu */}
            <IconButton onClick={handlePrev} disabled={offset === 0}>
                <ChevronLeft />
            </IconButton>

            {/* Günler */}
            <Box display="flex" gap={2} overflow="auto">
                {visibleDays.map((day) => {
                    const formatted = day.format("YYYY-MM-DD");
                    const isSelected = formatted === selected;

                    return (
                        <Button
                            key={formatted}
                            variant={isSelected ? "contained" : "outlined"}
                            color={isSelected ? "primary" : "inherit"}
                            onClick={() => onChange(formatted)}
                            sx={{
                                minWidth: 100,
                                borderRadius: 2,
                                flexDirection: "column",
                                textTransform: "none",
                                fontWeight: "bold",
                            }}
                        >
                            <Typography variant="body2">{day.format("dddd")}</Typography>
                            <Typography variant="subtitle2">{day.format("DD.MM")}</Typography>
                        </Button>
                    );
                })}
            </Box>

            {/* İleri Butonu */}
            <IconButton onClick={handleNext}>
                <ChevronRight />
            </IconButton>
        </Box>
    );
};

export default HorizontalDateSelector;
