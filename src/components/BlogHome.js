import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { Card, CardContent, Typography, Container, Grid } from "@mui/material";
import { db } from "../config/firebaseConfig";

const BlogHome = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "documents"));
            const postsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPosts(postsData);
        };

        fetchPosts();
    }, []);

    return (
        <Container>
            <Typography variant="h4" sx={{ my: 3, fontWeight: "bold" }}>
                Blog Posts
            </Typography>
            <Grid container spacing={3}>
                {posts.map(post => (
                    <Grid item xs={12} md={6} key={post.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                    {post.title}
                                </Typography>
                                <Typography variant="body2">
                                    {post.content.substring(0, 100)}...
                                </Typography>
                                <Link to={`/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
                                    Read More
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default BlogHome;