// Samp Spotlights


const SampleLogs =  [


  // Begin log_1 ------------------------- >>
 
    {
      id: 'log_1', // person - Shelly
      type: 'person', // company, group, organization, topic, story, other
      otherPartyId: 'person_4', //Shelly 

      date: "2021-01-03T10:01:00.000Z",  // date input by user
      lastEdit:  "2021-01-03T10:01:00.000Z",  // Jan 3 2021 10:01 AM
      timeLock:  "2021-01-03T10:01:00.000Z",  // if exists - not editable

     title: '#1 Left poop on my driveway',
     
      Detail : '#1 Poop poop and more poop - Lorem officia deserunt mollit anim id est laborum.', 

      attachment: '',

      chitLink: {}, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
      keyWordArray: ['Product team'],

    },

    {
      id: 'log_2', // group - ATT
      type: 'company', // company, group, organization, topic, story, other
      otherPartyId: 'group_3', // ATT

      date: "2021-01-03T11:01:00.000Z",  // date input by user
      lastEdit:  "2021-01-03T11:01:00.000Z",  // Jan 3 2021 11:01 AM
      timeLock:  "2021-01-03T11:01:00.000Z",  // if exists - not editable
      
     title: '#1 overbilled in December',
     
      Detail : '#1 Overbilled - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 

      attachment: '',

      chitLink: {}, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
      keyWordArray: ['Product team'],
      
    },

    {
      id: 'log_3', // group org - IRS
      type: 'organization', // company, group, organization, other
      otherPartyId: 'group_1',

      date: "2021-01-03T11:01:00.000Z",  // date input by user
      lastEdit:  "2021-01-03T11:01:00.000Z",  // Jan 3 2021 11:01 AM
      timeLock:  "2021-01-03T11:01:00.000Z",  // if exists - not editable
      
     title: '#1 Taxes 2020',
     
      Detail : '#1 Taxes - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 

      attachment: '',

      chitLink: {}, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
      keyWordArray: ['Product team'],

    },

    {
      id: 'log_4', // group Waterski club
      type: 'group', // company, group, organization, other
      otherPartyId: 'group_2',
      date: "2021-01-03T08:01:00.000Z",  // date input by user
      lastEdit:  "2021-01-03T08:01:00.000Z",  // Jan 3 2021 8:01 AM
      timeLock:  "",  // if exists - not editable
      
     title: '#1  I\'m a secretary',
     
      Detail : ' #1  Waterski club Elected secretary -Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 

      attachment: '',

      chitLink: {}, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
      keyWordArray: ['Product team'],
   
    },



// 2 =================================================================





{
  id: 'log_5', // person - Shelly
  type: 'person', // company, group, organization, topic, story, other
  otherPartyId: 'person_4', //Shelly 

  date: "2021-01-06T10:01:00.000Z",  // date input by user
  lastEdit:  "2021-01-06T10:01:00.000Z",  // Jan 6 2021 10:01 AM
  timeLock:  "",  // if exists - not editable

 title: '#2 Left poop on my driveway',
 
  Detail : '#2 Poop poop and more poop - Lorem officia deserunt mollit anim id est laborum.', 

  attachment: '',

  chitLink: {}, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
  keyWordArray: ['Product team'],

},

{
  id: 'log_6', // group - ATT
  type: 'company', // company, group, organization, topic, story, other
  otherPartyId: 'group_3', // ATT

  date: "2021-01-06T11:01:00.000Z",  // date input by user
  lastEdit:  "2021-01-06T11:01:00.000Z",  // Jan 6 2021 11:01 AM
  timeLock:  "2021-01-06T11:01:00.000Z",  // if exists - not editable
  
 title: '#2 overbilled in December',
 
  Detail : '#2  Overbilled - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 

  attachment: '',

  chitLink: {}, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
  keyWordArray: ['Product team'],
  
},

{
  id: 'log_7', // group org - IRS
  type: 'organization', // company, group, organization, other
  otherPartyId: 'group_1',

  date: "2021-01-07T11:01:00.000Z",  // date input by user
  lastEdit:  "2021-01-07T11:01:00.000Z",  // Jan 7 2021 11:01 AM
  timeLock:  "",  // if exists - not editable
  
 title: '#2 Taxes 2020',
 
  Detail : '#2 Taxes - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 

  attachment: '',

  chitLink: {}, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
  keyWordArray: ['Product team'],

},

{
  id: 'log_8', // group Waterski club
  type: 'group', // company, group, organization, other
  otherPartyId: 'group_2',
  date: "2021-01-08T08:01:00.000Z",  // date input by user
  lastEdit:  "2021-01-08T08:01:00.000Z",  // Jan 8 2021 8:01 AM
  timeLock:  "",  // if exists - not editable
  
 title: '#2  me secretary',
 
  Detail : '#2  Waterski club Elected secretary -Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 

  attachment: '',

  chitLink: {}, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
  keyWordArray: ['Product team'],

},




// 3 =================================================================





{
  id: 'log_9', // person - Shelly
  type: 'person', // company, group, organization, topic, story, other
  otherPartyId: 'person_4', //Shelly 

  date: "2021-01-05T10:01:00.000Z",  // date input by user
  lastEdit:  "2021-01-05T10:01:00.000Z",  // Jan 5 2021 10:01 AM
  timeLock:  "",  // if exists - not editable

 title: '#3 Left poop on my driveway',
 
  Detail : '#3 Poop poop and more poop - Lorem officia deserunt mollit anim id est laborum.', 

  attachment: '',

  chitLink: {}, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
  keyWordArray: ['Product team'],

},

{
  id: 'log_10', // group - ATT
  type: 'company', // company, group, organization, topic, story, other
  otherPartyId: 'group_3', // ATT

  date: "2021-01-05T11:01:00.000Z",  // date input by user
  lastEdit:  "2021-01-05T11:01:00.000Z",  // Jan 5 2021 11:01 AM
  timeLock:  "2021-01-05T11:01:00.000Z",  // if exists - not editable
  
 title: '#3 overbilled in December',
 
  Detail : '#3  Overbilled - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 

  attachment: '',

  chitLink: {}, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
  keyWordArray: ['Product team'],
  
},

{
  id: 'log_11', // group org - IRS
  type: 'organization', // company, group, organization, other
  otherPartyId: 'group_1',

  date: "2021-01-06T11:01:00.000Z",  // date input by user
  lastEdit:  "2021-01-06T11:01:00.000Z",  // Jan 6 2021 11:01 AM
  timeLock:  "",  // if exists - not editable
  
 title: '#3 Taxes 2020',
 
  Detail : '#3 Taxes - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 

  attachment: '',

  chitLink: {}, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
  keyWordArray: ['Product team'],

},

{
  id: 'log_12', // group Waterski club
  type: 'group', // company, group, organization, other
  otherPartyId: 'group_2',
  date: "2021-01-07T08:01:00.000Z",  // date input by user
  lastEdit:  "2021-01-07T08:01:00.000Z",  // Jan 7 2021 8:01 AM
  timeLock:  "",  // if exists - not editable
  
 title: '#3  me secretary',
 
  Detail : '#3  Waterski club Elected secretary -Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 

  attachment: '',

  chitLink: {}, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
  keyWordArray: ['Product team'],

},







]// end SampleLogs

export default SampleLogs