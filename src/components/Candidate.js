import React from "react";
import Card from "@mui/material/Card";
import content from "../data/content";
import CardContent from "@mui/material/CardContent";
import { AppBar, Toolbar, Typography, Grid } from "@mui/material";
import { profiles } from "../data/details";
import Contact from "../components/Contact";

export default function ProfileGrid() {
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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {content.header.brand}
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="job-application-header">
                <span>Candidate Page</span>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                    backgroundColor: "#000000", 
                    minHeight: "100vh", 
                    margin: "20px",
                }}
            >
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    {profiles.map((profile, index) => (
                        <Grid
                            item
                            xs={12} 
                            sm={6} 
                            md={4} 
                            key={index}
                        >
                            <Card
                                sx={{
                                    display: "flex",
                                    flexDirection: "column", 
                                    height: "300px", 
                                    alignItems: "center",
                                    width: "100%", 
                                    padding: "20px",
                                    borderRadius:"16px",
                                    backgroundColor: "#f9f9f9",
                                    color: "#3c3c3c",
                                    boxSizing: "border-box",
                                    boxShadow:'0px 4px 6px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                {/*<CardMedia
                  component="img"
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                  image={profile.image}
                  alt={profile.Name}
                />*/}
                                <CardContent
                                    sx={{
                                        flex: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center", 
                                    }}
                                >

                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Name:</strong>
                                        <br /> {profile.Name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Email:</strong><br /> {profile.email}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>DOB:</strong>
                                        <br /> {profile.dob}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Address:</strong>
                                        <br /> {profile.address}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Phone:</strong>
                                        <br /> {profile.phone}
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
