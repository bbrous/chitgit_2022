import React, { forwardRef, HTMLAttributes } from "react";
import classNames from "classnames";

import{chitOrange ,  chitOrangeVeryLight,  lightGrey,  mediumLightGrey, veryLightGrey, mediumGrey } from '../../../../../../../styles/colors'

import { Action, Handle, Remove } from "../../components";
import styles from "./TreeItem.module.css";
import { styled, createMuiTheme } from "@material-ui/core/styles"
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
// import NotePopup from '../../../../noteComponents/NotePopup'

// import MenuPopupTasks from './MenuPopupTasks'
import CheckIcon from '@material-ui/icons/Check';

// import NotePopup from './NotePopup'



import { makeStyles } from '@material-ui/core/styles';


import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const collapseIcon = (
  <svg width="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 41">
    <path d="M30.76 39.2402C31.885 40.3638 33.41 40.995 35 40.995C36.59 40.995 38.115 40.3638 39.24 39.2402L68.24 10.2402C69.2998 9.10284 69.8768 7.59846 69.8494 6.04406C69.822 4.48965 69.1923 3.00657 68.093 1.90726C66.9937 0.807959 65.5106 0.178263 63.9562 0.150837C62.4018 0.123411 60.8974 0.700397 59.76 1.76024L35 26.5102L10.24 1.76024C9.10259 0.700397 7.59822 0.123411 6.04381 0.150837C4.4894 0.178263 3.00632 0.807959 1.90702 1.90726C0.807714 3.00657 0.178019 4.48965 0.150593 6.04406C0.123167 7.59846 0.700153 9.10284 1.75999 10.2402L30.76 39.2402Z" />
  </svg>
);



const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
    // backgroundColor: 'red',
    maxWidth: '20rem',
    
  },

}));




export interface Props extends HTMLAttributes<HTMLLIElement> {
  childCount?: number;
  clone?: boolean;
  collapsed?: boolean;
  depth: number;
  disableInteraction?: boolean;
  disableSelection?: boolean;
  ghost?: boolean;
  handleProps?: any;
  indicator?: boolean;
  indentationWidth: number;
  value: string;
  onCollapse?(): void;
  onRemove?(): void;
  wrapperRef?(node: HTMLLIElement): void;
  
}



 
// import Button from '@material-ui/core/Button';
// -----------------------

const theme = createMuiTheme(); // allows use of mui theme in styled component

const TestWrapper= styled('div')({
  // display: 'flex',
  // justifyContent: 'flex-start',
  // alignItems: 'flex-start',
  // backgroundColor: 'orange',
  borderRadius: '5px',
  border: '1px solid green',
  height: '1.75rem',
  width: '20rem',
  marginBottom: '.7rem',
  fontSize: '.75rem',
  color: 'red',
 
  cursor: 'pointer',
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const InternalWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  // backgroundColor: 'pink',
 
  height: '100%',
  width: '100%',

  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})




const ClockIcon= styled(QueryBuilderIcon)({
  
  color:'red',
  fontSize: '1rem',
  margin: '.25rem .5rem',
 cursor: 'pointer',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const ValueDiv= styled('div')({
  
  
  fontSize: '.75rem',


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const IconWrapper= styled('div')({
  
  
  position: 'absolute',
  bottom: '-.3rem',
  right: '-.2rem',
  color: 'blue',


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})
const CheckCircleWrapper= styled('div')({
  
  width: '1.1rem',
   
  // border: '1px solid grey',
 
  marginRight: '1rem',
  // color: mediumLightGrey,
 
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CheckCircle= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '.8rem',
  height: '.8rem',
  border: '1px solid grey',
  borderRadius: '200px',
  '&:hover' : {
     
    border: '1px solid orange'
  },
  // color: mediumLightGrey,
  
  cursor: 'pointer',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CheckCircleCompleted = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '.8rem',
  height: '.8rem',
  border: '1px solid #CFD0D1',
  borderRadius: '200px',
   
  color: 'white' ,
  backgroundColor: mediumGrey,


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const FormattedCheckIcon = styled(CheckIcon)({

   
  color: 'white' ,
   fontSize: '.6rem',


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// =======================================================

export const TreeItem = forwardRef<HTMLDivElement, Props>(
  (
    {
      childCount,
      clone,
      depth,
      disableSelection,
      disableInteraction,
      ghost,
      handleProps,
      indentationWidth,
      indicator,
      collapsed,
      onCollapse,
      onRemove,
      style,
      value,
      wrapperRef,
      ...props
    },
    ref
  ) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handlePopoverOpen = (event : any) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);


let completed : boolean = true;

    return (
      <li
        className={classNames(
          styles.Wrapper,
          clone && styles.clone,
          ghost && styles.ghost,
          indicator && styles.indicator,
          disableSelection && styles.disableSelection,
          disableInteraction && styles.disableInteraction
        )}
        ref={wrapperRef}
        style={
          {
            "--spacing": `${indentationWidth * depth}px`
          } as React.CSSProperties
        }
        {...props}
      >

{/* =====  TEST WRAPPER    ============================================ */}


        <TestWrapper className={styles.TreeItem} ref={ref} style={style}>
          <IconWrapper>

          {/* <NotePopup 
                noteId = 'note1' 
                type = 'task'
                spotlightId = 'spot_1'
                
                taskId = 'spot_1_task_1' // case task is a spotlight here
                noteHolderId = 'spot_1_task_1'

                
              /> */}
            <div>  note  </div>
            
            
            
             </IconWrapper>
         
                   <Handle {...handleProps} />
          {onCollapse && (
            <Action
              onClick={onCollapse}
              className={classNames(
                styles.Collapse,
                collapsed && styles.collapsed
              )}
            >
              {collapseIcon}
            </Action>
          )}
         
          <CheckCircleWrapper
            
            // onClick={()=> handleTaskCompletedStatus( taskId)}
            
            >

            {! completed && 
              <CheckCircle/>
              }
              { completed && 
              <CheckCircleCompleted><FormattedCheckIcon /> </CheckCircleCompleted> 
              }


              
              
              </CheckCircleWrapper>




{/* =====    DATA HERE ============================================ */}

          

          
        <span aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}className={styles.Text}>{value}</span>
     <span/>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <ValueDiv >{value}</ValueDiv >
      </Popover>
          
          
          





          {!clone && onRemove && <Remove onClick={onRemove} />}

          {clone && childCount && childCount > 1 ? (
            <span className={styles.Count}>{childCount}</span>
          ) : null}
        </TestWrapper>
      </li>
    );
  }
);
