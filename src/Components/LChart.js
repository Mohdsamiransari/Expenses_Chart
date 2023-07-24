import React from 'react'
import {Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts'
const data  = [
                {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
                {name: 'Page B', uv: 300, pv: 2400, amt: 2400},
                {name: 'Page C', uv: 200, pv: 2400, amt: 2400},
                {name: 'Page D', uv: 284, pv: 2400, amt: 2400},
                {name: 'Page E', uv: 193, pv: 2400, amt: 2400},
                {name: 'Page F', uv: 350, pv: 2400, amt: 2400},
            ];

export const LChart = () => {
  return (
    <LineChart width={400} height={400} data={data}>
        <Line type={'monotone'} dataKey='uv' stroke="#8884d8"/>
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='name' />
        <YAxis dataKey='uv' />
        <Tooltip/>
    </LineChart>
  )
}
