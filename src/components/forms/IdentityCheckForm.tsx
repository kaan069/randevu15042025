// components/forms/IdentityCheckForm.tsx
import React, { useState } from "react";
import {
    Box,
    TextField,
    Typography,
    Button,
    Tabs,
    Tab,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

// Captcha üretme fonksiyonu
const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
};

export const IdentityCheckForm: React.FC = () => {
    const [tab, setTab] = React.useState(0);
    const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const formik = useFormik({
        initialValues: {
            tcNo: "",
            fatherName: "",
            birthDate: "",
            captchaInput: "",
            appointmentCode: "",
        },
        validationSchema: Yup.object({
            tcNo: Yup.string()
                .matches(/^[0-9]{11}$/, "11 haneli T.C. Kimlik No giriniz")
                .required("Zorunlu"),
            fatherName: Yup.string().required("Zorunlu"),
            birthDate: Yup.string().required("Zorunlu"),
            captchaInput: Yup.string()
                .required("Zorunlu")
                .test("captcha-match", "Güvenlik kodu uyuşmuyor", function (value) {
                    return value === captchaCode;
                }),
            appointmentCode: Yup.string().required("Zorunlu"),
        }),
        onSubmit: (values) => {
            console.log("Form gönderildi:", values);
            alert("Form Başarıyla Gönderildi");
        },
    });

    return (
        <Box
            width={isMobile ? "100%" : 400}
            mx="auto"
            mt={5}
            p={3}
            border="1px solid #ddd"
            borderRadius={3}
            boxShadow={3}
            bgcolor="#fff"
        >
            <Tabs value={tab} onChange={(e, newVal) => setTab(newVal)} centered>
                <Tab label="T.C. Vatandaşı" />
                <Tab label="Foreign Patient" />
            </Tabs>

            {tab === 0 && (
                <form onSubmit={formik.handleSubmit}>
                    <Box display="flex" flexDirection="column" gap={2} mt={2}>
                        <TextField
                            label="T.C. Kimlik No"
                            name="tcNo"
                            value={formik.values.tcNo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.tcNo && Boolean(formik.errors.tcNo)}
                            helperText={formik.touched.tcNo && formik.errors.tcNo}
                        />

                        <TextField
                            label="Baba Adı"
                            name="fatherName"
                            value={formik.values.fatherName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.fatherName && Boolean(formik.errors.fatherName)}
                            helperText={formik.touched.fatherName && formik.errors.fatherName}
                        />

                        <TextField
                            label="Doğum Tarihi"
                            name="birthDate"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formik.values.birthDate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                            helperText={formik.touched.birthDate && formik.errors.birthDate}
                        />

                        <TextField
                            label="Randevu Kodu"
                            name="appointmentCode"
                            value={formik.values.appointmentCode}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.appointmentCode && Boolean(formik.errors.appointmentCode)}
                            helperText={formik.touched.appointmentCode && formik.errors.appointmentCode}
                        />

                        <Box display="flex" alignItems="center" gap={1}>
                            <Box
                                sx={{
                                    backgroundColor: "#eee",
                                    fontWeight: "bold",
                                    px: 2,
                                    py: 1,
                                    borderRadius: 1,
                                    minWidth: 80,
                                    textAlign: "center",
                                }}
                            >
                                {captchaCode}
                            </Box>
                            <Button
                                variant="outlined"
                                onClick={() => {
                                    const newCode = generateCaptcha();
                                    setCaptchaCode(newCode);
                                    formik.setFieldValue("captchaInput", "");
                                }}
                            >
                                ↻
                            </Button>
                        </Box>

                        <TextField
                            label="Güvenlik Kodu"
                            name="captchaInput"
                            value={formik.values.captchaInput}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.captchaInput && Boolean(formik.errors.captchaInput)}
                            helperText={formik.touched.captchaInput && formik.errors.captchaInput}
                            fullWidth
                        />

                        <Button type="submit" variant="contained" color="primary">
                            Devam
                        </Button>
                    </Box>
                </form>
            )}

            {tab === 1 && (
                <Typography mt={3} textAlign="center">
                    Foreign patient form coming soon...
                </Typography>
            )}
        </Box>
    );
};

export default IdentityCheckForm;
