import {
  Commute,
  FitnessCenter,
  Hiking,
  Mail,
  SportsEsports,
  SportsTennis,
  TravelExplore,
} from "@mui/icons-material";
import { Typography, Grid, Box } from "@mui/material";

export default function Footer({ translations }) {
  const footerInfos = [
    {
      icon: <Mail />,
      value: translations.footer.info1,
    },
    {
      icon: <TravelExplore />,
      value: translations.footer.info2,
    },
    {
      icon: <Commute />,
      value: translations.footer.info3,
    },
    {
      icon: (
        <Box display="flex" alignItems="center">
          <SportsTennis />
          <FitnessCenter />
          <Hiking />
          <SportsEsports />
        </Box>
      ),
      value: "",
    },
  ];

  return (
    <Grid
      container
      sx={{
        boxShadow:
          "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
      }}
      padding={7}
    >
      {footerInfos.map((info, index) => (
        <Grid
          item
          key={index}
          xs={12}
          lg={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          {info.icon}
          <Typography>{info.value}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}
