import React, { useState, useRef } from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import "easymde/dist/easymde.min.css";
import "../styles/EditorPage.css";
import { saveDocument } from '../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import MarkdownEditor from "./MarkdownEditor";

const EditorPage = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const navigate = useNavigate();

	const handleSave = async () => {
		if (!title) {
			alert("Please provide file name!");
			return;
		}

		if (!content) {
			alert("Content is empty");
			return;
		}

		await saveDocument(title, content);
		alert("Document saved successfully.!");
		navigate('/blogs');
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

			<MarkdownEditor value={content} onChange={setContent} height="50vh"/>

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