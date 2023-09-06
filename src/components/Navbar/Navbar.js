import { AppBar, Box, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Brightness2, ContactPage, Flag, GitHub, LightMode, LinkedIn, Mail } from "@mui/icons-material";

export default function Navbar({ onThemeChange , onLanguageChange, frTranslations, enTranslations}) {
    const [translations, setTranslations] = useState(sessionStorage.getItem("translation") === "en" ? enTranslations : frTranslations);
    const [anchorElOne, setAnchorElOne] = useState(null);
    const [anchorElTwo, setAnchorElTwo] = useState(null);
    const desktopLinks = [
        ["resume.pdf", <ContactPage />],
        ["https://www.linkedin.com/in/theogillet/", <LinkedIn />],
        ["https://github.com/LLEGIT", <GitHub />],
        ["mailto:theogillet.developpement@gmail.com", <Mail />]
    ];
    const mobileLinks = [
        ["#bio", translations.navbar.bio],
        ["#stack", translations.navbar.stack],
        ["#timeline", translations.navbar.timeline],
    ];
    const [chosenTheme, setChosenTheme] = useState(sessionStorage.getItem("theme") ?? "light");



    const handleMenu = (event) => {
        if (event.currentTarget.id === "menu-btn-1") {
            setAnchorElOne(event.currentTarget);
        } else {
            setAnchorElTwo(event.currentTarget);
        }
    };
    
    const handleClose = () => {
        setAnchorElOne(null);
        setAnchorElTwo(null);
    };

    const handleLanguageSelect = (language) => {
        sessionStorage.setItem("translation", language);
        onLanguageChange(language);
        setTranslations(language === "fr" ? frTranslations : enTranslations);
        setAnchorElTwo(null);
    };

    const handleTheme = () => {
        sessionStorage.setItem("theme", chosenTheme === "dark" ? "light" : "dark");
        onThemeChange(chosenTheme === "dark" ? "light" : "dark");
        setChosenTheme(chosenTheme === "dark" ? "light" : "dark");
    }

    const handleDesktopLink = (link, key) => {
        let anchorHtml = document.createElement('a');
        anchorHtml.href = link;
        anchorHtml.target = key === 2 ? "_self" : "_blank";

        if (key === 0) {
            anchorHtml.setAttribute("download", "");
        }

        console.log(anchorHtml)

        anchorHtml.click();
    }

    return (
        <Box flexGrow={1}>
            <AppBar position="fixed" color="inherit">
                <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                    <IconButton
                        id="menu-btn-1"
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenu}
                        sx={{ mr: 2, display: { lg: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorElOne}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorElOne)}
                        onClose={handleClose}
                    >
                        {mobileLinks.map((link, key) => <MenuItem key={key} onClick={handleClose}>
                            <Link underline="none" target={key > 3 ? "_blank" : "_self"} color="inherit" href={link[0]}>
                                {link[1]}
                            </Link>
                        </MenuItem>)}
                    </Menu>
                    <Typography display={{xs: "none", lg: "block"}}  variant="h1" fontSize={20} component="div" flexGrow={1}>
                        { translations.navbar.title }
                    </Typography>
                    {desktopLinks.map((link, key) => (
                        <IconButton
                            sx={{display: {xs: "none", lg: "flex"}}}
                            color="inherit"
                            key={key} 
                            onClick={() => handleDesktopLink(link[0], key)}
                        >
                            {link[1]}
                        </IconButton>
                    ))}
                    <IconButton
                        onClick={handleTheme}
                        aria-label="change display theme"
                        color="inherit"
                    >
                        {chosenTheme === "light" ? <LightMode /> : <Brightness2 />}
                    </IconButton>
                    <IconButton
                        id="menu-btn-2"
                        size="large"
                        aria-label="change display language"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <Flag />
                    </IconButton>
                    <Menu
                        id="navbar-menu1"
                        anchorEl={anchorElTwo}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorElTwo)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => handleLanguageSelect("fr")}>{ frTranslations.navbar.language }</MenuItem>
                        <MenuItem onClick={() => handleLanguageSelect("en")}>{ enTranslations.navbar.language }</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    )
}