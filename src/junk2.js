

// ==============================================================

/*  

  1. get all personal chits (personalChit array)
  2a. get calendar month to display
  2b. get the array of days for that calendar month

  3. map calendar month by day
     4. see if there is a chit for that day (filter personalChit array)
     5a. if yes chit exists - display PersonalChit
     5b. if no chit exists - display QuickChit form
 
 
------------------------------------*/


// ==============================================================

// THIS is the logic for adding the add new chit
// when no chit is displayed

  return (
    <>
        {displayChits && <DayChit
          key = {index}
          id = {displayDay.utcDate}
          day = {displayDay.day}
          month = {displayDay.month}
          utcDate = {displayDay.utcDate}
          displayChits = {displayChits}
         />  
      }
          {!displayChits && <div>  no chit + </div>
      }
       </>
      
      )
    
    })// end displayChits



    <div> 
 <div>categories:</div>
      <OrderWrapper>

        <SliderComponent
          handleSwitchState={handleSwitchState} //gets new state from child switch
          leftLabel='desc'
          rightLabel='asc'
        />

      </OrderWrapper>
      </div>
    