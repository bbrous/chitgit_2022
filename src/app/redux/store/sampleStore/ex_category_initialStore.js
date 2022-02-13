// Sample Store - keywords
// Samp Spotlights


const SampleCategories =  [

  { 
    id: 'cat_1',
    category: 'To do',
    categoryHolders: [
      {dbCollection: 'chronicles', id: 'chron_3' }   
    
    ],
   
  },


  { 
    id: 'cat_2',
    category: 'Work',
    categoryHolders: []
   
  },

  { 
    id: 'cat_3',
    category: 'Family',
    categoryHolders: [{dbCollection: 'notes', id: 'note_2' } ],
   
  },
  
  { 
    id: 'cat_4',
    category: 'Product team',
    categoryHolders: [ {dbCollection: 'notes', id: 'note_4' } ],
   
  },

  { 
    id: 'cat_5',
    category: 'Personal project',
    categoryHolders: [
      {dbCollection: 'notes', id: 'note_1' }  , 
      {dbCollection: 'notes', id: 'note_3' }
      
    
    ]
   
  },

  
  { 
    id: 'cat_6',
    category: 'Fun',
    categoryHolders: [
    
      
    
    ]
   
  },


 
 
 
 
 ] // end spotlights  ============================================
 
 
 
 
 
 
 
 export default SampleCategories