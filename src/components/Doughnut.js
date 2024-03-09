import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import 'chart.js/auto';
import {Chart, ArcElement} from 'chart.js'



const data = {
    cutout:30,
    labels: [
        'token Burn',
        'liquidity',
        'token for sale',
        'private & presale',
        'team and founder',
        'marketing',
        'charity',
        'airdrop'
    ],
datasets: [{
  data: [50, 20, 15, 5, 5, 2, 2, 1],
  

  backgroundColor: [
  '#2E73E7',
  '#D32CE1',
  '#43E122',
  '#EDF330',
  '#070727',
   '#726DA3',
   '#623A63',
   '#BEEDD1'
  ],
  hoverBackgroundColor: [
  '#1A6BF3',
  '#D415E4',
  '#38EB13',
  '#EDF41D',
  '2D2D45',
  '#4E4696',
  '#502A51',
  '#A1E0BB'

  ]
}],
options: {
    responsive: true,
    legend: {
        position: 'top',
        display:true,
        labels: {
            fontColor: 'white',
        }
    },

    title: {
        display: true,
        text: 'Token Allocation'
    },
    animation: {
        animateScale: true,
        animateRotate: true
    },
   
},
scales: {
    xAxes: [{
        beginAtZero: true,
        ticks: {
           autoSkip: false
        }
    }]
  },
};



export default function DoughnutComp () {

    return (
        <div className=''>
          {/* <h2>Doughnut Example</h2> */}
          <Doughnut  className=''
             data={data}
             width={500}
             height={500}
             
            //  options={
            //      {   cutout:120,
            //          responsive: true,    
                     
            //      }
            //     }
        
          />
        
        
        </div>
        );
} 