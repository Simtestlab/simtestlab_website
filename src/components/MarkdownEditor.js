import React, { useEffect, useRef, useCallback , useState} from "react";
import EasyMDE from "easymde";
import "easymde/dist/easymde.min.css";
import PropTypes from "prop-types";
import "../styles/EditorPage.css";
import { Box, CircularProgress, Typography } from "@mui/material";
import imageCompression from "browser-image-compression";
import uploadToGithub from "../config/imageUpload";

const MarkdownEditor = ({ value, onChange, height = "80vh" }) => {
	const editorInstance = useRef(null);
	const fileInputRef = useRef(null);
	const [isUploading, setUploading] = useState(false);
	const [isDragging, setIsDragging] = useState(false);

	const handleImageUpload = useCallback(async (file) => {
		if (!file) return;

		setUploading(true);

		try {
			const options = {
				maxSizeMB: 1.0,
				maxWidthorHeight: 1000,
				useWebWorker: true,
			};

			const compressedFile = await imageCompression(file, options);

			const imageUrl = await uploadToGithub(compressedFile);
			insertImageMarkdown(imageUrl);
		} catch (error) {
			console.error("Error uploading image:", error);
		} finally {
			setUploading(false);
		}
	}, []);

	const insertImageMarkdown = (url) => {
		if (!editorInstance.current) return;
		const cm = editorInstance.current.codemirror;
		const cursorPos = cm.getCursor();
		const markdownSyntax = `\n![Image](${url})\n`;
		cm.replaceRange(markdownSyntax, cursorPos);
	};

	useEffect(() => {
		if (!editorInstance.current) {
			const textarea = document.getElementById("markdown-editor");
			if (!textarea) return;

			editorInstance.current = new EasyMDE({
				element: textarea,
				spellChecker: false,
				toolbar: ["bold", "italic", "heading",
					"|", "unordered-list", "ordered-list",
					"|", "preview", "guide",
					{
						name: "Upload-image",
						action: function customFunction(editor) {
							fileInputRef.current.click();
						  },
						className: "fa fa-image",
						title: "Upload Image"
					}
				],
				placeholder: "Start typing Markdown here...",
				initialValue: value,
				autofocus: true,
				minHeight: height,
				autoDownloadFontAwesome: false,
			});

			const codemirrorWrapper = editorInstance.current.codemirror.getWrapperElement();
			const codemirrorScroller = editorInstance.current.codemirror.getScrollerElement();

			codemirrorWrapper.style.height = height;
			codemirrorScroller.style.overflow = "auto";

			codemirrorScroller.style.paddingBottom = "20px";

			editorInstance.current.codemirror.on("change", () => {
				onChange(editorInstance.current.value());
			});
		}
	}, [value, onChange, height]);

	useEffect(() => {
		const handleDragOver = (event) => {
			event.preventDefault();
			setIsDragging(true);
		};

		const handleDragLeave = () => {
			setIsDragging(false);
		};

		const handleDrop = (event) => {
			event.preventDefault();
			setIsDragging(false);

			const file = event.dataTransfer.files[0];
			if (file && file.type.startsWith("image/")) {
				handleImageUpload(file);
			}
		};

		window.addEventListener("dragover", handleDragOver);
		window.addEventListener("dragleave", handleDragLeave);
		window.addEventListener("drop", handleDrop);

		return () => {
			window.removeEventListener("dragover", handleDragOver);
			window.removeEventListener("dragleave", handleDragLeave);
			window.removeEventListener("drop", handleDrop);
		};
	}, [handleImageUpload]);

	return (
		<Box>
			<input
				type="file"
				accept="image/*"
				ref={fileInputRef}
				style={{ display: "none" }}
				onChange={(e) => handleImageUpload(e.target.files[0])}
			/>

			{isDragging && (
				<Box sx={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					backgroundColor: "rgba(0, 0, 0, 0.3)",
					color: "#fff",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontSize: "24px",
					fontWeight: "bold",
					zIndex: 9999
				}}>
					Drop your image here...
				</Box>
			)}

			<textarea id="markdown-editor" />

			{isUploading && (
				<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }}>
					<CircularProgress size={24} />
					<Typography variant="body2" sx={{ ml: 2 }}>Uploading...</Typography>
				</Box>
			)}
		</Box>
	);
};

MarkdownEditor.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	height: PropTypes.string,
};

export default MarkdownEditor;
