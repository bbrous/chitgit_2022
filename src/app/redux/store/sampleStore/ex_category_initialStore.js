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
    categoryHolders: [
      {dbCollection: 'journal', id: 'jsection_3' },
      {dbCollection: 'notes', id: 'note_4' }
    ]
   
  },

  { 
    id: 'cat_3',
    category: 'Family',
    categoryHolders: [{dbCollection: 'notes', id: 'note_2' } ],
   
  },
  

  { 
    id: 'cat_5',
    category: 'Personal project',
    categoryHolders: [
      {dbCollection: 'notes', id: 'note_1' }  , 
      {dbCollection: 'notes', id: 'note_3' } ,
      {dbCollection: 'journal', id: 'jsection_5' } 
       ]
   
  },

 
  { 
    id: 'cat_8',
    category: 'Self improvement',
    categoryHolders: [
      {dbCollection: 'journal', id: 'jsection_4' } 
    ]
   
  },

 
  { 
    id: 'cat_9',
    category: 'Goals',
    categoryHolders: [
      {dbCollection: 'journal', id: 'jsection_2' } 
    ]
   
  },
 
 
 
 ] // end spotlights  ============================================
 
 
 
 
 
 
 
 export default SampleCategories