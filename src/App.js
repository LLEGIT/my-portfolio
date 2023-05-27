import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Avatar, Box, Grid, Link, ThemeProvider, Typography, createTheme } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import frTranslations from "./translations/fr.json";
import enTranslations from "./translations/en.json";
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';
import AvatarPic from "./assets/images/avatar.png";
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
import CareerPath from './components/CareerPath/CareerPath';
import ContactForm from './components/ContactForm/ContactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Map from './components/Map/Map';

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
  const [swapColor, setSwapColor] = useState(sessionStorage.getItem("theme") === "dark" ? "dark" : "light");
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

  useEffect(() => {
    if (sessionStorage.getItem("theme") === "dark") {
      setSwapColor("dark");
    }
    else {
      setSwapColor("light");
    }
  }, [chosenTheme]);

  return (
    <ThemeProvider theme={chosenTheme}>
      <CssBaseline />
      <Grid container>
        <ToastContainer />
        <Grid item xs={12} marginBottom={5}>
          <Navbar 
            onThemeChange={handleChosenTheme} 
            onLanguageChange={handleLanguageChange} 
            frTranslations={frTranslations}
            enTranslations={enTranslations}
          />
        </Grid>
        <Grid container padding={{xs: 5, lg: 10}} gap={5}>
          {/* Mobile links */}
          <Grid item xs={12} justifyContent="space-around" sx={{display: {xs: "flex", lg: "none"}}}>
            {mobileLinks.map((link, key) => <Link color="inherit" key={key} target={key === 2 ? "_self" : "_blank"} underline="none" href={link[0]}>
              {link[1]}
            </Link>)}
          </Grid>
          <Grid container gap={{xs: 2, lg: 0}}>
            {/* Bio section */}
            <Grid item id="bio" gap={3} lg={6} xl={4} padding={{lg: 5}} sx={{backgroundColor: {xs: "none", lg: swapColor === "dark" ? "#121212" : "#F6F6F6"}, borderRadius: {xs: 0, lg: 5}}}>
              <Grid item xs={12} display="flex" justifyContent="space-between" alignItems={{xs: "center", lg:"flex-start"}}>
                <Typography variant="h5" fontWeight="bold">
                  {translations.bio.title}
                </Typography>
                <Avatar 
                  alt="Picture of myself" 
                  src={AvatarPic}
                  sx={{
                    width: 70,
                    height: 70
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                  {translations.bio.content.map((line, key) => <Typography paddingTop={1} paddingBottom={1} textAlign="justify" variant="body1" key={key}>
                    {line}
                  </Typography>)}
              </Grid>
            </Grid>
            {/* Stack section */}
            <Grid id="stack" item gap={3} lg={6} xl={4} padding={{lg: 5}}>
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
                    {stack[1].map((image, childKey) => <Box sx={{width: {xs: parentKey === 0 ? 280 : 75, lg: parentKey === 0 ? 300 : 75}}} key={childKey}>
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
            <Grid id="map" container xs={12} xl={4} gap={3} paddingTop={5}>
                <Typography variant="h5" fontWeight="bold">
                  {translations.map.title}
                </Typography>
                <Map />
            </Grid>
          </Grid>
          <Grid container display="flex" justifyContent="center" alignItems="center">
            {/* Timeline */}
            <Grid id="timeline" container lg={6}>
              <Grid item xs={12}>
                <Typography variant="h5" fontWeight="bold">
                  {translations.timeline.title}
                </Typography>
              </Grid>
              <CareerPath translations={translations} />
            </Grid>
            {/* Contact form */}
            <Grid container lg={6} gap={2} xl={4}>
              <Grid item xs={12}>
                  <Typography variant="h5" fontWeight="bold">
                    {translations.contactForm.title}
                  </Typography>
              </Grid>
              <ContactForm translations={translations} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
