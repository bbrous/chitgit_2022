import React, { useState, useEffect } from 'react'
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
// import "./styles.css";
import {Item} from './Item';



import InfoIcon from '@material-ui/icons/Info'
import NotesIcon from '@material-ui/icons/Notes';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CheckIcon from '@material-ui/icons/Check';
import Paper from '@material-ui/core/Paper'

import { styled, createMuiTheme } from "@material-ui/core/styles"
const theme = createMuiTheme(); // allows use of mui theme in styled component

//--- STYLES begin --------------------------

const SpotlightTaskWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  flexGrow: 1,
 
  textAlign: 'center',
   
  
})

const Handle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2rem',
  width: '2rem',
 
  '&:hover':{
    backgroundColor: 'lightgrey',
    cursor: 'grab'
  }
  
  
})




const TaskBlockWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row' , 
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
 
 backgroundColor: 'red',
 

  
})

const TaskBlock = styled('div')({
  display: 'flex',
height: '20px',
width: '100%',
margin: '5px',
padding:'20px',
backgroundColor: 'yellow',
  alignItems: 'center',
  justifyContent: 'flex-start',
  // width: '100%',

  '& div' : {
margin: '0 10px'
  }

})

// const Item = styled('div')({
//   display: 'flex',

//   alignItems: 'center',
//   justifyContent: 'flex-start',
//   // width: '100%',

// })


// =================================

export function TaskItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

 

  let listArray = [
    { fruit: "Granada", id: '7' },
    { fruit: "Eldia", id: '5' },
    { fruit: "Anana", id: '1' },
    { fruit: "andes", id: '11' },
    { fruit: "Frambuesa", id: '6' },
    { fruit: "Coco", id: '3' },
    { fruit: "Humo", id: '8' },
    { fruit: "Banana", id: '2' },
    { fruit: "Jarana", id: '10' },
    { fruit: "Damasco", id: '4' },
    { fruit: "Insulina", id: '9' }
  
   
  ];
  let index = props.id
  console.log('mememem me id',  index)
console.log('mememem me listArray', listArray)


  return (
    <Item ref={setNodeRef} style={style} >
      <TaskBlock> 
      <Handle {...listeners} {...attributes}>:::</Handle>
      <div>Hey dude from {props.id} </div>
        
        {/* { listArray[index].fruit} */}
        
        </TaskBlock>
    </Item>
  );
}



export default TaskItem
