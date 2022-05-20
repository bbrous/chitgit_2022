

const SampleSharedChits =  [

  { 
    sharedId: 'sharedChit_2',
    sharedLinkAddress: 'http://localhost:3000/sharedChit/sharedChit_1',

    receiverId: 'XXXXX',
    receiverName: 'Dave Anderson',

    senderId: 'person_100',
    senderName: 'Brad B',

    chitCategory: 'twoPartyChit', // twoPartyChit , personalChit
    chitId: 'ZZZZZ',
    deedPerformedBy: 'XXXXX',

    chitType: 'standard', //kindness, awChit, etc
    chitColor: 'gold',

    chitDate: '1997-12-23T13:35:14.000Z',
    sharedDate: '2022-05-19T13:35:14.967Z',
     
    sharedTitle: 'You saved me',
    message: 'Dave - you saved me from making what would have been the absolute worst mistake in my life.  It was the day I helped you build the jungle jim for your kids... and it was all because you didn\'t want to read the instructions.    It is a debt I truly can never repay.  Thank you.',
  },

  { 
    sharedId: 'sharedChit_1',
    sharedLinkAddress: 'http://localhost:3000/sharedChit/sharedChit_2',

    receiverId: 'XXXXX',
    receiverName: 'Dave Anderson',

    senderId: 'person_100',
    senderName: 'Brad B',

    chitCategory: 'twoPartyChit', // twoPartyChit , personalChit
    chitId: 'ZZZZZ',
    deedPerformedBy: 'person_100',

    chitType: 'standard', //kindness, awChit, etc
    chitColor: 'silver',

    chitDate: '1997-12-23T13:35:14.000Z',
    sharedDate: '2022-05-19T13:35:14.967Z',
     
    sharedTitle: 'Helped you build the jungle jim',
    message: 'A rare time I got to help you.  Assisting you would have only warranted a copper chit... but having to build that monstrosity twice because you wouldn\'t consult the instructions bumped it up to a silver :-). ',
  },

  { 
    sharedId: 'sharedChit_3',
    sharedLinkAddress: 'http://localhost:3000/sharedChit/sharedChit_3',

    receiverId: '',
    receiverName: '',

    senderId: 'person_100',
    senderName: 'Brad B',

    chitCategory: 'personalChit', // twoPartyChit , personalChit
    chitId: 'ZZZZZ',
    deedPerformedBy: 'person_100',

    chitType: 'milestone', //kindness, awChit, etc
    chitColor: 'milestone',

    chitDate: '2022-06-10T13:35:14.967Z',
    sharedDate: '2022-05-19T13:35:14.967Z',
     
    sharedTitle: 'Chit Git prototype',
    message: 'Today I completed the minimum viable product (MVP) of Chit Git.  After 3 years of work ... with 3 strategy (and corresponding product) changes,  Chit Git is ready to be shown and tried by users.  It\'s an important milestone for me because it is also the culmination of years of learning how to implement the vision - inluding training myself to do graphics design, database design and programming.  P.S. The site is designed using Javascript with a React framework and a cloud backend.'
  },

  


]//end SampleSharedChits

export default SampleSharedChits