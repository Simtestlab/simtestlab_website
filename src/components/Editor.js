import React, { useState } from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import ReactQuill from "react-quill";
import { marked } from "marked";
import "react-quill/dist/quill.snow.css";
import "../styles/EditorPage.css";

const EditorPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = async () => {
    const htmlContent = marked(content);
    try {
      const response = await fetch('/.netlify/functions/savecontent', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title || "document",
          content: htmlContent,
        }),
      });

      console.log("Response:", response.status);

      const result = await response.json();
      if (response.ok) {
        alert("Document saved successfully!");
      } else {
        alert("Failed to save document.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error saving document.");
    }
  };
  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 3, fontWeight: "bold" }}>
        Create New Document
      </Typography>

      <TextField
        fullWidth
        label=" Enter Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ marginBottom: 3 }}
      />

      <ReactQuill
        value={content}
        onChange={setContent}
        placeholder="Start typing here..."
        theme="snow"
        style={{ height: "300px", marginBottom: "20px" }}
      />

      <Box sx={{ marginTop: 3, display: "flex", gap: 2, padding: "20px" }}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
        <Button variant="outlined" color="error">
          Cancel
        </Button>
      </Box>
    </Container>
  );
}

export default EditorPage;
