import React from "react";
import Card from "@mui/material/Card";
import content from "../data/content";
import CardContent from "@mui/material/CardContent";
import { AppBar, Toolbar, Typography, Grid, CardMedia } from "@mui/material";
import { profiles } from "../data/details";
import Contact from "../components/Contact";

export default function ProfileGrid() {
    const CardStyles = (status) => {
        switch (status) {
            case "To Be Interviewed":
                return {
                    borderColor: "#4889f4",
                    color: "#4889f4",
                };
            case "Selected":
                return {
                    borderColor: "#299649",
                    color: "#299649",
                };
            case "Hold":
                return {
                    borderColor: "#ffa600",
                    color: "#ffa600",
                };
            case "Rejected":
                return {
                    borderColor: "#e34034",
                    color: "#e34034",
                };
            default:
                return {
                    borderColor: "#9e9e9e",
                    color: "#9e9e9e",
                };
        }
    };

    return (
        <section id="career">
            <AppBar position="sticky" className="custom-navbar navbar-light bg-white">
                <Toolbar>
                    <img
                        src={content.header.logoSrc}
                        alt="Logo"
                        width="50"
                        height="50"
                    />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary' }}>
                        {content.header.brand}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Typography
                variant="h4"
                sx={{
                    my: 4,
                    textAlign: 'center',
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '0.03em'
                }}
            >
                Candidate Dashboard
            </Typography>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                    backgroundColor: "#ffffff",
                    minHeight: "50vh",
                }}
            >
                <Grid container spacing={3} justifyContent="space-evenly" alignItems="stretch">
                    {profiles.map((profile, index) => (
                        <Grid item xs={12} sm={12} md={6} xl={4} key={index}>
                            <Card
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    p: 2,
                                    width: "95%",
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    backgroundColor: "#fff",
                                    margin: "20px",
                                    gap: "16px",
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: 4
                                    }
                                }}
                            >
                                <Card
                                    sx={{
                                        minWidth: 120,
                                        maxWidth: 150,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        p: 1
                                    }}
                                >
                                    <CardMedia component="img" image={profile.image} />
                                </Card>
                                <CardContent
                                    sx={{
                                        p: 1,
                                        color: "#000000"
                                    }}
                                >
                                    <Typography variant="h6">
                                        <strong>{profile.Name} | </strong> {profile.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Location:</strong> {profile.location}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Description:</strong> {profile.description}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Status: </strong>
                                        <span
                                            style={{
                                                color: CardStyles(profile.Status).color,
                                            }}
                                        >
                                            {profile.Status}
                                        </span>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <Contact />
        </section>
    );
}