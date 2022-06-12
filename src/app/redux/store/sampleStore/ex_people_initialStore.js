// Samp Spotlights


const People =  [


  // Begin log_1 ------------------------- >>
    {
      id: 'unknown',

      type: 'person',
      name: 'Unknown',
      meta: 'Unknown',

      personHolders: []
      
    },
    {
      id: 'person_0',

      type: 'person',
      name: 'Bob B',
      meta: 'account holder',
  
      personHolders: []
      
    },
    {
      id: 'person_1',

      type: 'person',
      name: 'Cyn Ter',
      meta: 'Project Team',
   

      personHolders: [
        {collection: 'twoPartyChits', id: 'tp_1'},
        {dbCollection: 'journal', id: 'jsection_3' },
        {dbCollection: 'journal', id: 'jsection_9' },
        {dbCollection: 'journal', id: 'jsection_19' }
      ]
      
    },

 
    {
      id: 'person_2',
      
      type: 'person',
      name: "Mark D",
      meta: 'engineer genius',

      personHolders:  [
        {collection: 'twoPartyChits', id: 'tp_2'},
        {dbCollection: 'journal', id: 'jsection_3' },
        {dbCollection: 'journal', id: 'jsection_9' }
      ]

      
    },
    
    {
      id: 'person_3',
      
      type: 'person',
      name: "Mary B",
      meta: 'mi amore',

      personHolders:  [
        {collection: 'journals', id: 'jsection_2'},
        {collection: 'journals', id: 'jsection_16'}
      
      ]
      
     

      
    },

    
    {
      id: 'person_4',
      type: 'person',
      name: "Shelly-neighbor",
      meta: '',

      personHolders: [
        {dbCollection: 'logs', id: 'log_1' }, 
        {dbCollection: 'logs', id: 'log_9' }, 
        {dbCollection: 'logs', id: 'log_8' }, 
        {dbCollection: 'journal', id: 'jsection_11' }, 

      ]
      
       
    },

    
    {
      id: 'person_5',
      type: 'person',
      name: "Linda",
      meta: 'Project Team, software girl',
      
      personHolders: []

      
    },

    {
      id: 'person_6',
      type: 'person',
      name: "Steve",
      meta: 'Project Team, finance guy',
      
      personHolders: [
        {dbCollection: 'logs', id: 'log_8' }, 
      ]

      
    },


    {
      id: 'person_7',
      type: 'person',
      name: 'Jerry G',
      meta: 'best friend',
    
      personHolders: [
        {dbCollection: 'logs', id: 'log_9' }, 
        {dbCollection: 'logs', id: 'log_4' }, 
        {dbCollection: 'logs', id: 'log_12' }, 
        {dbCollection: 'logs', id: 'log_8' }, 
      ]


      
    },

    {
      id: 'person_8',
      type: 'person',
      name: "Billy",
      meta: "Jerry's brother",
      
      personHolders: [
        {dbCollection: 'journal', id: 'jsection_6' }, 
        {dbCollection: 'journal', id: 'jsection_21' }
      ]

      
    },


        


    {
      id: 'person_17',
      name: "Simi B",
      meta: 'little sister',
    
      personHolders: []

      
    },

    {
      id: 'person_100',
      type: 'person',
      name: "Brad B",
      meta: '',
      
      personHolders: []

      
    },

]// end People

export default People