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
    groupType: 'organization',
    meta: '',
    groupHolders: []
  },

  { 
    id: 'group_2',
    name: 'Water Ski club',
    groupType: 'group',
    meta: 'Tony - president. 858-555-1422',
    groupHolders: [
      {dbCollection: 'journal', id: 'jsection_6' }, 
    ]
    
   
  },

  { 
    id: 'group_3',
    name: 'ATT',
    groupType: 'company',
    meta: '4134 Profit Ln. 800-355-1334 ',
    groupHolders: []
   
  },

  { 
    id: 'group_4',
    name: 'Beach cleanup',
    groupType: 'group',
    meta: '',
    groupHolders: [
      {dbCollection: 'journal', id: 'jsection_6' }, 
    ]
   
  },


  { 
    id: 'group_10',
    name: 'Toys for tots',
    groupType: 'charity',
    meta: '',
    groupHolders: [
      {dbCollection: 'journal', id: 'jsection_6' }, 
    ]
   
  },


]//end SampleGroups

export default SampleGroups