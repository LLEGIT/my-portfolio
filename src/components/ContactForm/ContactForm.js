import { LoadingButton } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function ContactForm({ translations }) {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [nameHelperTxt, setNameHelperTxt] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailHelperTxt, setEmailHelperTxT] = useState("");
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState(false);
    const [messageHelperTxt, setMessageHelperTxt] = useState("");
    const [loading, setLoading] = useState(false);
    const nameRegex = /^[A-Za-zÀ-ÿ\s.]+$/;
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

    const handleChange = (value, valueSetter, errorSetter, helperTextSetter) => {
        valueSetter(value);
        errorSetter(false);
        helperTextSetter("");
    }

    const handleSubmit = () => {
        // Name verification
        if (name === "") {
            setNameError(true);
            setNameHelperTxt(translations.contactForm.name.emptyMessage);
        } else if (!nameRegex.test(name)) {
            setNameError(true);
            setNameHelperTxt(translations.contactForm.name.errorMessage);
        }

        // Email verification
        if (email === "") {
            setEmailError(true);
            setEmailHelperTxT(translations.contactForm.email.emptyMessage);
        } else if (!emailRegex.test(email)) {
            setEmailError(true);
            setEmailHelperTxT(translations.contactForm.email.errorMessage);
        }

        // Message verification
        if (message === "") {
            setMessageError(true);
            setMessageHelperTxt(translations.contactForm.message.emptyMessage);
        }

        if (email !== "" && emailRegex.test(email) && message !== "") {
            setLoading(true);

            let templateParams = {
                from_name: name, 
                email: email,
                message: message
            }

            emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            ).then(() => {
                setLoading(false);
                setEmail("");
                setName("");
                setMessage("");
                toast.success(translations.contactForm.toastMessage.success);
            }).catch(() => {
                setLoading(false);
                toast.error(translations.contactForm.toastMessage.error);
            });
        }
    }

    return <Grid container gap={3}>
        <Grid item xs={12}>
            <TextField 
                value={name}
                onChange={(e) => handleChange(e.target.value, setName, setNameError, setNameHelperTxt)}
                label={translations.contactForm.name.label}
                error={nameError}
                helperText={nameHelperTxt}
                fullWidth
        />
        </Grid>
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
                color="info"
                variant="contained"
                loading={loading}
                onClick={handleSubmit}
            >
                {translations.contactForm.submitBtn.label}
            </LoadingButton>
        </Grid>
    </Grid>
}