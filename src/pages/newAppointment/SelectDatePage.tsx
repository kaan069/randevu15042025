// src/pages/appointment/SelectDatePage.tsx
import { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Button,
    Snackbar,
    Alert,
} from "@mui/material";
import { Grid } from "@mui/material"; // ✅ doğru bu

import { useParams, useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import { fetchEmptySlots } from "../../state/appointmentState";
import { fetchDoctors } from "../../state/appointmentState";
import { useAppointmentState } from "../../state/appointmentState";
import DoctorCard from "../../components/common/DoctorCard";
import NewAppointmentModal from "../../components/modals/NewAppointmentModal";
import SelectableDateCalendar from "../../components/ui/SelectableDateCalendar";
import HorizontalDateSelector from "../../components/ui/HorizontalDateSelector";

const SelectDatePage = () => {
    const { hospitalId, branchId, departmentId, doctorId } = useParams<{
        hospitalId: string;
        branchId: string;
        departmentId: string;
        doctorId: string;
    }>();

    const navigate = useNavigate();

    const {
        doctors,
        setSelectedDate,
        setAppointmentInfo,
        showSummaryModal,
        setShowSummaryModal,
        setDoctors
    } = useAppointmentState();

    const [selectedDay, setSelectedDay] = useState<Dayjs | null>(dayjs());
    const [timeSlots, setTimeSlots] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // 💥 Doktor ID'yi int'e çeviriyoruz
    const selectedDoctor = doctors.find((doc) => doc.id === doctorId);


    const handleDateChange = (newDate: Dayjs | null) => {
        setSelectedDay(newDate);
    };
    useEffect(() => {
        const loadDoctors = async () => {
            if (!hospitalId || !branchId || !departmentId) return;

            try {
                const doctorsList = await fetchDoctors(hospitalId, branchId, departmentId);
                setDoctors(doctorsList);
            } catch (err) {
                console.error("Doktorlar yüklenemedi:", err);
            }
        };

        loadDoctors();
    }, [hospitalId, branchId, departmentId, setDoctors]);
    console.log("selectedDoctor:", selectedDoctor);

    useEffect(() => {
        const loadSlots = async () => {
            if (!selectedDay || !hospitalId || !departmentId || !doctorId) return;

            setLoading(true);
            try {
                const dateStr = selectedDay.format("YYYY-MM-DD");
                const startTime = `${dateStr}T00:00:00`;
                const endTime = `${dateStr}T23:59:59`;

                const availableSlots = await fetchEmptySlots(
                    hospitalId,
                    departmentId,
                    doctorId,
                    startTime,
                    endTime,
                    dateStr
                );

                if (Array.isArray(availableSlots)) {
                    setTimeSlots(availableSlots);
                } else {
                    setTimeSlots([]);
                }
            } catch (err) {
                console.error("Saat dilimleri alınamadı:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        loadSlots();
    }, [selectedDay, hospitalId, departmentId, doctorId]);

    const handleSelectTime = (time: string) => {
        setSelectedDate(time);

        setAppointmentInfo({
            hospital: hospitalId || "",
            branch: branchId || "",
            department: departmentId || "",
            doctor: doctorId || "",
            date: time,
        });

        setShowSummaryModal(true);
    };
    console.log("URL doctorId:", doctorId);
    console.log("State doctors:", doctors);

    return (
        <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, px: 2 }}>
            <Button
                variant="outlined"
                onClick={() =>
                    navigate(`/select-doctor/${hospitalId}/${branchId}/${departmentId}`)
                }
                sx={{ mb: 2 }}
            >
                ← Doktora Geri Dön
            </Button>

            {/* ✅ Doktor Kartı */}
            {selectedDoctor && (
                <DoctorCard
                    name={selectedDoctor.name}
                    branch={selectedDoctor.branchName}
                    department={selectedDoctor.deptName}
                    imageUrl={selectedDoctor.imageUrl || ""}
                />
            )}

            <Typography variant="h6" gutterBottom mt={4}>
                Randevu Tarihi Seç
            </Typography>

            <HorizontalDateSelector
                selected={selectedDay?.format("YYYY-MM-DD") || ""}
                onChange={(dateStr) => setSelectedDay(dayjs(dateStr))}
            />

            <Typography variant="h6" gutterBottom mt={4}>
                Saat Seç
            </Typography>

            {loading ? (
                <Typography>Yükleniyor...</Typography>
            ) : timeSlots.length === 0 ? (
                <Typography>Bu tarihte uygun saat bulunamadı.</Typography>
            ) : (
                <Grid container spacing={1}>
                    {timeSlots.map((slot, i) => {
                        const timePart = slot?.split("T")[1];
                        const displayHour = timePart ? timePart.slice(0, 5) : "--:--";

                        return (
                            <Grid
                                size={{
                                    xs: 6,
                                    sm: 4,
                                    md: 3
                                }}

                                key={i}
                                sx={{ mb: 2 }}
                            >
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        py: 1.2,
                                        borderRadius: 2,
                                        fontWeight: "bold",
                                        fontSize: "1rem",
                                    }}
                                    onClick={() => handleSelectTime(slot)}
                                >
                                    {displayHour}
                                </Button>
                            </Grid>
                        );
                    })}
                </Grid>
            )}

            <NewAppointmentModal
                open={showSummaryModal}
                handleClose={() => setShowSummaryModal(false)}
                appointmentData={{
                    hospital: hospitalId || "",
                    branch: branchId || "",
                    department: departmentId || "",
                    doctor: doctorId || "",
                    date: selectedDay?.format("YYYY-MM-DD") || "",
                }}
            />

            <Snackbar
                open={error}
                autoHideDuration={3000}
                onClose={() => setError(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert severity="error" sx={{ width: "100%" }}>
                    Saat bilgileri alınamadı!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default SelectDatePage;
