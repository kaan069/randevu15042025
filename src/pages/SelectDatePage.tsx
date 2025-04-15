import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Button,
    Grid,
    Snackbar,
    Alert,
    TextField,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { fetchEmptySlots } from "../state/appointmentState";
import { useAppointmentState } from "../state/appointmentState";
import DoctorCard from "../components/common/DoctorCard";
import NewAppointmentModal from "../components/Home/NewAppointmentModal";


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
    } = useAppointmentState();

    const [selectedDay, setSelectedDay] = useState<string>(""); // yyyy-mm-dd
    const [timeSlots, setTimeSlots] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const selectedDoctor = doctors.find((doc) => doc.id === doctorId);

    // Kullanıcı gün seçince o günün saatlerini getir
    useEffect(() => {
        const loadSlots = async () => {
            if (!selectedDay || !hospitalId || !departmentId || !doctorId) return;

            setLoading(true);
            setSelectedDay("2025-04-15");
            try {
                const startTime = `${selectedDay}T00:00:00`;
                const endTime = `${selectedDay}T23:59:59`;

                const availableSlots = await fetchEmptySlots(
                    hospitalId,
                    departmentId,
                    doctorId,
                    startTime,
                    endTime,
                    selectedDay
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

            {selectedDoctor && (
                <DoctorCard
                    name={selectedDoctor.name}
                    branch={selectedDoctor.branchName}
                    department={selectedDoctor.deptName}
                    imageUrl={selectedDoctor.imageUrl || ""}
                />
            )}

            <Typography variant="h6" gutterBottom>
                Randevu Tarihi Seç
            </Typography>

            <TextField
                fullWidth
                type="date"
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                sx={{ mb: 3 }}
            />

            <Typography variant="h6" gutterBottom>
                Saat Seç
            </Typography>

            {loading ? (
                <Typography>Yükleniyor...</Typography>
            ) : timeSlots.length === 0 ? (
                <Typography>Bu tarihte uygun saat bulunamadı.</Typography>
            ) : (
                <Grid container spacing={2}>
                    {timeSlots.map((slot, i) => (
                        <Grid size={4} key={i}>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={() => handleSelectTime(slot)}
                            >
                                {slot.split("T")[1].slice(0, 5)}
                            </Button>
                        </Grid>
                    ))}
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
                    date: selectedDay,
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
