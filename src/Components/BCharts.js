import React from 'react'
import {BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts'
import data from '../data.json' 


export const BCharts = () => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={data}>
            <Bar type={'monotone'} dataKey={'amount'} fill='#ec775f' label={{ position: 'top' }}/>
            <XAxis dataKey="day"/>
            <Tooltip/>
        </BarChart>
    </ResponsiveContainer>
  )
}
