import React, { useState } from "react";
import { Container, TextField, Button, Box, Typography, Chip } from "@mui/material";
import "easymde/dist/easymde.min.css";
import "../styles/EditorPage.css";
import { saveDocument } from '../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import MarkdownEditor from "./MarkdownEditor";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const EditorPage = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [content, setContent] = useState("");
	const [tags, setTags] = useState([]);
	const [tagInput, setTagInput] = useState("");

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

		await saveDocument(title, description,content, tags);
		alert("Document saved successfully.!");
		navigate('/blogs');
	};

	const handleLogout = async () => {
		await signOut(auth);
		navigate('/blogs');
	}

	const handleTagAdd = (e) => {
		if (e.key === "Enter" && tagInput.trim()) {
			setTags([...tags, tagInput.trim()]);
			setTagInput("");
			e.preventDefault();
		}
	}

	const handleTagRemove = (tagToDelete) => {
		setTags(tags.filter(tag => tag !== tagToDelete));
	};

	return (
		<Container maxWidth="md" sx={{ padding: 4 }}>
			<Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
				<Button onClick={handleLogout}>Logout</Button>
			</Box>

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

			<TextField 
				fullWidth
				label="Enter Short Description"
				variant="outlined"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				sx={{ marginBottom: 3 }}
				multiline
				rows={2}
			/>

			<MarkdownEditor value={content} onChange={setContent} height="50vh"/>

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
					Save
				</Button>
			</Box>
		</Container>
	);
}

export default EditorPage;