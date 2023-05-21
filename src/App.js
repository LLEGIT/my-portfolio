import './App.css';
import { Grid, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';

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

  const handleChosenTheme = (theme) => {
    setChosenTheme(theme === "dark" ? darkTheme : lightTheme);
  }

  return (
    <ThemeProvider theme={chosenTheme}>
      <Grid container>
        <Grid item xs={12}>
          <Navbar onThemeChange={handleChosenTheme} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
