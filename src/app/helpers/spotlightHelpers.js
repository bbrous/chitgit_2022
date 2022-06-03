// Spotlight helpers

export const createChildrenSpotlightsArray = (spotId, allSpotlights)=>{

 
  // console.log('[ Spotlight helpers ] createChildrenallSpotlights - id ', spotId);
  // console.log('[ Spotlight helpers ] createChildrenallSpotlights - array', allSpotlights);

  //   let taskObject = orderedTasks.filter(task => task.completed=== true)
  // allSpotlights.find(spotlightItem => spotlightItem.id === props.id)


  // -- find all spotlights with a parent of spotlightId

  let finalSpotlightChildArray = []
  const recursiveCreate = (id, inputArray)=>{



    let spotlightObject = inputArray.find(spotlight => spotlight.id === id)
    // filter  for parents === id 
    let childSpotlights = allSpotlights.filter(spotlight => spotlight.parentId === id)


    // console.log('[ Spotlight helpers ] spotlight Object for - id ', spotlightObject);
    // console.log('[ Spotlight helpers ] childSpotlights ', childSpotlights);

    if(childSpotlights.length === 0){
      return
    }else{
      childSpotlights.forEach(childSpot => {
        finalSpotlightChildArray.push(childSpot.id)
        recursiveCreate(childSpot.id, inputArray)
      }
        )

    
    

    }

  }// end recursiveCreate


  recursiveCreate(spotId, allSpotlights)

  // console.log('[spotlightHelpers - final childarray ', finalSpotlightChildArray)
  return finalSpotlightChildArray
}// end createChildrenSpotlightsArray

