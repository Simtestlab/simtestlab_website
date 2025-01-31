import React, { useEffect, useRef } from "react";
import EasyMDE from "easymde";
import "easymde/dist/easymde.min.css";
import PropTypes from "prop-types";
import "../styles/EditorPage.css";

const MarkdownEditor = ({ value, onChange, height = "80vh" }) => {
  const editorInstance = useRef(null);

  useEffect(() => {
    if (!editorInstance.current) {
      const textarea = document.getElementById("markdown-editor");
      if (!textarea) return;

      editorInstance.current = new EasyMDE({
        element: textarea,
        spellChecker: false,
        toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "preview", "guide"],
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

      editorInstance.current.codemirror.on("beforeChange", (cm, change) => {
        setTimeout(() => {
          cm.scrollIntoView({ from: cm.getCursor(), to: cm.getCursor() }, 100);
        }, 10);
      });
    }
  }, [value, onChange, height]);

  return <textarea id="markdown-editor" />;
};

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  height: PropTypes.string,
};

export default MarkdownEditor;
