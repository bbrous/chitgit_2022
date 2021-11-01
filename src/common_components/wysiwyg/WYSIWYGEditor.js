import React, { useState, useEffect } from "react";


/*  Read me: 

The data sent from the WYSIWG to Redux or the database must be in the form
of a stringified JSON block...    ' {JSON OBJECT} '

To database:  
   1.  create stringified JSON object ... use draftToString ... escaped safe text

From database: 
   2.  unescape DraftToString
   3.  convert from Raw ... use stringToDraft 

*/





// Components
import { EditorState, convertToRaw } from "draft-js";
import {ContentState, convertFromHTML }from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
 

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./WYSIWYG.scss";

import PaletteIcon from '@material-ui/icons/Palette';

import { styled, createMuiTheme } from "@material-ui/core/styles"

/*


*/ 



const WYSIWYGEditor = props => {
  let initialNote = props.initialNote

  console.log('WYSIWYG EDITOR initialNote - ', initialNote)
  

  
  const [editorState, setEditorState] = useState(initialNote);


  
  const onEditorStateChange = editorState => {
    setEditorState(editorState);
    // console.log("PROPS ==> ", props);
    
    return props.onChange(
      // draftToHtml(convertToRaw(editorState.getCurrentContent()))

      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
  };

  return (
 
      <div className="editor">
        
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          onEditorStateChange={onEditorStateChange}
          
          // toolbar={{
          //   inline: { inDropdown: true },
          //   list: { inDropdown: true },
          //   textAlign: { inDropdown: true },
          //   link: { inDropdown: true },
          //   history: { inDropdown: true },
          // }}

          toolbar ={
            {
            options:['inline', 'colorPicker', 'list', 'fontSize' ,], // This is where you can specify what options you need in
            //the toolbar and appears in the same order as specified
            inline:
            {
            options:['bold', 'italic', 'underline',] // this can be specified as well, toolbar wont have
            //strikethrough, 'monospace', 'superscript', 'subscript'
            },

            list: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['unordered', 'ordered', 'indent', 'outdent'],
              // unordered: { icon: unordered, className: undefined },
              // ordered: { icon: ordered, className: undefined },
              // indent: { icon: indent, className: undefined },
              // outdent: { icon: outdent, className: undefined },
            },
     colorPicker: {
   
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    colors: ['rgb(0,0,0)', 'rgb(97,189,109)', 'rgb(184,49,47)','rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)', 'rgb(255,0,0)', 'rgb(255,255,0)',
      'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(57,57,57)','rgb(65,168,95)', 'rgb(0,168,133)',
      'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)',
      'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
      'rgb(239,239,239)',  'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
       'rgb(124,112,107)', 'rgb(209,213,216)',  ],
  },

  fontSize: {
    // icon: fontSize,
    options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
  },
            }
            }





        />
      </div>
     
  );
};

export default WYSIWYGEditor;
