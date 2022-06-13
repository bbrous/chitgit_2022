// Samp Logs


const SampleLogs =  [


  // Begin log_1 ------------------------- >>
 
    {
      id: 'log_1', // person - Shelly
      type: 'person', // company, group, organization, topic, story, other
      
      
      otherPartyId: 'person_4', //Shelly 

      logDate: "2021-01-03T10:01:00.000Z",  // date input by user
      lastEdit:  "2021-01-03T10:01:00.000Z",  // Jan 3 2021 10:01 AM
      timeLock:  "2021-01-03T10:01:00.000Z",  // if exists - not editable

      meta: '',
      title: '',
     
      detail : '<div>It started 2 months ago - I live in a large apartment&nbsp;complex.&nbsp;My upstairs neighbor (Shelly) would sit on the curb in front of my garage smoking cigarettes and brushing her long haired dog.&nbsp;</div><div>&nbsp;</div><div>She would leave all the hair - which was a lot - in front of my garage along with 2 or 3 cigarette butts - depending how long she brushed the dog.</div><div>&nbsp;</div><div>The first 2 times I cleaned them up because my dog would sometimes eat a butt and then regurgitate it in my apartment later.&nbsp;</div><div>&nbsp;</div><div>This 3rd time, when I saw her walking her dog I asked her to pick up the hair and butts when she was through.&nbsp;She was obviously not pleased with my request - and said she didn’t have to.</div><div>&nbsp;</div><div>The next time she did it (it occurs about every 10 days… I left a note on her door requesting she pick them up… I also kept a gave a copy for a file I started and gave a copy of the note to the main office of the complex to put on file.</div><div>&nbsp;</div><div>The office rep asked if she should say something to Shelly, I told her no.</div><div>&nbsp;</div><div>The fourth time Shelly left the hair and butts in front of my garage was December 27… that time I took a picture of it. I then picked up the hair and butts and left a 2nd note on her door and the butts and hair in a grocery bag in front.&nbsp;Also - gave a copy of the note to the front office again.</div><div>&nbsp;</div><div>She responded to my leaving the bag by emptying the bag on my front stoop.&nbsp;So I picked it up again.</div>', 

      attachment: '',

      chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
      
      peopleArray: ['Shelly-neighbor'],
      keywordArray: ['neighbor dispute'],

    },

    {
      id: 'log_2', // group - ATT
      type: 'company', // company, group, organization, topic, story, other
      
      
      otherPartyId: 'group_3', // ATT

      logDate: "2021-01-03T11:01:00.000Z",  // date input by user
      lastEdit:  "2021-01-03T11:01:00.000Z",  // Jan 3 2021 11:01 AM
      timeLock:  "2021-01-03T11:01:00.000Z",  // if exists - not editable
      
      meta: 'meta for ATT 1',
      title: '#1 overbilled in December',
     
      detail : '#1 Overbilled - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. est laborum.</span></p>', 

      attachment: '',

      chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
      
      peopleArray: [],
      keywordArray: ['billing'],
      
    },

    {
      id: 'log_3', // group org - IRS
      type: 'organization', // company, group, organization, other
      otherPartyId: 'group_1',

      logDate: "2021-01-03T11:01:00.000Z",  // date input by user
      lastEdit:  "2021-01-03T11:01:00.000Z",  // Jan 3 2021 11:01 AM
      timeLock:  "2021-01-03T11:01:00.000Z",  // if exists - not editable
      
      meta: 'meta for IRS',
      title: '#1 Taxes 2020',
     
      detail : '#1 Taxes - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 

      attachment: '',

      chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
      
      peopleArray: [],
      keywordArray: ['taxes'],

    },

    {
      id: 'log_4', // group Waterski club
      type: 'group', // company, group, organization, other
      otherPartyId: 'group_2',
      logDate: "2021-01-03T11:01:00.000Z",  // date input by user
      lastEdit:  "2021-01-03T11:01:00.000Z",  // Jan 3 2021 11:01 AM
      timeLock:  "",
      
      meta: 'meta for Waterski Club',
      title: '#1  I\'m a secretary',
     
      detail : '<div><span style=\"color: rgb(206, 145, 120);\">#1 &nbsp;Waterski club Elected secretary -Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>', 

      attachment: '',

      chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
      
      peopleArray: ['Jerry G'],
      keywordArray: [],
   
    },

    {
      id: 'log_5', // 5group - ATT
      type: 'company', // company, group, organization, topic, story, other
      
      
      otherPartyId: 'group_3', // ATT

      logDate: "2021-01-08T11:01:00.000Z",  // date input by user
      lastEdit:  "2021-01-08T11:01:00.000Z",  // Jan 8 2021 11:01 AM
      timeLock:  "",  // if exists - not editable
      
      meta: 'meta for ATT - 2',
      title: '#1 - b boy o boy overbilled in December',
     
      detail : '#1 b Overbilled -  quis nostrud exercitation non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. est laborum.</span></p>', 

      attachment: '',

      chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
      
      peopleArray: [],
      keywordArray: ['billing'],
      
    },


    {
      id: 'log_26', // 5group - ATT
      type: 'company', // company, group, organization, topic, story, other
      
      
      otherPartyId: 'group_3', // ATT

      logDate: "2021-01-09T11:01:00.000Z",  // date input by user
      lastEdit:  "2021-01-09T11:01:00.000Z",  // Jan 9 2021 11:01 AM
      timeLock:  "",  // if exists - not editable
      
      meta: 'meta ATT - 3  3   3',
      title: '#1 - c still overbilled in December',
     
      detail : '#1 b Overbilled - Oh my my quis nostrud exercitation non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. est laborum.</span></p>', 

      attachment: '',

      chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
      
      peopleArray: [],
      keywordArray: ['billing'],
      
    },

// 2 =================================================================





{
  id: 'log_18', // person - Shelly
  type: 'person', // company, group, organization, topic, story, other
  
  
  otherPartyId: 'person_4', //Shelly 

  logDate: "2021-01-20T10:01:00.000Z",  // date input by user
  lastEdit:  "2021-01-20T10:01:00.000Z",  // Jan 6 2021 10:01 AM
  timeLock:   "2021-01-20T10:01:00.000Z",  // if exists - not editable

  meta: '',
  title: 'More poop on my driveway',
 
  detail : '<div>Escalation - Shelly did it again yesterday… left hair and butts in front of my garage.&nbsp;</div><div>&nbsp;</div><div>So this time took picture …&nbsp;left a note (again copy to the apartment complex) along with the hair and butts (sans bag) on her stoop.&nbsp;</div><div>&nbsp;</div><div>She responded by taking the hair I left and spread it over &nbsp;over my bushes surrounding my stoop -- and she also left a whole bunch of buts she must have had in an ash tray on my stoop.&nbsp;took a picture and then just cleaned it up.</div>', 

  attachment: '',

  chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
  peopleArray: ['Shelly-neighbor'], 
  
  keywordArray: ['neighbor dispute'],

},

{
  id: 'log_6', // group - ATT
  type: 'company', // company, group, organization, topic, story, other
  
  
  otherPartyId: 'group_3', // ATT

  logDate: "2021-01-06T11:01:00.000Z",  // date input by user
  lastEdit:  "2021-01-06T11:01:00.000Z",  // Jan 6 2021 11:01 AM
  timeLock:  "2021-01-06T11:01:00.000Z",  // if exists - not editable
  
  meta: 'Att - 6  Meta',
  title: '#6 overbilled in December',
 
  detail : '#6  Overbilled - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 

  attachment: '',

  chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
 peopleArray: [], 
  
  keywordArray: ['billing'],
  
},

{
  id: 'log_7', // group org - IRS
  type: 'organization', // company, group, organization, other
  
  
  otherPartyId: 'group_1',

  logDate: "2021-01-07T11:01:00.000Z",  // date input by user
  lastEdit:  "2021-01-07T11:01:00.000Z",  // Jan 7 2021 11:01 AM
  timeLock:  "",  // if exists - not editable
  
  meta: 'IRS meta 2 ',
  title: '#2 Taxes 2020',
 
  detail : '#2 Taxes - Asked STEVE --- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 

  attachment: '',

  chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
 peopleArray: ['Steve'], 
  
  keywordArray: ['taxes'],

},

{
  id: 'log_8', // group Waterski club
  type: 'group', // company, group, organization, other
  
  
  otherPartyId: 'group_2',
  logDate: "2021-01-08T08:01:00.000Z",  // date input by user
  lastEdit:  "2021-01-08T08:01:00.000Z",  // Jan 8 2021 8:01 AM
  timeLock:  "",  // if exists - not editable
  
  meta: 'WaterSki meta 2',
  title: '#2  me secretary',
 
  detail : '#2  Waterski club Elected secretary -Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 

  attachment: '',

  chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
 peopleArray: ['Jerry G'], 
  
  keywordArray: [],

},




// 3 =================================================================





{
  id: 'log_9', // person - Shelly
  type: 'person', // company, group, organization, topic, story, other
  
  
  otherPartyId: 'person_4', //Shelly 

  logDate: "2021-01-05T10:01:00.000Z",  // date input by user
  lastEdit:  "2021-01-05T10:01:00.000Z",  // Jan 5 2021 10:01 AM
  timeLock:  "",  // if exists - not editable

  meta: '',
  title: '',
 
  detail : '<div> More hair and butts today… picture, copy of note to office… but this time I left the hair and butts I picked up on her car.</div><div> </div>', 

  attachment: '',

  chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
 peopleArray: ['Shelly-neighbor', 'Jerry G'], 
  
  keywordArray: ['neighbor dispute'],

},

{
  id: 'log_10', // group - ATT
  type: 'company', // company, group, organization, topic, story, other
  
  
  otherPartyId: 'group_3', // ATT

  logDate: "2021-01-05T11:01:00.000Z",  // date input by user
  lastEdit:  "2021-01-05T11:01:00.000Z",  // Jan 5 2021 11:01 AM
  timeLock:  "2021-01-05T11:01:00.000Z",  // if exists - not editable
  
  meta: 'meta ATT 3',
  title: '#3 overbilled in December',
 
  detail : '#3  Overbilled - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 

  attachment: '',

  chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
 peopleArray: [], 
  
  keywordArray: ['billing'],
  
},

{
  id: 'log_11', // group org - IRS
  type: 'organization', // company, group, organization, other
  
  
  otherPartyId: 'group_1',

  logDate: "2021-01-06T11:01:00.000Z",  // date input by user
  lastEdit:  "2021-01-06T11:01:00.000Z",  // Jan 6 2021 11:01 AM
  timeLock:  "",  // if exists - not editable
  
  meta: 'meta IRS 3',
  title: '#3 Taxes 2020',
 
  detail : '#3 Taxes - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 

  attachment: '',

  chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
 peopleArray: [], 
  
  keywordArray: ['taxes'],

},

{
  id: 'log_12', // group Waterski club
  type: 'group', // company, group, organization, other
  
  
  otherPartyId: 'group_2',
  logDate: "2021-01-07T08:01:00.000Z",  // date input by user
  lastEdit:  "2021-01-07T08:01:00.000Z",  // Jan 7 2021 8:01 AM
  timeLock:  "",  // if exists - not editable
  
  meta: 'meta Waterski 4',
  title: '#3  me secretary',
 
  detail : '#3  Waterski club Elected secretary -Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 

  attachment: '',

  chitLink: null, //{dbCollection: 'twoPartyChits', id: 'XYZ'}
 peopleArray: ['Jerry G'], 
  
  keywordArray: [],

},







]// end SampleLogs

export default SampleLogs