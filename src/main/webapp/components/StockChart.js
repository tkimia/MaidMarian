import React from 'react';
import { ResponsiveContainer, LineChart, Tooltip, Line, XAxis, YAxis } from 'recharts';

const StockChart = props => (
    <div className="chart-container">
        <h1>{props.data.company.name}</h1>
        <ResponsiveContainer width="100%" height={600}>
            <LineChart data={props.data.prices}  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="label" />
                <YAxis type="number" domain={['auto', 'auto']}/>
                <Tooltip />
                <Line dataKey="avg" stroke="#21ce99" activeDot={{ r: 5 }} />
            </LineChart>
        </ResponsiveContainer>
    </div>
)

export default StockChart;