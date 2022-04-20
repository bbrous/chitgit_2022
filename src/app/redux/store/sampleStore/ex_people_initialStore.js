// Samp Spotlights


const People =  [


  // Begin log_1 ------------------------- >>
    {
      id: 'unknown',

      type: 'person',
      name: 'Unknown',
      meta: 'Unknown',

      peopleHolders: []
      
    },
    {
      id: 'person_0',

      type: 'person',
      name: 'Bob B',
      meta: 'account holder',
  
      peopleHolders: []
      
    },
    {
      id: 'person_1',

      type: 'person',
      name: 'Cyn Ter',
      meta: 'Project Team',
   

      peopleHolders: [
        {collection: 'twoPartyChits', id: 'tp_1'},
        {dbCollection: 'journal', id: 'jsection_3' }
      ]
      
    },

 
    {
      id: 'person_2',
      
      type: 'person',
      name: "Mark D",
      meta: 'engineer genius',

      peopleHolders:  [
        {collection: 'twoPartyChits', id: 'tp_2'},
        {dbCollection: 'journal', id: 'jsection_3' }
      ]

      
    },
    
    {
      id: 'person_3',
      
      type: 'person',
      name: "Mary B",
      meta: 'mi amore',

      peopleHolders:  [{collection: 'journals', id: 'jsection_2'}]
      
     

      
    },

    
    {
      id: 'person_4',
      type: 'person',
      name: "Shelly-neighbor",
      meta: '',

      peopleHolders: []
      
       
    },

    
    {
      id: 'person_5',
      type: 'person',
      name: "Linda",
      meta: 'Project Team, software girl',
      
      peopleHolders: []

      
    },

    {
      id: 'person_6',
      type: 'person',
      name: "Steve",
      meta: 'Project Team, finance guy',
      
      peopleHolders: [
        
      ]

      
    },


    {
      id: 'person_7',
      type: 'person',
      name: 'Jerry G',
      meta: 'best friend',
    
      peopleHolders: []

      
    },

    {
      id: 'person_8',
      type: 'person',
      name: "Billy",
      meta: "Jerry's brother",
      
      peopleHolders: [
        {dbCollection: 'journal', id: 'jsection_6' }, 
      ]

      
    },

    
    {
      id: 'person_15',
      name: "Steve",
      meta: 'finance guy',

      group: 'project team',
      
      peopleHolders: []

      
    },

        
    {
      id: 'person_16',
      name: "Mary B",
      meta: 'wife',

      peopleHolders: [
        {dbCollection: 'journal', id: 'jsection_2' }, 
        {dbCollection: 'journal', id: 'jsection_6' },
        {dbCollection: 'journal', id: 'jsection_4' },
      ]

      
    },

    {
      id: 'person_17',
      name: "Simi B",
      meta: 'little sister',
    
      peopleHolders: []

      
    },

]// end People

export default People