import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { chitVeryLightBlue } from '../styles/colors';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';






import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// ------
const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',


 
  [theme.breakpoints.down('xs')] : {
 
  
 }
})

const StyledButton = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'orange',
  fontSize: '.65rem',
  height: '1.3rem',
  width: '1.3rem',
  cursor: 'pointer',
border: 'none',
'&:hover': {
  backgroundColor: chitVeryLightBlue,
  borderRadius: '5px'

},
  [theme.breakpoints.down('xs')] : {
 
  
 }
})

const CopySharedChitLink = (props) => {
  let chitLink = props.chitLink
   

  let initialState = {
    value: chitLink,
    copied: false,
  }

  const [state, setState] = useState(initialState)
 

    return (
      <Wrapper>
        <input type = 'hidden' value={state.value || ''}
          onChange={({target: {value}}) =>setState({value, copied: false})} />

     

        <CopyToClipboard text={state.value}
          onCopy={() => setState({copied: true})}>
          <StyledButton 
          size = 'small' 
          variant="outlined" 
          
           
          >
        <ContentCopyIcon sx = {{fontSize: '.95rem'}}/>
      </StyledButton>
        </CopyToClipboard >

        {state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </Wrapper>
    );
  }


export default CopySharedChitLink


