

const SampleSharedChits =  [

  { 
    sharedId: 'sharedChit_2',
    sharedLinkAddress: 'http://localhost:3000/sharedChit/sharedChit_1',

    receiverId: 'XXXXX',
    receiverName: 'Dave Anderson',

    senderId: 'person_100',
    senderName: 'Brad ',

    chitCategory: 'twoPartyChit', // twoPartyChit , personalChit
    chitId: 'ZZZZZ',
    deedPerformedBy: 'XXXXX',

    chitType: 'standard', //kindness, awChit, etc
    chitColor: 'gold',

    chitDate: '1997-12-23T13:35:14.000Z',
    sharedDate: '2022-05-19T13:35:14.967Z',
     
    sharedTitle: 'You saved my life !',
    message: "<div>Dave -<span style=\"color: rgb(107, 36, 178);\"> </span></div><div>You saved me from making what would have been the absolute worst mistake in my life. &nbsp;</div><div><br></div><div>It was the day I helped you build the jungle gym for your kids... and it was all because you didn't want to read the instructions. &nbsp;It's  a debt I truly can never repay. &nbsp;</div><div><br></div><div><span style=\"color: rgb(230, 0, 0);\">Thank you</span><span style=\"color: rgb(107, 36, 178);\">.</span></div>",
  },

  { 
    sharedId: 'sharedChit_1',
    sharedLinkAddress: 'http://localhost:3000/sharedChit/sharedChit_2',

    receiverId: 'XXXXX',
    receiverName: 'Dave Anderson',

    senderId: 'person_100',
    senderName: 'Brad',

    chitCategory: 'twoPartyChit', // twoPartyChit , personalChit
    chitId: 'ZZZZZ',
    deedPerformedBy: 'person_100',

    chitType: 'standard', //kindness, awChit, etc
    chitColor: 'silver',

    chitDate: '1997-12-23T13:35:14.000Z',
    sharedDate: '2022-05-19T13:35:14.967Z',
     
    sharedTitle: 'Helped you build the jungle gym',
    message:  "<div>Dave  - a  rare time I got to help you. </div><div><br></div><div>Even though the jungle gym was a monstrosity - assisting you would have only warranted a <span style=\"color: rgb(102, 61, 0);\">copper chit</span>... but having to build that monstrosity twice because you wouldn't consult the instructions bumped it up to a <strong style=\"color: rgb(136, 136, 136);\">silver </strong>:-).</div>",
  },

  { 
    sharedId: 'sharedChit_3',
    sharedLinkAddress: 'http://localhost:3000/sharedChit/sharedChit_3',

    receiverId: '',
    receiverName: '',

    senderId: 'person_100',
    senderName: 'Brad',

    chitCategory: 'personalChit', // twoPartyChit , personalChit
    chitId: 'ZZZZZ',
    deedPerformedBy: 'person_100',

    chitType: 'milestone', //kindness, awChit, etc
    chitColor: 'milestone',

    chitDate: '2022-06-10T13:35:14.967Z',
    sharedDate: '2022-05-19T13:35:14.967Z',
     
    sharedTitle: 'Chit Git prototype',
    message: "<div><span style=\"color: rgb(230, 0, 0);\">A MILESTONE day ...</span></div><div><br></div><div>Today I completed the minimum viable product (MVP) of Chit Git. </div><div><br></div><div>After 3 years of work ... with 3 strategy (and corresponding product) changes, Chit Git is ready to be shown and tried by users. </div><div><br></div><div>It's an important milestone for me because it is also the culmination of years of learning how to actually create my product vision - without hiring outside contractors.  </div><div><br></div><div>I've literally spent years teaching myself to do graphics design, database design and programming. </div><div><br></div><div><strong>P.S. </strong>The site is designed using Javascript with a React framework and a cloud back end.</div> <div><span style=\"color: rgb(230, 0, 0);\">A MILESTONE day ...</span></div><div><br></div><div>Today I completed the minimum viable product (MVP) of Chit Git. </div><div><br></div><div>After 3 years of work ... with 3 strategy (and corresponding product) changes, Chit Git is ready to be shown and tried by users. </div><div><br></div><div>It's an important milestone for me because it is also the culmination of years of learning how to actually create my product vision - without hiring outside contractors.  </div><div><br></div><div>I've literally spent years teaching myself to do graphics design, database design and programming. </div><div><br></div><div><strong>P.S. </strong>The site is designed using Javascript with a React framework and a cloud back end.</div>work ... with 3 strategy (and corresponding product) changes, Chit Git is ready to be shown and tried by users. </div><div><br></div><div>It's an important milestone for me because it is also the culmination of years of learning how to actually create my product vision - without hiring outside contractors.  </div><div><br></div><div>I've literally spent years teaching myself to do graphics design, database design and programming. </div><div><br></div><div><strong>P.S. </strong>The site is designed using Javascript with a React framework and a cloud back end.</div> <div><span style=\"color: rgb(230, 0, 0);\">A MILESTONE day ...</span></div><div><br></div><div>Today I completed the minimum viable product (MVP) of Chit Git. </div><div><br></div><div>After 3 years of work ... with 3 strategy (and corresponding product) changes, Chit Git is ready to be shown and tried by users. </div><div><br></div><div>It's an important milestone for me because it is also the culmination of years of learning how to actually create my product vision - without hiring outside contractors.  </div><div><br></div><div>I've literally spent years teaching myself to do graphics design, database design and programming. </div><div><br></div><div><strong>P.S. </strong>The site is designed using Javascript with a React framework and a cloud back end.</div>"
    
  },

  { 
    sharedId: 'generic',
    sharedLinkAddress: 'http://localhost:3000/sharedChit/generic',

    receiverId: 'XXXXX',
    receiverName: 'Generic Friend',

    senderId: 'person_100',
    senderName: 'Brad ',

    chitCategory: 'twoPartyChit', // twoPartyChit , personalChit
    chitId: 'ZZZZZ',
    deedPerformedBy: 'XXXXX',

    chitType: 'standard', //kindness, awChit, etc
    chitColor: 'silver',

    chitDate: '2022-05-19T13:35:14.967Z',
    sharedDate: '2022-05-19T13:35:14.967Z',
     
    sharedTitle: 'Your review of ChitGit',
    message: "<div>Thank you for taking the time to take a look at Chit Git.I appreciate it more than I can describe...<div><br></div><div><span style=\"color: rgb(230, 0, 0);\">Thank you - I owe you one.</span><span style=\"color: rgb(107, 36, 178);\">.</span></div>",
  },

  { 
    sharedId: 'sharedChit_4',
    sharedLinkAddress: 'http://localhost:3000/sharedChit/generic',

    receiverId: 'XXXXX',
    receiverName: 'Themeli',

    senderId: 'person_100',
    senderName: 'Brad ',

    chitCategory: 'twoPartyChit', // twoPartyChit , personalChit
    chitId: 'ZZZZZ',
    deedPerformedBy: 'XXXXX',

    chitType: 'standard', //kindness, awChit, etc
    chitColor: 'silver',

    chitDate: '2022-05-19T13:35:14.967Z',
    sharedDate: '2022-05-19T13:35:14.967Z',
     
    sharedTitle: 'Video meeting help',
    message: "<div>Thank you for taking the time to take a look at Chit Git and help me with Google Meet. I appreciate it more than I can describe...<div><br></div><div><span style=\"color: rgb(0, 102, 102);\">Again - thanks. </span><span style=\"color: rgb(0, 102, 102);\">.</span></div>",
  },

  { 
    sharedId: 'sharedChit_5',
    sharedLinkAddress: 'http://localhost:3000/sharedChit/generic',

    receiverId: 'XXXXX',
    receiverName: 'Len Schutzman',

    senderId: 'person_100',
    senderName: 'Brad ',

    chitCategory: 'twoPartyChit', // twoPartyChit , personalChit
    chitId: 'ZZZZZ',
    deedPerformedBy: 'XXXXX',

    chitType: 'standard', //kindness, awChit, etc
    chitColor: 'gold',

    chitDate: '2001-05-19T13:35:14.967Z',
    sharedDate: '2022-06-29T13:35:14.967Z',
     
    sharedTitle: '21 years',
    message: "<div>Len,</div><div><br></div><div>Thank you for believing and investing in me 20+ years ago.</div><div><br></div><div>The investing part - I still hop to repay... but the believing part - I'll never be able to repay.</div><div><br></div><div><span style='color: rgb(107, 36, 178);'>Thank you</span></div><div><br></div>",
  },



]//end SampleSharedChits

export default SampleSharedChits