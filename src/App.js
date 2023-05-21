import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
    </Grid>
  );
}

export default App;
