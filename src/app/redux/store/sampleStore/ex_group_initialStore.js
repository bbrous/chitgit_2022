/*
other
company
firm
group
club
agency
church
charity
organization

*/

const SampleGroups =  [

  { 
    id: 'group_1',
    name: 'IRS',
    type: 'organization',
    meta: '',
    groupHolders: []
  },

  { 
    id: 'group_2',
    name: 'Water Ski club',
    type: 'group',
    meta: 'Tony - president. 858-555-1422',
    groupHolders: [
      {dbCollection: 'journal', id: 'jsection_6' }, 
    ]
    
   
  },

  { 
    id: 'group_3',
    name: 'ATT',
    type: 'company',
    meta: '4134 Profit Ln. 800-355-1334 ',
    groupHolders: []
   
  },

  { 
    id: 'group_4',
    name: 'Beach cleanup',
    type: 'group',
    meta: '',
    groupHolders: [
      {dbCollection: 'journal', id: 'jsection_6' }, 
    ]
   
  },


  { 
    id: 'group_10',
    name: 'Toys for tots',
    type: 'charity',
    meta: '',
    groupHolders: [
      {dbCollection: 'journal', id: 'jsection_6' }, 
    ]
   
  },


]//end SampleGroups

export default SampleGroups