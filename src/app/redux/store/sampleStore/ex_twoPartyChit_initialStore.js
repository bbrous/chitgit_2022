// Sample TwoPartyChits


const TwoPartyChits =  [


  // ------------------------- >>
 
    {
      id: 'tp1',

      chitType: 'standard', //promise, kindness, awChit
      chitBurden: 10,
      chitValue: 50,    
      chitColor: 'gold',   //gold, silver, copper, red, 

      dateCreated: '2021-01-04T12:20:16.000Z',// date - 01/03/21
      chitDate: '2020-12-31T12:20:16.000Z', // date - 12/31/21
      timeLock: '',  // if exists - not editable - date
      
      otherPartyCollection: 'people',
      otherPartyId: 'person_7',
      deedPerformedBy: 'person_7',

    


      workRelated: 'notWorkRelated',

      description: 'After I got stuck working, Jerry helped Mary with the New Year\'s party.',
 
      keyWordArray: [],
      
      chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}

      sharedId: 'X11rt2N',
      sharedTitle: 'Thanks for helping',
      dateShared: '2021-01-04T12:20:16.000Z',// date - 01/03/21
      message: 'Jerry - You saved me again ... and Mary.  I owe you for helping Mary put together the  New Year\'s party.'

    },
    {
      id: 'tp2',

      chitType: 'awChit', //promise, kindness, awChit
      chitBurden: 0,
      chitValue: 0,    
      chitColor: 'red',   //gold, silver,copper, red, 

      dateCreated: '2021-01-27T12:20:16.000Z', // date - 01/27/21
      chitDate: '2021-01-27T12:20:16.000Z', // date - 01/27/21
      timeLock: '2021-01-27T12:20:16.000Z',  // if exists - not editable
      
      otherPartyCollection: 'people',
      otherPartyId: 'person_1',
      deedPerformedBy: 'person_1',

      workRelated: 'workRelated',

      description: 'Cyn did a half assed job on an assignment that she delayed doing twice.  And - it was submitted 2 weeks late',
 
      keyWordArray: ['project team'],
      
      chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}

      sharedId: '',
      sharedTitle: '',
      message: ''

    },

    {
      id: 'tp3',

      chitType: 'standard', //promise, kindness, awChit
      chitBurden: 10,
      chitValue: 35,    
      chitColor: 'silver',   //gold, silver,copper, red, 

      dateCreated: '2021-01-04T12:20:16.000Z',// date - 01/04/21
      chitDate: '2020-12-05T12:20:16.000Z', // date - 12/31/21
      timeLock: '',  // if exists - not editable - date
      
      otherPartyCollection: 'people',
      otherPartyId: 'person_7',
      deedPerformedBy: 'person_0',

      workRelated: 'notWorkRelated',

      description: 'I lent Jerry my car for the day.  Thought I would\'t need it... turns out I did, but it was too late.',
 
      keyWordArray: [],
      
      chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}

      sharedId: 'X11rt2N',
      sharedTitle: 'Lent you my truck',
      dateShared: '2021-01-04T12:20:16.000Z',// date - 01/03/21
      message: 'Jerry - I was happy to lend you my truck bud. But what I didn\'t tell you is that I was called into the office after you picked it up. So I had to call an Uber.   You owe me $25 plus tip.'

    },


    {
      id: 'tp5',

      chitType: 'kindness', //promise, kindness, awChit
      chitBurden: 0,
      chitValue: 10,    
      chitColor: 'copper',   //gold, silver, copper red, 

      dateCreated: '2021-01-21T12:20:16.000Z', // date - 01/27/21
      chitDate: '2021-01-21T12:20:16.000Z', // date - 01/27/21
      timeLock: '',  // if exists - not editable
      
      otherPartyCollection: 'people',
      otherPartyId: 'unknown',
      deedPerformedBy: 'person_0',

      workRelated: 'notWorkRelated',

      description: 'Paid for coffee for woman who left wallet in car.',
 
      keyWordArray: [],
      
      chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}

      sharedId: '',
      sharedTitle: '',
      message: ''

    },

    {
      id: 'tp6',

      chitType: 'promise', //promise, kindness, awChit
      chitBurden: 0,
      chitValue: 0,    // promise chits have 0 value
      chitColor: 'gold',   //gold, silver, copper red, 

      dateCreated: '2021-01-09T12:20:16.000Z', // date - 01/09/21
      chitDate: '2021-01-09T12:20:16.000Z', // date - 01/09/21
      timeLock: '',  // if exists - not editable
      
      otherPartyCollection: 'people',
      otherPartyId: 'person_7',
      deedPerformedBy: 'person_7',

      workRelated: 'notWorkRelated',

      description: 'Jerry promised to help me build our deck.  And he promised to get Billy to help.',
 
      keyWordArray: ['deck'],
      
      chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}

      sharedId: '',
      sharedTitle: '',
      message: ''

    },

        {
      id: 'tp7',

      chitType: 'kindness', //promise, kindness, awChit
      chitBurden: 50,
      chitValue: 20,    
      chitColor: 'gold',   //gold, silver, copper red, 

      dateCreated: '2021-02-21T21:57:49.000Z', // date - 02/21/21
      chitDate: '2021-02-21T21:57:49.000Z', // date - 02/21/21
      timeLock: '',  // if exists - not editable
      
      otherPartyCollection: 'groups',
      otherPartyId: 'group_4',
      deedPerformedBy: 'person_0',

      workRelated: 'notWorkRelated',

      description: 'Volunteered for beach clean up.  Spent all day Sunday cleaning up other people\'s trash at the beach.',
 
      keyWordArray: [],
      
      chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}

      sharedId: '',
      sharedLinkAddress: '',
      sharedTitle: '',
      message: ''

    },

    {
      id: 'tp8',

      chitType: 'kindness', //promise, kindness, awChit
      chitBurden: 10,
      chitValue: 30,    
      chitColor: 'silver',   //gold, silver, copper red, 

      dateCreated: '2021-01-09T12:20:16.000Z', // date - 01/09/21
      chitDate: '2020-12-21T21:57:49.000Z', // date - 12/21/20
      timeLock: '',  // if exists - not editable
      
      otherPartyCollection: 'groups',
      otherPartyId: 'group_10',
      deedPerformedBy: 'person_0',

      workRelated: 'notWorkRelated',

      description: 'Gave a whole lot of cool toys to Toys for Tots.',
 
      keyWordArray: [],
      
      chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}

      sharedId: '',
      sharedTitle: '',
      message: ''

    },

    

]// end SampleLogs

export default TwoPartyChits