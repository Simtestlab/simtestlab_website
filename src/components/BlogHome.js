import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import {
    Card,
    CardContent,
    Typography,
    Container,
    Box,
    Avatar,
    Divider,
    AppBar,
    Toolbar,
    Button,
    Skeleton,
    Grid
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { db } from "../config/firebaseConfig";
import removeMarkdown from "remove-markdown";
import Contact from './Contact';
import content from '../data/content';
import { formatDistanceToNow } from 'date-fns';

const BlogHome = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const defaultProfile = "https://via.placeholder.com/50";

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "documents"));
                const postsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setPosts(postsData);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <AppBar
                position="sticky"
                color="inherit"
                sx={{
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    backdropFilter: "blur(8px)",
                    bgcolor: "rgba(255,255,255,0.8)",
                    fontFamily: "'Inter', sans-serif",
                    px: 2,
                }}
            >
                <Toolbar sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <img
                            src={content.header.logoSrc}
                            alt="Logo"
                            width="40"
                            height="40"
                            style={{ borderRadius: "8px" }}
                        />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontWeight: "bold",
                                letterSpacing: "0.5px",
                                fontSize: "1.2rem",
                                color: "black",
                            }}
                        >
                            {content.header.brand}
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>


            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography
                    variant="h1"
                    sx={{
                        mb: 6,
                        textAlign: "center",
                        position: 'relative',
                        '&:after': {
                            content: '""',
                            display: 'block',
                            width: '60px',
                            height: '4px',
                            bgcolor: 'primary.main',
                            mx: 'auto',
                            mt: 3
                        }
                    }}
                >
                    <Box
                        component="span"
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 800,
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            background: 'linear-gradient(45deg, #2b2b2b 30%, #4a4a4a 90%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '-1px',
                            lineHeight: 1.2
                        }}
                    >
                        Latest Articles
                    </Box>
                </Typography>

                <Grid container spacing={3}>
                    {loading ? (
                        Array(3).fill().map((_, i) => (
                            <Grid item xs={12} key={i}>
                                <Skeleton variant="rounded" height={200} />
                            </Grid>
                        ))
                    ) : (
                        posts.map((post) => {
                            const postDate = post.createdAt?.seconds
                                ? new Date(post.createdAt.seconds * 1000)
                                : null;

                            return (
                                <Grid item xs={12} key={post.id}>
                                    <Card sx={{
                                        boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                                        borderRadius: "16px",
                                        transition: "transform 0.2s, box-shadow 0.2s",
                                        '&:hover': {
                                            transform: "translateY(-4px)",
                                            boxShadow: "0px 6px 16px rgba(0,0,0,0.12)"
                                        }
                                    }}>
                                        <CardContent>
                                            <Typography variant="h5" sx={{
                                                fontWeight: 700,
                                                mb: 2,
                                                lineHeight: 1.3,
                                                fontSize: '1.5rem'
                                            }}>
                                                {post.title}
                                            </Typography>

                                            <Box display="flex" alignItems="center" gap={1.5} sx={{ mb: 2 }}>
                                                <Avatar
                                                    src={post.photo || defaultProfile}
                                                    sx={{
                                                        width: 44,
                                                        height: 44,
                                                        border: "2px solid #fff",
                                                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                                    }}
                                                />
                                                <Box>
                                                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                                        {post.userName || "Anonymous"}
                                                    </Typography>
                                                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                                        {postDate ? (
                                                            <>
                                                                {formatDistanceToNow(postDate, { addSuffix: true })}
                                                            </>
                                                        ) : "Unknown date"}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <Typography variant="body1" sx={{
                                                mb: 2,
                                                color: 'text.secondary',
                                                lineHeight: 1.6
                                            }}>
                                                {removeMarkdown(post.content.substring(0, 160))}...
                                            </Typography>

                                            <Button
                                                component={Link}
                                                to={`/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                                                variant="outlined"
                                                size="medium"
                                                endIcon={<ArrowForwardIcon />}
                                                sx={{
                                                    fontWeight: 600,
                                                    borderWidth: 2,
                                                    '&:hover': {
                                                        borderWidth: 2,
                                                        backgroundColor: 'action.hover'
                                                    }
                                                }}
                                            >
                                                Read More
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            );
                        })
                    )}
                </Grid>

                {posts.length > 0 && <Divider sx={{ my: 6 }} />}
            </Container>
            <Contact />
        </>
    );
};

export default BlogHome;