import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Avatar,
  Box,
  Chip,
  Grid,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import frTranslations from "./translations/fr.json";
import enTranslations from "./translations/en.json";
import {
  Code,
  ContactMail,
  GitHub,
  LinkedIn,
  Mail,
  MapOutlined,
} from "@mui/icons-material";
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
import CareerPath from "./components/CareerPath/CareerPath";
import ContactForm from "./components/ContactForm/ContactForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Map from "./components/Map/Map";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Console from "./components/Console/Console";

function App() {
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const [chosenTheme, setChosenTheme] = useState(
    sessionStorage.getItem("theme") === "dark" ? darkTheme : lightTheme
  );
  const [swapColor, setSwapColor] = useState(
    sessionStorage.getItem("theme") === "dark" ? "dark" : "light"
  );
  const [translations, setTranslations] = useState(
    sessionStorage.getItem("translation") === "en"
      ? enTranslations
      : frTranslations
  );
  const stacks = [
    ["Full front", [HtmlCssJsLogo]],
    ["Mongo Nest React", [MongoDbLogo, NestJsLogo, ReactLogo]],
    ["Symfony SQL", [SqlLogo, SymfonyLogo, TwigLogo]],
    ["Style", [MuiLogo, BootstrapLogo, SassLogo]],
  ];
  const mobileLinks = [
    ["https://www.linkedin.com/in/theogillet/", <LinkedIn fontSize="large" />],
    ["https://github.com/LLEGIT", <GitHub fontSize="large" />],
    ["mailto:theogillet.developpement@gmail.com", <Mail fontSize="large" />],
  ];

  const handleChosenTheme = (theme) => {
    setChosenTheme(theme === "dark" ? darkTheme : lightTheme);
  };

  const handleLanguageChange = (language) => {
    setTranslations(language === "en" ? enTranslations : frTranslations);
  };

  useEffect(() => {
    if (sessionStorage.getItem("theme") === "dark") {
      setSwapColor("dark");
    } else {
      setSwapColor("light");
    }
  }, [chosenTheme]);

  return (
    <ThemeProvider theme={chosenTheme}>
      <CssBaseline />
      <Grid
        className="main-container"
        container
        sx={{ backgroundColor: swapColor === "dark" ? "black" : "#F1F1F1" }}
      >
        <ToastContainer />
        <Grid item xs={12} marginBottom={5}>
          <Navbar
            onThemeChange={handleChosenTheme}
            onLanguageChange={handleLanguageChange}
            frTranslations={frTranslations}
            enTranslations={enTranslations}
          />
        </Grid>
        <Grid container marginTop={{ xs: 5, lg: 0 }} padding={{ lg: 10 }}>
          {/* Mobile links */}
          <Grid
            item
            xs={12}
            justifyContent="space-around"
            sx={{ display: { xs: "flex", lg: "none" } }}
          >
            {mobileLinks.map((link, key) => (
              <Link
                color="inherit"
                key={key}
                target={key === 2 ? "_self" : "_blank"}
                underline="none"
                href={link[0]}
              >
                {link[1]}
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} padding={2}>
            <Console translations={translations} />
          </Grid>
          <Grid container display="flex" alignItems="flex-start">
            {/* Bio section */}
            <Grid item id="bio" lg={6} xl={4} padding={2}>
              <Box
                gap={2}
                sx={{
                  backgroundColor: swapColor === "dark" ? "black" : "white",
                }}
                padding={3}
              >
                <Box
                  sx={{ backgroundColor: "#f1f1f1" }}
                  borderRadius={15}
                  marginBottom={2}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  padding={2}
                >
                  <Typography variant="h2" fontSize={35} fontWeight="bold" color="black">
                    {translations.bio.title}
                  </Typography>
                  <Avatar
                    alt="Picture of myself"
                    src={AvatarPic}
                    sx={{
                      width: 70,
                      height: 70,
                    }}
                  />
                </Box>
                <Box>
                  {translations.bio.content.map((line, key) => (
                    <Typography
                      paddingTop={1}
                      paddingBottom={1}
                      textAlign="justify"
                      variant="body1"
                      key={key}
                    >
                      {line}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
            {/* Stack section */}
            <Grid
              id="stack"
              item
              display="flex"
              flexDirection="column"
              lg={6}
              xl={4}
              padding={2}
            >
              <Box
                gap={3}
                sx={{
                  backgroundColor: swapColor === "dark" ? "black" : "white",
                }}
                padding={3}
              >
                <Typography
                  variant="h2"
                  fontSize={35}
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  marginBottom={1}
                  gap={1}
                >
                  {translations.stack.title}
                  <Code fontSize="large" />
                </Typography>
                <Box>
                  {stacks.map((stack, parentKey) => (
                    <Grid container gap={1} key={parentKey}>
                      <Grid
                        item
                        xs={12}
                        sx={{ backgroundColor: "#444cf777" }}
                        padding={1}
                      >
                        <Typography
                          textAlign="center"
                          variant="body1"
                          color="black"
                        >
                          {stack[0]}
                        </Typography>
                      </Grid>
                      <Box
                        width="100%"
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                      >
                        {stack[1].map((image, childKey) => (
                          <Box
                            sx={{
                              width: {
                                xs: parentKey === 0 ? 280 : 75,
                                lg: parentKey === 0 ? 300 : 75,
                              },
                            }}
                            key={childKey}
                          >
                            <img
                              src={image}
                              alt="technology logos"
                              loading="lazy"
                              width="100%"
                              height="auto"
                            />
                          </Box>
                        ))}
                      </Box>
                    </Grid>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid
              id="map"
              display="flex"
              flexDirection="column"
              borderRadius={5}
              item
              xs={12}
              lg={6}
              xl={4}
              padding={2}
            >
              <Box
                padding={2}
                sx={{
                  backgroundColor: swapColor === "dark" ? "black" : "white",
                }}
              >
                <Typography
                  marginBottom={2}
                  variant="h5"
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  {translations.map.title}
                  <MapOutlined />
                </Typography>
                <Map />
              </Box>
            </Grid>
          </Grid>
          <Grid container gap={{ xs: 5, lg: 0 }}>
            {/* Projects */}
            <Projects translations={translations} />
            {/* Timeline */}
            <Grid id="timeline" item lg={6} xl={4} padding={{ xs: 2, lg: 5 }}>
              <Chip
                label={translations.timeline.title}
                sx={{ fontSize: 25, width: "100%", backgroundColor: "#444cf7" }}
                variant="contained"
                size="large"
              />
              <Box
                marginTop={2}
                padding={1}
                sx={{
                  backgroundColor: swapColor === "dark" ? "black" : "white",
                }}
              >
                <CareerPath translations={translations} />
              </Box>
            </Grid>
            {/* Contact form */}
            <Grid
              item
              display="flex"
              flexDirection="column"
              maxHeight={500}
              lg={6}
              gap={2}
              xl={4}
              marginBottom={{ xs: 5, lg: 0 }}
              padding={2}
            >
              <Box
                sx={{
                  padding: {xs: 2, lg: 3},
                  backgroundColor: swapColor === "dark" ? "black" : "#f2f2f2",
                }}
                borderRadius={5}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  marginBottom={2}
                >
                  {translations.contactForm.title}
                  <ContactMail />
                </Typography>
                <ContactForm translations={translations} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ backgroundColor: "inherit" }}>
          <Footer translations={translations} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
