import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// ------


const StyledButton = styled(Button)({
  color: 'orange',
  fontSize: '.5rem',
border: 'none',
'&:hover': {border: 'none'},
  [theme.breakpoints.down('xs')] : {
 
  
 }
})

const CopySharedChitLink = (props) => {
  let chitLink = props.chitLink
  // state = {
  //   value: 'http://www.visitell.com/1234',
  //   copied: false,
  // };

  let initialState = {
    value: chitLink,
    copied: false,
  }

  const [state, setState] = useState(initialState)
 

    return (
      <div>
        <input type = 'hidden' value={state.value}
          onChange={({target: {value}}) =>setState({value, copied: false})} />

     

        <CopyToClipboard text={state.value}
          onCopy={() => setState({copied: true})}>
          <StyledButton 
          size = 'small' 
          variant="outlined" 
          startIcon={<ContentCopyIcon />}
           
          >
        Copy
      </StyledButton>
        </CopyToClipboard>

        {state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div>
    );
  }


export default CopySharedChitLink


