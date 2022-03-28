

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
    