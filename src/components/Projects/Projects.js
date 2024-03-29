import { Launch } from "@mui/icons-material";
import { Box, Card, Chip, Grid, Link, Typography } from "@mui/material";

export default function Projects({ translations }) {
  const projectsArray = [
    {
      name: "Fake spotify",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
      description: translations.projects.projectOneDescription,
      link: "https://github.com/LLEGIT/fake_spotify",
      alt: "Fake Spotify logo",
    },
    {
      name: "Stravabien",
      image:
        "https://seeklogo.com/images/S/strava-logo-C419D1A461-seeklogo.com.png",
      description: translations.projects.projectTwoDescription,
      link: "https://github.com/LLEGIT/Stravabien",
      alt: "Stravabien logo",
    },
    {
      name: "Star Wars Wiki",
      image:
        "https://www.1min30.com/wp-content/uploads/2017/09/logo-empire-star-wars-1.jpg",
      description: translations.projects.projectThreeDescription,
      link: "https://github.com/LLEGIT/star_wars_wiki",
      alt: "Star wars logo",
    },
  ];

  return (
    <Grid
      id="projects"
      item
      display="flex"
      flexDirection="column"
      gap={2}
      lg={6}
      xl={4}
      padding={{ xs: 2, lg: 5 }}
    >
      <Chip
        label={translations.projects.title}
        color="secondary"
        sx={{ fontSize: 25, width: "100%" }}
        size="large"
      />
      {projectsArray.map((project, key) => (
        <Card
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          key={key}
        >
          <Box display="flex" gap={3}>
            <Box
              maxWidth={{ xs: "75%", lg: "65%" }}
              display="flex"
              flexDirection="column"
              gap={2}
            >
              <Typography variant="h5" fontWeight="bold">
                {project.name}
              </Typography>
              <Typography>{project.description}</Typography>
            </Box>
            <Box
              sx={{
                height: { xs: 35, lg: 115 },
                width: { xs: 35, lg: 115 },
              }}
            >
              <img
                src={project.image}
                width="100%"
                height="auto"
                alt={project.alt}
              />
            </Box>
          </Box>
          <Link href={project.link} target="_blank">
            <Launch />
          </Link>
        </Card>
      ))}
    </Grid>
  );
}
