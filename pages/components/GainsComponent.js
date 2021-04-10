import React from 'react'
import { Line } from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
],
datasets: [{
  data: [300, 50, 100],
  backgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56'
  ],
  hoverBackgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56'
  ]
}]
};

const GainsComponent = () => {
    return (
        <div className=" bg-white ml-2   shadow-sm w-8/12 border rounded-xl border-gray-100">

            <div className="border-b p-3 border-gray-100">
                <p className="font-semibold  ">ADA</p>
            </div>
            <div>
            <Doughnut
     data={data}
     width={400}
     height={400}
  />
            </div>
        </div>
    )
}

export default GainsComponent
