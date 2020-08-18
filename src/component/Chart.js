import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Chart(data) {
  const Labels = data.data.map(emp=>emp.sub);
  const dataVal = data.data.map(val=>val.sem);
  const ChartData = {
    labels: Labels,
    datasets: [
      {
        Label: "City Name",
        backgroundColor: 'rgba(0, 47, 238, 1)',
        borderColor: 'rgba(255, 99, 71, 0.5)',
        borderWidht: 1,
        data: dataVal
      }
    ]

  }
  return(
    <div>
      <div style={{width: '50%', height:"250px", display: "inline-flex", backgroundColor:"orange"}}>
        <Bar
            options={{
                maintainAspectRatio: false,
                title: {
                  display: true,
                  text: 'City Name',
                  fontSize: 30,
                },
                scales: {
                  yAxes: [{
                      ticks: {
                      beginAtZero: true,
                      fontSize: 15,
                      fontColor: '#000',
                     }
                  }],
                  xAxes: [{
                      ticks: {
                      fontSize: 16,
                      fontColor: '#000',
                }
              }]
            }
          }}
          data = {ChartData}
          >
      </Bar>
     </div>
    </div>
  )
}
