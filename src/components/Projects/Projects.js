import { Launch } from "@mui/icons-material";
import { Box, Card, CardMedia, Grid, Link, Typography } from "@mui/material";

export default function Projects({ translations }) {
    const projectsArray = [
        {
            name: "Fake spotify",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
            description: translations.projects.projectOneDescription,
            link: "https://github.com/LLEGIT/fake_spotify"
        },
        {
            name: "Stravabien",
            image: "https://seeklogo.com/images/S/strava-logo-C419D1A461-seeklogo.com.png",
            description: translations.projects.projectTwoDescription,
            link: "https://github.com/LLEGIT/Stravabien"
        },
        {
            name: "Cinema manager",
            image: "https://www.pngplay.com/wp-content/uploads/6/Cinema-Logo-PNG-Clipart-Background.png",
            description: translations.projects.projectThreeDescription,
            link: "https://github.com/LLEGIT/cinema_manager"
        }
    ];

    return <Grid
        id="projects"
        item
        display="flex"
        flexDirection="column"
        gap={2}
        lg={6}
        xl={4}
        padding={{ lg: 5 }}
    >
        <Typography variant="h5" fontWeight="bold">
            {translations.projects.title}
        </Typography>
        {projectsArray.map((project, key) => <Card
            sx={{ 
                padding: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2
            }}
            key={key}
        >
            <Box
                display="flex"
                gap={3}
            >
                <Box 
                    maxWidth="75%"
                    display="flex"
                    flexDirection="column"
                    gap={2}
                >
                    <Typography fontWeight="bold">{project.name}</Typography>
                    <Typography textAlign="justify">{project.description}</Typography>
                </Box>
                <CardMedia
                    sx={{ height: { xs: 35, lg: 125 }, width: { xs: 35, lg: 125 } }}
                    title="Project image"
                    image={project.image}
                />
            </Box>
            <Link href={project.link} target="_blank">
                <Launch />
            </Link>
        </Card>)}
    </Grid>;
}