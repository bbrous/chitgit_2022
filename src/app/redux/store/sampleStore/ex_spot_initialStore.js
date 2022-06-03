// Samp Spotlights


const SampleSpotlights =  [


 // Begin spot_1 ------------------------- >>

   {
    id: 'spot_1',
    type: 'spotlight',
    
    parentId: '',
   
    lastVisit: '2021-03-12T12:38:00.292Z',
    

    title: 'Build backyard deck',


    spotlightStatus: 'begun', // inactive, begun, completed
 
    
    completedTimeStamp:  '', 
    
    
    // timeEst: 311418000, 
    endEst: "2021-03-27T17:33:20.000Z",  //--------
    noteId: 'note_1',
    chitId : '',


    taskArray: [

      {id: 'spot_5', type: 'spotlight'},
      {id: 'spot_6', type: 'spotlight'},
      {id: 'spot_1_task_1', type: 'task'},

      
     
    ]  

  },  // ^^^^^^^^  end spot1 ^^^^^^^^^^^^^^^^^^^

 // Begin spot_2 ------------------------- >>

 {
  id: 'spot_2',
  type: 'spotlight',
  
  parentId: '',

  lastVisit: '2021-03-12T12:37:00.292Z',
  title: 'Presentation for Executive Staff',


  spotlightStatus: 'begun', // inactive, begun, completed
  
  completedTimeStamp:  '', 
  
  
  // timeEst: 311418000, 
  endEst: "2021-03-16T14:00:00.619Z",  //--------
  noteId: 'note_4',
  chitId : '',


  taskArray: [

    {id: 'spot_8', type: 'spotlight'},
    {id: 'spot_2_task_6', type: 'task'},
    {id: 'spot_2_task_7', type: 'task'},
    {id: 'spot_2_task_8', type: 'task'},

    
   
  ]  

  

 },  // ^^^^^^^^  end spot 2 ^^^^^^^^^^^^^^^^^^^

 // Begin spot_3 ------------------------- >>

 {
  id: 'spot_3',
  type: 'spotlight',
  
  parentId: '',

  lastVisit: '2021-03-12T12:36:00.292Z',
  title: 'Wakeboard Flex design',


  spotlightStatus: 'inactive', // inactive, begun, completed
  
  completedTimeStamp:  '', 
  
  
  // timeEst: 311418000, 
  endEst: '',  //--------
  noteId: '',
  chitId : '',



  taskArray: [

    {id: 'spot_3_task_1', type: 'task'},
    {id: 'spot_3_task_2', type: 'task'},
    {id: 'spot_3_task_3', type: 'task'},
    {id: 'spot_3_task_4', type: 'task'},
    {id: 'spot_3_task_5', type: 'task'},

    
   
  ]  

  

 },  // ^^^^^^^^  end spot 3 ^^^^^^^^^^^^^^^^^^^

  // Begin spot_4 ------------------------- >>

  {
    id: 'spot_4',
    type: 'spotlight',
    
    parentId: '',
    
    lastVisit: '2021-03-12T12:35:00.292Z',
    title: 'Surprise Vacation',
  
  
    spotlightStatus: 'inactive', // inactive, begun, completed
    
    completedTimeStamp:  '', 
    
    
    // timeEst: 311418000, 
    endEst: "2021-05-01T22:33:20.619Z",  //--------
    noteId: 'note_2',
    chitId : '',
  

    taskArray: [

      {id: 'spot_9', type: 'spotlight'},
      {id: 'spot_4_task_8', type: 'task'},
      {id: 'spot_4_task_9', type: 'task'},
      
  
      
     
    ]  
    
  
   },  // ^^^^^^^^  end spot 4 ^^^^^^^^^^^^^^^^^^^


    // Begin spot_5 ------------------------- >>

    {
      id: 'spot_5',
      type: 'spotlight',
      
      parentId: 'spot_1',

      lastVisit: '2021-03-12T12:34:00.292Z',
  
      title: 'Design deck',
  
  
      spotlightStatus: 'completed', // inactive, begun, completed
      
      completedTimeStamp:  '', 
      
      
      // timeEst: 311418000, 
      endEst: "2021-11-02T02:33:20.619Z",  //--------
      noteId: '',
      chitId : '',
  
  
      taskArray: [

        {id: 'spot_5_task_1', type: 'task'},
        {id: 'spot_5_task_2', type: 'task'},
        {id: 'spot_5_task_3', type: 'task'},
  
        
       
      ]  
  
    },  // ^^^^^^^^  end spot5 ^^^^^^^^^^^^^^^^^^^

      // Begin spot_6 ------------------------- >>

      {
        id: 'spot_6',
        type: 'spotlight',
        
        parentId: 'spot_1',

        lastVisit: '2021-03-12T12:33:00.292Z',
    
        title: 'Gather resources',
    
    
        spotlightStatus: 'completed', // inactive, begun, completed
        
        completedTimeStamp:  '', 
        
        
        // timeEst: 311418000, 
        endEst: "2021-11-02T02:33:20.619Z",  //--------
        noteId: '',
        chitId : '',
    
    
        taskArray: [

          {id: 'spot_6_task_1', type: 'task'},
          {id: 'spot_6_task_2', type: 'task'},
          {id: 'spot_7', type: 'spotlight'},

    
          
          
        ]  
    
      },  // ^^^^^^^^  end spot6 ^^^^^^^^^^^^^^^^^^^

      // Begin spot_7 ------------------------- >>

      {
        id: 'spot_7',
        type: 'spotlight',
        
        parentId: 'spot_6',

        lastVisit: '2021-03-12T12:32:00.292Z',
    
        title: 'Get materials',
    
    
        spotlightStatus: 'begun', // inactive, begun, completed
        
        completedTimeStamp:  '', 
        
        
        // timeEst: 311418000, 
        endEst: "2021-11-02T02:33:20.619Z",  //--------
        noteId: '',
        chitId : '',
    
    
        taskArray: [

          {id: 'spot_7_task_1', type: 'task'},
          {id: 'spot_7_task_2', type: 'task'},
          {id: 'spot_7_task_3', type: 'task'},
          {id: 'spot_7_task_4', type: 'task'},
    
          
          
        ]  
    
      },  // ^^^^^^^^  end spot_7 ^^^^^^^^^^^^^^^^^^^

      // Begin spot_8 ------------------------- >>

      {
        id: 'spot_8',
        type: 'spotlight',
        
        parentId: 'spot_2',

        lastVisit: '2021-03-12T12:31:00.292Z',
    
        title: 'get status reports',
    
    
        spotlightStatus: 'begun', // inactive, begun, completed
        
        completedTimeStamp:  '', 
        
        
        // timeEst: 311418000, 
        endEst: "2021-11-02T02:33:20.619Z",  //--------
        noteId: '',
        chitId : '',
    
    
        taskArray: [

          {id: 'spot_8_task_1', type: 'task'},
          {id: 'spot_8_task_2', type: 'task'},
          {id: 'spot_8_task_3', type: 'task'},
          {id: 'spot_8_task_4', type: 'task'},
    
          
          
        ]  
    
      },  // ^^^^^^^^  end spot_8 ^^^^^^^^^^^^^^^^^^^

            // Begin spot_9 ------------------------- >>

            {
              id: 'spot_9',
              type: 'spotlight',
              
              parentId: 'spot_4',

              lastVisit: '2021-03-12T12:30:00.292Z',
          
              title: 'Get date',
          
          
              spotlightStatus: 'completed', // inactive, begun, completed
              
              completedTimeStamp:  '', 
              
              
              // timeEst: 311418000, 
              endEst: "2021-01-24T02:33:20.619Z",  //--------
              noteId: '',
              chitId : '',
          
          
              taskArray: [

                {id: 'spot_9_task_1', type: 'task'},
                {id: 'spot_9_task_2', type: 'task'},
                {id: 'spot_10', type: 'spotlight'},
          
                
                
              ]  
          
            },  // ^^^^^^^^  end spot_9 ^^^^^^^^^^^^^^^^^^^

            // Begin spot_10 ------------------------- >>

            {
              id: 'spot_10',
              type: 'spotlight',
              
              parentId: 'spot_4',

              lastVisit: '2021-03-12T12:30:00.292Z',
          
              title: 'Bookings',
          
          
              spotlightStatus: 'begun', // inactive, begun, completed
              
              completedTimeStamp:  '', 
              
              
              // timeEst: 311418000, 
              endEst: "2021-01-02T02:33:20.619Z",  //--------
              noteId: '',
              chitId : '',
          
          
              taskArray: [

                {id: 'spot_10_task_1', type: 'task'},
                {id: 'spot_10_task_2', type: 'task'},
                {id: 'spot_10_task_3', type: 'task'},
          
                
                
              ]  
          
            },  // ^^^^^^^^  end spot_9 ^^^^^^^^^^^^^^^^^^^

] // end spotlights  ============================================







export default SampleSpotlights