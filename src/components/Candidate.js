import React from "react";
import Card from "@mui/material/Card";
import content from "../data/content";
import CardContent from "@mui/material/CardContent";
import { AppBar, Toolbar, Typography, Grid } from "@mui/material";
import { profiles } from "../data/details";
import Contact from "../components/Contact";

export default function ProfileGrid() {
    const CardStyles = (status) => {
        switch (status) {
            case "To Be Interviewed":
                return {
                    borderColor: "#40ffff",
                    color: "#40ffff",
                };
            case "Selected":
                return {
                    borderColor: "#28ffb1",
                    color: "#28ffb1",
                };
            case "Hold":
                return {
                    borderColor: "#ff9800",
                    color: "#ff9800",
                };
            case "Rejected":
                return {
                    borderColor: "#f44336",
                    color: "#f44336",
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
                <Grid container spacing={3} justifyContent="space-evenly" alignItems="stretch">
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
                                    justifyContent: "flex-start",
                                    height: "100%",
                                    minHeight: "240px",
                                    maxHeight: "auto",
                                    overflow: "hidden",
                                    alignItems: "stretch",
                                    padding: "20px",
                                    borderRadius: "16px",
                                    backgroundColor: "#424242",
                                    backgroundClip: "padding-box",
                                    background: "linear-gradient(145deg, #2a2a2a, #1f1f1f)",
                                    boxSizing: "border-box",
                                    boxShadow: "0px 4px 6px rgba(73, 68, 68, 0.1)",
                                    gap: "12px",
                                }}
                            >
                                <CardContent
                                    sx={{
                                        flex: 1,
                                        display: "flex",
                                        color: "white",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        textAlign: "left",
                                        gap: "8px",
                                    }}
                                >
                                    <Typography variant="body2">
                                        <strong>Name:</strong> {profile.Name}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Email:</strong> {profile.email}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>DOB:</strong> {profile.dob}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Address:</strong> {profile.address}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Phone:</strong> {profile.phone}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Status:</strong>{" "}
                                        <span
                                            style={{
                                                color: CardStyles(profile.Status).color, // Dynamically set the text color
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
