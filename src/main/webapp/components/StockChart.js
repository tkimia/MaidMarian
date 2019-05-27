import React from 'react';
import { ResponsiveContainer, LineChart, Tooltip, Line, XAxis, YAxis } from 'recharts';

const StockChart = props => {
    const {prices, company} = props.data;
    return (
    <div className="chart-container">
        <h1>{company.name}</h1>
        <h2>${prices[prices.length-1].close}</h2>
        <ResponsiveContainer width="100%" height={600}>
            <LineChart data={prices}  margin={{ top: 20, right: 30, left: 30, bottom: 0 }}>
                <XAxis dataKey="label" />
                <YAxis hide={true} type="number" domain={[dataMin => (dataMin * 0.9), dataMax => (dataMax * 1.1)]}/>
                <Tooltip />
                <Line dataKey="avg" stroke="#21ce99" strokeWidth={3} activeDot={{ r: 5 }} />
            </LineChart>
        </ResponsiveContainer>
    </div>
    )
}

export default StockChart;