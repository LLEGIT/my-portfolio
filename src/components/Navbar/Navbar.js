import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import frTranslations from "./../../translations/fr.json";
import enTranslations from "./../../translations/fr.json";
import { useState } from "react";

export default function Navbar() {
    const [translations, setTranslations] = useState(frTranslations);

    return (
        <Box flexGrow={1}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { lg: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography display={{xs: "none", lg: "block"}}  variant="h6" component="div" flexGrow={1}>
                        { frTranslations.navbar.title }
                    </Typography>
                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}