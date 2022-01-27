import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";


// ******   CRITICAL  ******************************************
// ******   CRITICAL  ******************************************

// - Substitute local style sheet for distributeed ---
import "react-quill/dist/quill.snow.css";
// import "react-quill/dist/quill.bubble.css";
// import "react-quill/dist/quill.core.css";



import './quillStyle.css'
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// ******   CRITICAL  ******************************************
// ******   CRITICAL  ******************************************

const QuillWrapper = styled(ReactQuill)({
 width: '100%'


})


export function Editor(props) {
  const [theme, setTheme] = useState("snow");
  const { id, value, inputRef, placeholder, onChange, IniitalValue } = props;
console.log('[ Editor ] IniitalValue ', IniitalValue);
  return (
    <QuillWrapper
      id={id}
      ref={inputRef}
      theme={theme}
      onChange={onChange}
      defaultValue={IniitalValue}
      modules={{
        toolbar: {
          ...Editor.modules.toolbar,
          handlers: {
            //   image: handleImageUpload,
          },
        },
        ...Editor.modules,
      }}
      formats={Editor.formats}
      bounds={".app"}
      placeholder={placeholder ?? ""}
      
    />
  );
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    // [{ header: '1' }, { header: '2' }, { font: [] }],
    // [{ size: [] }],
    // [{ size: ["small", false, "large" ] }], // custom dropdown
    // [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],

    ["link", 
    // "image",
    //  "video"
    ],
    
    [{ color: [] } ], // dropdown with defaults from theme
    // ["clean"],
 
    [{ size: ["small", false, "large" ] },
      // { font: [] },
      { align: [] },
      { list: "ordered" },
      { list: "bullet" },
      
    ],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
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
Editor.propTypes = {
  placeholder: PropTypes.string,
};

 
