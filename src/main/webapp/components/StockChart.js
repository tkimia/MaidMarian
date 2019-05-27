import React from 'react';
import { LineChart, Tooltip, Line, XAxis, YAxis } from 'recharts';

const StockChart = props => (
    <div className="chart-container">
        <h1>{props.data.company.name}</h1>
        <LineChart width={875} height={600} data={props.data.prices}>
            <XAxis dataKey="label" />
            <YAxis type="number" domain={['auto', 'auto']}/>
            <Tooltip />
            <Line dataKey="avg" stroke="#21ce99" activeDot={{ r: 5 }} />
        </LineChart>
    </div>
)

export default StockChart;