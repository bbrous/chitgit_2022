//InitialChitStore.js - Chit a Bit - 2021 *********

/*
new file

*/


const InitialStore = {


  'acctInfo' : {
    id: 'nam0',
    fname: 'Brad',
    lname: 'Brous',
    email: 'brad.brous@visitell.com',
    status: {
      lastSpotlight: 'spot_2',  // initial, ' ', or ID
      lastNote: 'note_1',
      lastVisit: "2020-11-02T02:33:20.619Z"
    },
    loggedIn: false

  },

    // ===== Key Words  =============================
 

     'keywords' : [
      {
        keywordId: 'kw_1',
        keyWord: 'boolah',
        locations: [
          {locationId: 'n_01', locationType: 'note'},
          {locationId: 'day_01_sec_01', locationType: 'section'},
          {locationId: 'pe_01', locationType: 'chit'}
        ]
      },
  
    //     {
    //       keywordId: 'kw_2',
    //       keyword: 'micah'
    //       locations: [
    //         {locationId: 'n_01', locationType: 'note'},
    //         {locationId: 'day_01_sec_01', locationType: 'section'},
    //         {locationId: 'pe_01', locationType: 'chit'}
    //       ]
    //     }
  
      
     ],
  
  
  
    // ====== Spotlights ================================

     'spotlights': [
       {
        id: 'spot_1',
        type: 'spotlight',
        parent: '',

        title: 'Complete Journal and Spotlight',

        // spotlightStatus: 'inactive', // inactive, begun, completed
        // timeStamp:  '',  // September 14

        spotlightStatus: 'completed', // inactive, begun, completed
        timeStamp:  "2020-11-01T11:16:20.619Z",  // September 14
        
        completedTimeStamp:  "2020-11-03T14:46:20.619Z", 
        completed: false,
        
        // timeEst: null, // 
        // endEst: "",  //October 15 
        
        timeEst: 311418000, 
        endEst: "2020-11-02T02:33:20.619Z",   
        note: 'spot_1_note',
 

        taskArray: [
          {
            taskItem: 'spot_1_task_0',
            type: 'task'
          },
          {taskItem: 'spot_2', type: 'spotlight'},
          {taskItem: 'spot_1_task_1', type: 'task'}, 
          {taskItem: 'spot_1_task_5', type: 'task'},
          {taskItem: 'spot_1_task_3', type: 'task'},
          {taskItem: 'spot_1_task_6', type: 'task'},
          {taskItem: 'spot_1_task_4', type: 'task'}
         
        ],
      },  // end spot_1 ---------

      {
        id: 'spot_2',
        type: 'spotlight',
        parent: 'spot_1',

        title: 'Complete Spotlight Tasks in A-try  Spotlight Tasks in A-try  ',
        spotlightStatus: 'inactive', // inactive, begun, completed
        // timeStamp:  "2020-09-25T04:46:20.619Z",  // September 25
        
        // timeEst: 3715380000,
        timeEst: null,
        endEst: "2020-10-09T04:46:20.619Z",  //October 9 

        timeStamp:  '',  // September 25
        completedTimeStamp: '', 
        
        // endEst: '',  //October 9 

        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },        
         
        note: {
          noteId: 'spot_2_note',
          noteContent: 'This is spot 2s note',
        },

        taskArray: [
          {
            taskItem: 'spot_2_task_0',
            completed: false, 
            type: 'task'
          },
          {taskItem: 'spot_2_task_1',completed: false, type: 'task'}, 
          {taskItem: 'spot_2_task_2',completed: false, type: 'task'},
          {taskItem: 'spot_2_task_3',completed: false, type: 'task'},
          {taskItem: 'spot_3',completed: false, type: 'spotlight'},
          {taskItem: 'spot_5',completed: false, type: 'spotlight'},
         
        ],

      }, // end spot_2 ----------------

      {
        id: 'spot_3',
        type: 'spotlight',
        parent: 'spot_2',

        title: 'Popups for note and clock',
        
        spotlightStatus: 'inactive', // inactive, begun, completed
        timeStamp:  "2020-09-14T04:46:20.619Z",  // September 14
        
        completedTimeStamp: '', 
        
        timeEst: null, 
        endEst: "2020-11-17T04:46:20.619Z",  //Nov 17

        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },        
        note: {
          noteId: '',
          noteContent: '',
        },
   
        

        taskArray: [
          {
            taskItem: 'spot_3_task_0',
            completed: true, 
            type: 'task'
          },
          {taskItem: 'spot_3_task_3',completed: false, type: 'task'},
          {taskItem: 'spot_3_task_1',completed: false, type: 'task'},
          {taskItem: 'spot_3_task_2',completed: false, type: 'task'}
         
        ],

      }, // end spot_3 ----------------

      {
        id: 'spot_5',
        type: 'spotlight',
        parent: 'spot_2',

        title: 'Dummy Spotlight 5',

        spotlightStatus: 'inactive', // inactive, begun, completed
        timeStamp:  "2020-09-14T04:46:20.619Z",  // September 14
        
        completedTimeStamp: '', 
        
        timeEst: null, 
        endEst: "2020-11-17T04:46:20.619Z",  //Nov 17

        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },         
        note: {
          noteId: '',
          noteContent: '',
        },
        

        taskArray: [
          {
            taskItem: 'spot_5_task_0',
            completed: false, 
            type: 'task'
          },

        ],

      }, // end spot_5 --------

      {
        id: 'spot_4',
        type: 'spotlight',
        parent: '',

        title: 'Dummy Spotlight 4',
        
        spotlightStatus: 'inactive', // inactive, begun, completed
        timeStamp:  "2020-09-11T04:46:20.619Z",  // September 11
        
        completedTimeStamp: '', 
        
        timeEst: null, 
        endEst: "2020-10-03T04:46:20.619Z",  //October 3 

        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },

        note: {
          noteId: '',
          noteContent: '',
        },
   
        

        taskArray: [
          {
            taskItem: 'spot_4_task_0',
            completed: false, 
            type: 'task'
          },
        ],

      }, // end spot_4 --------------


     ], // end spotlights ----------------------


    // ====== Tasks ================================

    tasks: [


      {
        id: 'spot_1_task_0',
        type: 'task',  //or spotlight
        completed: false,

        spotHolder: 'spot_1',
        title: 'Spotlight begin',
        clock: {
          timerStatus: 'inactive', // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },

      },// end spot_1_task_0


      {
        id: 'spot_1_task_5',
        type: 'task',  //or spotlight
        completed: false,

        spotHolder: 'spot_1',
        title: 'We are almost done',
        clock: {
          timerStatus: 'running', // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },
        note: {
          noteId: '',
          noteContent: '',
        },
      },  // end spot_1_task_5

      {
        id: 'spot_1_task_1',
        type: 'task',  //or spotlight
        completed: false,

        title: '*** Transfer A-try into Spotlight ****',
        clock: {
          timerStatus: 'running', // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: '2020-10-25T01:46:20.619Z'
        },

      }, // end spot_1_task_1

      {
        id: 'spot_1_task_3',
        type: 'task',  //or spotlight
        completed: false,

        title: 'Clocks and Note Popups create and Note Popups  and Note Popups  and Note Popups  and Note Popups ',
        clock: {
          timerStatus: 'running', // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: '2020-10-26T01:46:20.619Z'
        },
        note: {
          noteId: '',
          noteContent: '',
        },
      }, // end spot_1_task_3

      {
        id: 'spot_1_task_4',
        type: 'task',  //or spotlight
        completed: false,

        spotHolder: 'spot_1',
        title: 'Inagodta davita',
        clock: {
          timerStatus: 'inactive', // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },
        note: {
          noteId: '',
          noteContent: '',
        },
      },// end spot_1_task_4

      {
        id: 'spot_1_task_6',
        type: 'task',  //or spotlight
        completed: false,

        title: 'In Spotlight - complete layout with params from Initial Store',
        clock: {
          timerStatus: 'paused', // inactive, running, paused, stopped
          accumulatedTime: 55566000,
          lastDate: null
        },
        note: {
          noteId: '',
          noteContent: '',
        },
      }, // end spot_1_task_6

      {
        id: 'spot_2_task_0',
        type: 'task',  //or spotlight
        completed: true,

        title: 'Spotlight begin',
        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },
        note: {
          noteId: '',
          noteContent: '',
        },
      }, // spot_2_task_0

      {
        id: 'spot_2_task_1',
        type: 'task',  //or spotlight
        completed: true,

        title: 'Initial Store',
        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },
        note: {
          noteId: '',
          noteContent: '',
        },

      }, // end spot_2_task_1

      {
        id: 'spot_2_task_2',
        type: 'task',  //or spotlight
        completed: false,

        title: 'Redux',
        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },
        note: {
          noteId: '',
          noteContent: '',
        },

      }, // end spot_2_task_2


      {
        id: 'spot_2_task_3',
        type: 'task',  //or spotlight
        completed: false,

        title: 'Clocks and Note Popups create',
        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },

        note: 'spot_2_task_3_note',
        // note: '{"blocks":[{"key":"d22o4","text":"hello Brady ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":7,"length":4,"style":"color-rgb(226,80,65)"}],"entityRanges":[],"data":{}}],"entityMap":{}}'

      }, // end spot_2_task_3

      {
        id: 'spot_3_task_0',
        type: 'task',  //or spotlight
        completed: true,

        title: 'Spotlight begin',
        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },
        note: {
          noteId: '',
          noteContent: '',
        },
      }, // spot_3_task_0

      {
        id: 'spot_3_task_1',
        type: 'task',  //or spotlight
        completed: false,

        title: 'Note Popup',
        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },
        note: {
          noteId: '',
          noteContent: '',
        },

      }, //spot_3_task_1

      {
        id: 'spot_3_task_2',
        type: 'task',  //or spotlight
        completed: false,

        title: 'Clock Popup',
        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },
        note: {
          noteId: '',
          noteContent: '',
        },

      }, // spot_3_task_2


      {
        id: 'spot_3_task_3',
        type: 'task',  //or spotlight
        completed: false,

        title: 'Clock Popup Part deux',
        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },
        note: {
          noteId: '',
          noteContent: '',
        },

      }, // spot_3_task_3

      {
        id: 'spot_5_task_0',
        type: 'task',  //or spotlight
        completed: false,

        title: 'Spotlight begin',
        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },             
        note: {
          noteId: '',
          noteContent: '',
        },
      }, // spot_5_task_0

       {
        id: 'spot_4_task_0',
        type: 'task',  //or spotlight
        completed: false,

        title: 'Spotlight begin',
        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },         
        note: {
          noteId: '',
          noteContent: '',
        },
      }, // spot_4_task_0


    ], // end tasks ***********************************











    // ====== Notes ================================

     'notes' : [
      {
        
        noteId: 'spot_2_task_3_note',
        noteHolderId: 'spot_2_task_3',
        noteType: 'task',
        title: 'Clocks and Note Popups create and Note Popups  and Note Popups  and Note Popups  and Note Popups ',
    
        note:"{\"blocks\":[{\"key\":\"bf1me\",\"text\":\"ASDd asdfaf\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":5,\"length\":6,\"style\":\"color-rgb(97,189,109)\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    
        timeStamp:  "2020-11-01T11:16:20.619Z",  // September 14
    
        noteArray: ['kw_1']
      },
    
      {
        
        noteId: 'spot_1_note',
        noteHolderId: 'spot_1_note',
        noteType: 'spotlight',
        title: 'in notes: Complete Journal and Spotlight',
        note: "{\"blocks\":[{\"key\":\"7plek\",\"text\":\"A vnote created by AddNote\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":18,\"length\":7,\"style\":\"color-rgb(184,49,47)\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    
        timeStamp:  "2020-11-01T11:16:20.619Z",  // September 14
    
        noteArray: ['kw_1']
      },
    
      
      {
        
        noteId: 'spot_2_note',
        noteHolderId: 'spot_2_note',
        noteType: 'spotlight',
        title: 'Complete Spotlight Tasks in A-try  Spotlight Tasks in A-try  ',
        note: "{\"blocks\":[{\"key\":\"7plek\",\"text\":\"A VVVV created by AddNote\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":18,\"length\":7,\"style\":\"color-rgb(184,49,47)\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    
        timeStamp:  "2020-11-01T11:16:20.619Z",  // September 14
    
        noteArray: ['kw_1']
      },
    ],  // end notes -------------------------------------






















  }// end initialStore  **************************************************

  export default InitialStore