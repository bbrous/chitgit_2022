import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";


// ******   CRITICAL  ******************************************
// ******   CRITICAL  ******************************************

// - Substitute local style sheet for distributeed ---
// import "react-quill/dist/quill.snow.css";
// import "react-quill/dist/quill.bubble.css";
// import "react-quill/dist/quill.core.css";



import './quillChronicleStyle.css'
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// ******   CRITICAL  ******************************************
// ******   CRITICAL  ******************************************

const QuillWrapper = styled(ReactQuill)({
 width: '100%',
 


})


export function EditorShort(props) {
  const [theme, setTheme] = useState("snow");
  const { id, value, inputRef, placeholder, onChange, IniitalValue } = props;
console.log('[ EditorShort ] IniitalValue ', IniitalValue);
  return (
    <QuillWrapper
      id={id}
      ref={inputRef}
      theme={theme}
      onChange={onChange}
      defaultValue={IniitalValue}
      modules={{
        toolbar: {
          ...EditorShort.modules.toolbar,
          handlers: {
            //   image: handleImageUpload,
          },
        },
        ...EditorShort.modules,
      }}
      formats={EditorShort.formats}
      bounds={".app"}
      placeholder={placeholder ?? ""}
      
    />
  );
}

/*
 * Quill modules to attach to editorShort
 * See https://quilljs.com/docs/modules/ for complete options
 */
EditorShort.modules = {
  toolbar: [
    // [{ header: '1' }, { header: '2' }, { font: [] }],
    // [{ size: [] }],
    // [{ size: ["small", false, "large" ] }], // custom dropdown
    // [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline"],

    ["link" ],
    


  ]
};
/*
 * Quill editorShort formats
 * See https://quilljs.com/docs/formats/
 */
EditorShort.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "align",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color"
];

/*
 * PropType validation
 */
EditorShort.propTypes = {
  placeholder: PropTypes.string,
};

 
