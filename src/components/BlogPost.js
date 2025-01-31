import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import { marked } from "marked";
import { db } from "../config/firebaseConfig";
import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

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

            setPost(foundPost);
        };

        fetchPost();
    }, [slug]);

    if (!post) return <Typography variant="h5">Loading...</Typography>;

    marked.setOptions({
        breaks: true,
        gfm: true,
        highlight: function (code, lang) {
            return hljs.highlightAuto(code).value;
        },
    });

    const htmlContent = DOMPurify.sanitize(marked(post.content));

    return (
        <Container>
            <Card sx={{ my: 4, p: 3 }}>
                <CardContent>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                        {post.title}
                    </Typography>
                    <Box 
                        sx={{
                            "& h1": { fontSize: "2rem", fontWeight: "bold", mb: 2 },
                            "& h2": { fontSize: "1.75rem", fontWeight: "bold", mb: 2 },
                            "& h3": { fontSize: "1.5rem", fontWeight: "bold", mb: 2 },
                            "& p": { fontSize: "1rem", color: "#333", mb: 2 },
                            "& ul": { paddingLeft: "20px" },
                            "& ol": { paddingLeft: "20px" },
                            "& li": { marginBottom: "5px" },
                            "& code": { 
                                backgroundColor: "#f4f4f4",
                                padding: "4px 6px",
                                borderRadius: "4px",
                                fontFamily: "monospace",
                                color: "#d63384"
                            },
                            "& pre": { 
                                backgroundColor: "#282c34",
                                color: "#fff",
                                padding: "10px",
                                borderRadius: "5px",
                                overflowX: "auto",
                                whiteSpace: "pre-wrap",
                                fontFamily: "monospace"
                            },
                            "& pre code": { 
                                backgroundColor: "transparent",
                                color: "#fff",
                                display: "block",
                                padding: "0",
                                fontSize: "14px"
                            }
                        }}
                        dangerouslySetInnerHTML={{ __html: htmlContent }} 
                    />
                </CardContent>
            </Card>
        </Container>
    );
};

export default BlogPost;
