import React, { useState } from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/EditorPage.css";

const EditorPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    console.log("Title:", title);
    console.log("Content:", content);
  };
  return (
    <Container maxWidth="md" sx={{padding: 4}}>
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
      <Box display="flex" alignItems="center" sx={{marginTop: 2}}>
      </Box>

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
};

export default EditorPage;
