import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Grid, Link, ThemeProvider, Typography, createTheme } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import frTranslations from "./translations/fr.json";
import enTranslations from "./translations/en.json";
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';
import HtmlCssJsLogo from "./assets/images/html_css_js.png";
import MongoDbLogo from "./assets/images/mongodb.png";
import NestJsLogo from "./assets/images/nestjs.png";
import ReactLogo from "./assets/images/react.png";
import SqlLogo from "./assets/images/sql.webp";
import SymfonyLogo from "./assets/images/symfony.png";
import TwigLogo from "./assets/images/twig.png";
import MuiLogo from "./assets/images/mui.png";
import BootstrapLogo from "./assets/images/bootstrap.png";
import SassLogo from "./assets/images/sass.png";

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
  const stacks = [
    ["Full front", [HtmlCssJsLogo]],
    ["Mongo Nest React", [MongoDbLogo, NestJsLogo, ReactLogo]],
    ["Symfony SQL", [SqlLogo, SymfonyLogo, TwigLogo]],
    ["Style", [MuiLogo, BootstrapLogo, SassLogo]]
  ];
  const mobileLinks = [
    ["https://www.linkedin.com/in/theogillet/", <LinkedIn fontSize="large" />],
    ["https://github.com/LLEGIT", <GitHub fontSize="large" />],
    ["mailto:theogillet.developpement@gmail.com", <Mail fontSize="large" />]
  ];

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
        <Grid item xs={12} marginBottom={5}>
          <Navbar 
            onThemeChange={handleChosenTheme} 
            onLanguageChange={handleLanguageChange} 
            frTranslations={frTranslations}
            enTranslations={enTranslations}
          />
        </Grid>
        <Grid container padding={{xs: 5, lg: 0}} gap={3}>
          {/* Mobile links */}
          <Grid item xs={12} justifyContent="space-around" sx={{display: {xs: "flex", lg: "none"}}}>
            {mobileLinks.map((link, key) => <Link color="inherit" key={key} target={key === 2 ? "_self" : "_blank"} underline="none" href={link[0]}>
              {link[1]}
            </Link>)}
          </Grid>
          {/* Bio section */}
          <Grid container gap={1}>
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
          {/* Stack section */}
          <Grid container gap={3}>
            <Typography variant="h5" fontWeight="bold">
              {translations.stack.title}
            </Typography>
            <Grid container gap={2}>
              {stacks.map((stack, parentKey) => <Grid container gap={1} key={parentKey}>
                <Grid item xs={12}>
                  <Typography variant="body1" fontStyle="italic">
                    {stack[0]}
                  </Typography>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="space-around" alignItems="center">
                  {stack[1].map((image, childKey) => <Box sx={{width: {xs: parentKey === 0 ? 280 : 75, lg: parentKey === 0 ? 350 : 175}}} key={childKey}>
                    <img
                      src={image}
                      alt="technology logos"
                      loading="lazy"
                      width="100%"
                      height="auto"
                    />
                  </Box>)}
                </Grid>
              </Grid>)}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
