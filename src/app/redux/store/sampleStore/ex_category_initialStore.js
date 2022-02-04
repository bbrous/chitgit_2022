// Sample Store - keywords
// Samp Spotlights


const SampleCategories =  [

  { 
    id: 'cat_1',
    category: 'to do',
    categoryHolders: [
      {dbCollection: 'chronicles', id: 'chron_3' }   
    
    ],
   
  },


  { 
    id: 'cat_2',
    category: 'work',
    categoryHolders: []
   
  },

  { 
    id: 'cat_3',
    category: 'family',
    categoryHolders: [{dbCollection: 'notes', id: 'note_2' } ],
   
  },
  
  { 
    id: 'cat_4',
    category: 'product team',
    categoryHolders: [ {dbCollection: 'notes', id: 'note_4' } ],
   
  },

  { 
    id: 'cat_5',
    category: 'personal project',
    categoryHolders: [
      {dbCollection: 'notes', id: 'note_1' }  , 
      {dbCollection: 'notes', id: 'note_3' }
      
    
    ]
   
  },


 
 
 
 
 ] // end spotlights  ============================================
 
 
 
 
 
 
 
 export default SampleCategories