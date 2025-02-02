import React, { useEffect, useState } from "react";
import { getDocuments } from '../config/firebaseConfig';
import { auth } from '../config/firebaseConfig';
import { Link } from 'react-router-dom';
import { Container, Card, CardContent, Typography, Button } from "@mui/material";

const BlogList = () => {
    const [documents, setDocuments] = useState([]);
    const user = auth.currentUser;

    useEffect(() => {
        const fetchDocs = async () => {
            const docs = await getDocuments();
            setDocuments(docs);
        };

        fetchDocs();
    }, []);

    return (
        <Container maxWidth="md">
            <Typography variant="h5" sx={{ marginBottom: 3, fontWeight: "bold" }}>
                My Documents
            </Typography>

            {documents.map((doc) => (
                <Card key={doc.id} sx={{ marginBottom: 2, padding: 2 }}>
                    <CardContent>
                        <Typography variant="h6">{doc.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {doc.description}
                        </Typography>

                        {user && user.displayName === doc.userName && (
                            <Button
                                component={Link}
                                to={`/edit/${doc.id}`}
                                variant="outlined"
                                color="primary"
                                sx={{ marginTop: 2 }}
                            >
                                Edit
                            </Button>
                        )}
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default BlogList;
