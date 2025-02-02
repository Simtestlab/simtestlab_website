import React, { useState, useEffect, useCallback } from "react";
import { Container, TextField, Button, Box, Typography, Chip } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { getDocumentById, updateDocument } from "../config/firebaseConfig";
import MarkdownEditor from "./MarkdownEditor";
import { auth } from "../config/firebaseConfig";

const EditDocument = () => {
    const { docId } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchDocument = useCallback(async () => {
        try {
            const document = await getDocumentById(docId);
            console.log("Fetched Document: ", document);

            if (!document) {
                setError("Document not found.");
                setLoading(false);
                return;
            }

            const user = auth.currentUser;
            if (!user || user.displayName !== document.userName) {
                setError("You do not have permission to edit this document.");
                setLoading(false);
                return;
            }

            setTitle(document.title || "");
            setDescription(document.description || "");
            setContent(document.content || "");
            setTags(document.tags || []);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching document:", err);
            setError("Failed to load document.");
            setLoading(false);
        }
    }, [docId]);

    useEffect(() => {
        fetchDocument();
    }, [fetchDocument]);

    const handleSave = async () => {
        if (!title || !content) {
            alert("Title and content are required.");
            return;
        }

        const success = await updateDocument(docId, { title, description, content, tags });
        if (success) {
            alert("Document updated successfully!");
            navigate('/blogs');
        }
    };

    const handleTagAdd = (e) => {
        if (e.key === "Enter" && tagInput.trim()) {
            setTags([...tags, tagInput.trim()]);
            setTagInput("");
            e.preventDefault();
        }
    };

    const handleTagRemove = (tagToDelete) => {
        setTags(tags.filter(tag => tag !== tagToDelete));
    };

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container maxWidth="md" sx={{ padding: 4 }}>
            <Typography variant="h5" sx={{ marginBottom: 3, fontWeight: "bold" }}>
                Edit Document
            </Typography>

            <TextField
                fullWidth
                label="Enter Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ marginBottom: 3 }}
            />

            <MarkdownEditor value={content} onChange={setContent} height="70vh" />

            <TextField 
                fullWidth
                label="Enter Tags"
                variant="outlined"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagAdd}
                sx={{ marginBottom: 3 }}
            />

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: 3 }}>
                {tags.map((tag, index) => (
                    <Chip key={index} label={tag} onDelete={() => handleTagRemove(tag)} />
                ))}
            </Box>

            <Box sx={{ marginTop: 3, display: "flex", gap: 2, padding: "20px" }}>
                <Button variant="contained" color="primary" onClick={handleSave}>
                    Update
                </Button>
            </Box>
        </Container>
    );
};

export default EditDocument;
