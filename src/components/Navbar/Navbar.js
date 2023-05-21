import { AppBar, Box, IconButton, Menu, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import frTranslations from "./../../translations/fr.json";
import enTranslations from "./../../translations/en.json";
import { useState } from "react";
import { Flag } from "@mui/icons-material";

export default function Navbar() {
    const [translations, setTranslations] = useState(sessionStorage.getItem("translation") === "fr" ? frTranslations : enTranslations);
    const [anchorElOne, setAnchorElOne] = useState(null);
    const [anchorElTwo, setAnchorElTwo] = useState(null);

    const handleMenu = (event) => {
        if (event.target.id === "menu-btn-1") {
            setAnchorElOne(event.currentTarget);
        }
        else {
            setAnchorElTwo(event.currentTarget);
        }
    };
    
    const handleClose = () => {
        setAnchorElOne(null);
        setAnchorElTwo(null);
    };

    const handleLanguageSelect = (language) => {
        sessionStorage.setItem("translation", language);
        setTranslations(language === "fr" ? frTranslations : enTranslations);
        setAnchorElTwo(null);
    };


    return (
        <Box flexGrow={1}>
            <AppBar position="static">
                <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                    <IconButton
                        id="menu-btn-1"
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
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

                    </Menu>
                    <Typography display={{xs: "none", lg: "block"}}  variant="h6" component="div" flexGrow={1}>
                        { translations.navbar.title }
                    </Typography>
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