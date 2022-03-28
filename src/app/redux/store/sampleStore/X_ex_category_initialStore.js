// Sample Store - Categories
//   SampleCategories


const SampleCategories =  [

  { 
    id: 'cat_1',
    category: 'To do',

   
  },

  { 
    id: 'cat_2',
    category: 'Work',
   
  },

  { 
    id: 'cat_3',
    category: 'Diet',

   
  },
  

  { 
    id: 'cat_5',
    category: 'Ideas',
  },

 
  { 
    id: 'cat_8',
    category: 'Exercise',
    categoryHolders: [
      {dbCollection: 'journal', id: 'jsection_4' } 
    ]
   
  },

 
  { 
    id: 'cat_9',
    category: 'Goals',

   
  },
 
 
 
 ] // end SampleCategories  ============================================
 
 
 
 
 
 
 
 export default SampleCategories