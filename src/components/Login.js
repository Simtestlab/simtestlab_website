import React, { useEffect } from "react";
import { signInWithGoogle, auth } from "../config/firebaseConfig";
import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (!loading && user) {
            navigate("/editor", { replace: true });
        }
    }, [user, loading, navigate]);

    const handleGoogleSignIn = async () => {
        try {
            const user = await signInWithGoogle();
            if (user) {
                navigate("/editor");
            }
        } catch (error) {
            console.error("Failed to sign in with Google:", error);
        }
    };

    return (
        <Container 
            sx={{
                mt: 10,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}
        >
            <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
                Welcome, please sign in to continue
            </Typography>

            <Box sx={{ width: "100%", maxWidth: 400 }}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleGoogleSignIn}
                    sx={{
                        backgroundColor: "#4285F4",
                        "&:hover": {
                            backgroundColor: "#357AE8"
                        },
                        padding: "12px",
                        fontSize: "16px",
                        textTransform: "none"
                    }}
                >
                    Sign In With Google
                </Button>
            </Box>
        </Container>
    );
}

export default Login;
