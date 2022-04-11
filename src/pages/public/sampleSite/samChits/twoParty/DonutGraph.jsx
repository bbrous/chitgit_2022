import React from 'react';
 
import { PieChart, ResponsiveContainer, Pie,  Sector, Cell, Tooltip, Legend } from 'recharts'


const data = [{name: 'Group A', value: 300}, {name: 'Group B', value: 600}];

export default function DonutGraph(props) {
  const COLORS = [  'red', '#00C49F'];

const RADIAN = Math.PI / 180;     
return (
  <ResponsiveContainer width="100%" height="100%" >
  <PieChart  >

    <Pie
      data={data} 
      cx="50%" 
      cy="50% "
      startAngl = '90'
      endAngle = '180'
      innerRadius="80%"
      outerRadius="100%" 
      fill="#8884d8"
      paddingAngle={4}
  
    >
    
      {
        data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
      }
     
    </Pie>
   
  </PieChart>
  </ResponsiveContainer>
);
}


 