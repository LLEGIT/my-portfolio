import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, ThemeProvider, Typography, createTheme } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import frTranslations from "./translations/fr.json";
import enTranslations from "./translations/en.json";

function App() {
  const lightTheme = createTheme({
    palette: {
      mode: "light"
    }
  })

  const darkTheme = createTheme({
    palette: {
      mode: "dark"
    }
  })
  const [chosenTheme, setChosenTheme] = useState(sessionStorage.getItem("theme") === "dark" ? darkTheme : lightTheme);
  const [translations, setTranslations] = useState(sessionStorage.getItem("translation") === "en" ? enTranslations : frTranslations);

  const handleChosenTheme = (theme) => {
    setChosenTheme(theme === "dark" ? darkTheme : lightTheme);
  }
  
  const handleLanguageChange = (language) => {
    setTranslations(language === "en" ? enTranslations : frTranslations);
  }

  return (
    <ThemeProvider theme={chosenTheme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12}>
          <Navbar 
            onThemeChange={handleChosenTheme} 
            onLanguageChange={handleLanguageChange} 
            frTranslations={frTranslations}
            enTranslations={enTranslations}
          />
        </Grid>
        <Grid container padding={{xs: 5, lg: 0}} gap={1}>
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="bold">
              {translations.bio.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
              {translations.bio.content.map((line, key) => <Typography textAlign="justify" variant="body1" key={key}>
                {line}
              </Typography>)}
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
