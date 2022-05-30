/* function SpotlightTree(props) -------------------
       parent: sampleSite/Spotlights_s

  Holds Spotlight, task form and tasks ... includes sections for
  (sec a) info icon - to get help
  (sec b) current task -- shows last task worked on
  (sec c) Plan()
  (sec d) Task form
  (sec e) Sortable Tasks

  parent: Spotlights - pages/public/sampleSite/samSpots/Spotlights
------------------------------------*/

import React, {useState, useEffect}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory, useParams} from 'react-router-dom'

import{backgroundBlue, chitOrange, chitOrangeVeryLight, veryLightGrey} from '../../../../styles/colors'

import ViewNav from '../../../../pages/navComponents/publicNav/sampleNav/Spotlight_View_nav_s'

import{ selectSpotlights, 
  makeSelectSpotlights,
  selectTasks,
  makeGetSpotlight,
  // selectSpotlightTaskArray
  
} from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'

 


// ####################################################################################

// import SortableTasks from './SortableTasks_s'

// ####################################################################################

//  ---- Material Ui ------------------

import InfoIcon from '@mui/icons-material/Info'
import NotesIcon from '@mui/icons-material/Notes';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CheckIcon from '@mui/icons-material/Check';
import Paper from '@mui/material/Paper'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

const MUIdata =  {
  "id": "1",
  "parentId": "root",
  "name": "world of the day",
  "children": [
      {
          "id": "1.1",
          "parentId": "1",
          "name": "Australia",
          "children": [
              {
                  "id": "1.1.2",
                  "parentId": "1.1",
                  "name": "Melbourne",
                  "children": []
              },
              {
                  "id": "1.1.1",
                  "parentId": "1.1",
                  "name": "Sydney",
                  "children": []
              }
          ]
      },
      {
          "id": "1.2",
          "parentId": "1",
          "name": "Europe",
          "children": [
              {
                  "id": "1.2.1",
                  "parentId": "1.2",
                  "name": "France",
                  "children": []
              }
          ]
      }
  ]
}


// ======================================

let flatData = [
  {
    id: "1",
    parentId: "root",
    name: "xworld of the day"
  },
  {
    id: "1.1.2",
    parentId: "1.1",
    name: "xMelbourne"
  },
  {
    id: "1.2.1",
    parentId: "1.2",
    name: "xFrance"
  },
  {
    id: "1.1",
    parentId: "1",
    name: "xAustralia"
  },
  {
    id: "1.1.1",
    parentId: "1.1",
    name: "xSydney"
  },
  {
    id: "1.2",
    parentId: "1",
    name: "xEurope"
  }
];






const createTreeFromFlat = arr => {
  // The root is a placeholder to allow multiple top-level children
  const tree = {
    root: {
      id: "root",
      children: []
    }
  };

  // Every item gets added as a top level property of 'tree'
  arr.forEach(item => {
    tree[item.id] = {
      ...item,
      children: []
    };
  });

  Object.values(tree).forEach(item => {
    
    if (item.parentId) {

      
      // Now, since every item is already a prop of the tree, every parentId must be a prop of the tree
      // So every item can be added as a child to its parent
      tree[item.parentId].children.push(item);
    }
  });

  // So, you might think that now you have a tree where every item is a prop at the top level,
  // and contains only its immediate children.
  // But because each of those children is actually a reference to the top-level item, each item contains its entire set of descendents

  // So now, if we look at just the root prop (not all the other sibling props), it must contain the whole tree.
  return tree.root.children;
};











function RichObjectTreeView() {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );
      }










      
// ============================================================


export default function SpotlightTree() {

  let allSpotlights = useSelector(selectSpotlights)

 


let newSpotlights = []
let adjustedParentId, adjustedSpotlightObject
const newSpotlightArray = allSpotlights.map((spotlight, index) => {
 


!spotlight.parentId ? adjustedParentId = 'root' :adjustedParentId = spotlight.parentId

adjustedSpotlightObject ={
  id: spotlight.id,
  parentId: adjustedParentId,
  name: spotlight.title
}
newSpotlights.push(adjustedSpotlightObject)

return newSpotlights
}
) //end map


  const tree = createTreeFromFlat(newSpotlights);

 
  console.log('[Spotlight Tree] flatdata tree', tree)
  console.log('[Spotlight Tree] newSpotlights', newSpotlights)














  const renderTree = (nodes) => (

   
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <MainWrapper>
<ViewNavWrapper>
  <ViewNav/>
  </ViewNavWrapper>
  <TreeWrapper> 
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {renderTree(MUIdata)}
    </TreeView>

    </TreeWrapper>

    <pre>{JSON.stringify(tree, null, 4)}</pre>
</MainWrapper>



  );
}

 

// -----------------------------------------------------------------

const MainWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: veryLightGrey,
  width: '100%',
  height: '100%',
  overflow: 'auto',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})


 


const ViewNavWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  



  height: '2rem',
  color: 'white',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },


})


const TreeWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '98%',
  height: '800px',
  margin: '.25rem 0 0 0',
  
  
backgroundColor: 'pink',
  fontSize: '.8rem',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})