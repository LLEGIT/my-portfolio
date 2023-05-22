import { LoadingButton } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm({ translations }) {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailHelperTxt, setEmailHelperTxT] = useState("");
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState(false);
    const [messageHelperTxt, setMessageHelperTxt] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRegex = "[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+";

    const handleChange = (value, valueSetter, errorSetter, helperTextSetter) => {
        valueSetter(value);
        errorSetter(false);
        helperTextSetter("");
    }

    const handleSubmit = () => {
        // Email verification
        if (email === "") {
            setEmailError(true);
            setEmailHelperTxT(translations.contactForm.email.emptyMessage);
        }
        else if (!emailRegex.test(email)) {
            setEmailError(true);
            setEmailHelperTxT(translations.contactForm.email.errorMessage);
        }

        // Message verification
        if (message === "") {
            setMessageError(true);
            setMessageHelperTxt(translations.contactForm.message.emptyMessage);
        }

        emailjs.send("service_l0nsskj", "template_diodsv4", "gDU_JwY4fB9YX05ah")
    }

    return <Grid container gap={3}>
        <Grid item xs={12}>
            <TextField 
                value={email}
                onChange={(e) => handleChange(e.target.value, setEmail, setEmailError, setEmailHelperTxT)}
                label={translations.contactForm.email.label}
                error={emailError}
                helperText={emailHelperTxt}
                fullWidth
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                value={message}
                onChange={(e) => handleChange(e.target.value, setMessage, setMessageError, setMessageHelperTxt)}
                multiline
                rows={5}
                label={translations.contactForm.message.label}
                error={messageError}
                helperText={messageHelperTxt}
                fullWidth
            />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="flex-end">
            <LoadingButton
                variant="contained"
                loading={loading}
                onClick={handleSubmit}
            >
                {translations.contactForm.submitBtn.label}
            </LoadingButton>
        </Grid>
    </Grid>
}