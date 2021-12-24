/* Item.jsx
    
    Used by DND-kit to make virtual item when draggina and droppin
    parent: TaskItem - pages/public/sampleSite/samSpots/TaskItem
       - 
   

*/

import React, { forwardRef } from "react";

export const Item = forwardRef(({ id, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>
      {props.children}
    </div>
  );
});

export default Item;