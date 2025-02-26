import React, { useState, useEffect, useCallback } from "react";
import {
    Fade,
    Grow,
    Slide,
    Skeleton,
    Container,
    Typography,
    Drawer,
    Box,
    AppBar,
    Toolbar,
    Avatar,
    Chip,
    IconButton
} from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { useScrollTrigger, Zoom } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { marked } from "marked";
import { db } from "../config/firebaseConfig";
import EditIcon from '@mui/icons-material/Edit';
import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import content from '../data/content';
import { formatDistanceToNow } from 'date-fns';
import { collection, getDocs } from "firebase/firestore";
import { auth } from '../config/firebaseConfig';
import Contact from "./Contact";
import { Helmet } from "react-helmet-async";
import SidebarNavigation from "./Sidebar";
import { v4 as uuidv4 } from "uuid";

const fadeIn = {
    '@keyframes fadeIn': {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    },
    animation: 'fadeIn 0.6s ease-out',
};

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [headings, setHeadings] = useState([]);
    const [loadedImages, setLoadedImages] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const defaultProfile = "https://via.placeholder.com/50";
    const trigger = useScrollTrigger({ threshold: 100 });
    const user = auth.currentUser;

    const handleImageLoad = useCallback(() => {
        setLoadedImages(prev => prev + 1);
    }, []);

    useEffect(() => {
        const fetchPost = async () => {
            const querySnapshot = await getDocs(collection(db, "documents"));
            const postsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            const foundPost = postsData.find(post =>
                post.title.toLowerCase().replace(/\s+/g, "-") === slug
            );

            if (foundPost) {
                setPost(foundPost);
                const extractedHeadings = extractHeadings(foundPost.content);
                setHeadings(extractedHeadings);
            }
        };

        fetchPost();
    }, [slug]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!post) return;

        const observer = new MutationObserver((mutations) => {
            mutations.forEach(() => {
                document.querySelectorAll("img").forEach((img) => {
                    if (img.complete) {
                        handleImageLoad();
                    } else {
                        img.addEventListener("load", handleImageLoad);
                    }
                });
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, [post, handleImageLoad]);

    const extractHeadings = (markdownContent) => {
        const lines = markdownContent.split("\n");
        const headings = [];

        lines.forEach((line) => {
            const match = line.match(/^(#{1,3})\s(.+)/);
            if (match) {
                const level = match[1].length;
                const text = match[2].trim();
                const id = uuidv4();

                headings.push({ id, level, text });
            }
        });
        return headings;
    }

    if (!post) return (
        <Container>
            <Grow in={true}>
                <Skeleton variant="rounded" height={400} sx={{ borderRadius: 4 }} />
            </Grow>
        </Container>
    );

    marked.setOptions({
        breaks: true,
        gfm: true,
        highlight: function (code, lang) {
            return hljs.highlightAuto(code).value;
        },
    });

    const htmlContent = post.content ? DOMPurify.sanitize(marked(post.content)) : "";
    const postDate = post.createdAt?.seconds ? new Date(post.createdAt.seconds * 1000) : null;
    const updatedDate = post.updatedAt?.seconds ? new Date(post.updatedAt.seconds * 1000) : null;

    return (
        <>
            {post && post.metadata && (
                <Helmet>
                    <title>{post.metadata.seoTitle}</title>
                    <meta name="description" content={post.metadata.seoDescription} />
                    <meta name="keywords" content={post.metadata.seoKeywords} />
                    <meta property="og:title" content={post.metadata.seoTitle} />
                    <meta property="og:description" content={post.metadata.seoDescription} />
                    <meta property="og:image" content={post.metadata.ogImage} />
                    <meta property="og:url" content={post.metadata.ogUrl} />
                </Helmet>
            )}
            <AppBar
                position="sticky"
                color="inherit"
                sx={{
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    backdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
                    bgcolor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.8)",
                    fontFamily: "'Inter', sans-serif",
                    px: 2,
                    transition: 'all 0.3s ease',
                }}
            >
                <Toolbar sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Zoom in={trigger}>
                        <IconButton
                            component={Link}
                            to="/blogs"
                            sx={{
                                mr: 1,
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    backgroundColor: 'rgba(0,0,0,0.05)'
                                }
                            }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                    </Zoom>
                    <Slide direction="down" in={!trigger} mountOnEnter unmountOnExit>
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
                    </Slide>
                </Toolbar>
            </AppBar>
            <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: 320,
                        flexShrink: 0,
                        height: "calc(100vh - 64px)",
                        "& .MuiDrawer-paper": {
                            width: 320,
                            boxSizing: "border-box",
                            backgroundColor: "#f8f9fa",
                            p: 2,
                            height: "calc(100vh - 64px)",
                            top: "64px",
                            position: "fixed",
                        },
                    }}
                >
                    <SidebarNavigation headings={headings} />
                </Drawer>

                <Box sx={{ flexGrow: 1, width: "calc(100vw - 320px)", overflowY: "auto", height: "100vh" }}>
                    <Container disableGutters sx={{
                        width: "100%",
                        maxWidth: "100%",
                        flexGrow: 1,
                        overflowY: "auto",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        padding: "20px",
                    }}>
                        <Fade in={true} timeout={800}>
                            <Box>
                                <Box>
                                    <Typography variant="h2" sx={{
                                        fontWeight: 800,
                                        mb: 3,
                                        fontSize: { xs: '2rem', md: '2.5rem' },
                                        lineHeight: 1.2,
                                        fontFamily: "'Playfair Display', serif"
                                    }}>
                                        {post.title}
                                    </Typography>
                                </Box>

                                <Slide direction="up" in={true} timeout={600}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        mb: 4,
                                    }}>
                                        <Avatar
                                            src={post.authorPhoto || defaultProfile}
                                            sx={{
                                                width: 56,
                                                height: 56,
                                                border: "2px solid #fff",
                                                boxShadow: 3,
                                                transition: 'transform 0.3s',
                                                '&:hover': {
                                                    transform: 'scale(1.1)'
                                                }
                                            }}
                                        />
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                {post.userName || "Anonymous"}
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                                {postDate && (
                                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                        Published: {formatDistanceToNow(postDate, { addSuffix: true })}
                                                    </Typography>
                                                )}
                                                {updatedDate && postDate?.getTime() !== updatedDate?.getTime() && (
                                                    <Zoom in={true}>
                                                        <Chip
                                                            label={`Updated ${formatDistanceToNow(updatedDate, { addSuffix: true })}`}
                                                            size="small"
                                                            sx={{
                                                                height: '22px',
                                                                fontSize: '0.75rem',
                                                                bgcolor: 'action.selected',
                                                                transition: 'all 0.3s'
                                                            }}
                                                        />
                                                    </Zoom>
                                                )}
                                                {user && post.userId === user.uid && (
                                                    <IconButton
                                                        component={Link}
                                                        to={`/edit/${post.id}`}
                                                        sx={{
                                                            color: "primary.main",
                                                            backgroundColor: "rgba(0, 0, 0, 0.05)",
                                                            "&:hover": {
                                                                backgroundColor: "rgba(0, 0, 0, 0.1)",
                                                            },
                                                            width: 36,
                                                            height: 36,
                                                            borderRadius: "50%",
                                                            marginLeft: "auto"
                                                        }}
                                                    >
                                                        <EditIcon />
                                                    </IconButton>
                                                )}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Slide>

                                <Box
                                    sx={{
                                        "& h1": {
                                            fontSize: "2.5rem",
                                            fontWeight: 800,
                                            mb: 3,
                                            mt: 4,
                                            fontFamily: "'Playfair Display', serif",
                                            ...fadeIn
                                        },
                                        "& h2": {
                                            fontSize: "2rem",
                                            fontWeight: 700,
                                            mb: 2,
                                            mt: 3,
                                            fontFamily: "'Playfair Display', serif"
                                        },
                                        "& h3": {
                                            fontSize: "1.75rem",
                                            fontWeight: 600,
                                            mb: 2,
                                            mt: 3
                                        },
                                        "& p": {
                                            fontSize: "1.2rem",
                                            color: "text.primary",
                                            mb: 3,
                                            lineHeight: 1.8,
                                            fontFamily: "'Merriweather', serif"
                                        },
                                        "& img": {
                                            maxWidth: "100%",
                                            height: "auto",
                                            borderRadius: 2,
                                            my: 3,
                                            boxShadow: 3,
                                            opacity: loadedImages ? 1 : 0,
                                            transition: 'opacity 0.5s ease-in',
                                        },
                                        "& pre": {
                                            backgroundColor: "#1e1e1e",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "8px",
                                            overflowX: "auto",
                                            transform: 'translateX(-20px)',
                                            opacity: 0,
                                            animation: 'slideIn 0.5s ease-out forwards',
                                            animationDelay: '0.3s',
                                            '@keyframes slideIn': {
                                                to: {
                                                    transform: 'translateX(0)',
                                                    opacity: 1
                                                }
                                            }
                                        },
                                        "& blockquote": {
                                            borderLeft: "4px solid",
                                            borderColor: "primary.main",
                                            pl: 3,
                                            my: 3,
                                            color: "text.secondary",
                                            fontStyle: "italic",
                                            opacity: 0,
                                            animation: 'fadeIn 0.6s ease-out forwards',
                                            animationDelay: '0.2s'
                                        },
                                        "& code": {
                                            fontFamily: "'Fira Code', monospace",
                                            fontSize: "0.9rem",
                                        }
                                    }}
                                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                                />
                                {Array.from(document.querySelectorAll('img')).forEach(img => {
                                    img.onload = handleImageLoad;
                                })}
                            </Box>
                        </Fade>
                    </Container>
                </Box>
            </Box>

            <Box sx={{ width: "100vw", mt: 2 }}>
                <Contact />
            </Box>
        </>
    );
};

export default BlogPost;