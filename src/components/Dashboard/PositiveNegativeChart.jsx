import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';




const PositiveNegativeChart = ({ yxLabel = "Balance", data = [] }) => {
    return (
        <ResponsiveContainer width="100%" minHeight={300} >
            <BarChart
                width={500}
                height={300}
                data={data}
                padding={{
                    top: 10,
                    left: 30,
                    bottom: 10,
                }}
                tooltip={{ backgroundColor: "red" }}  >

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" display="none" label={{ value: "Months", position: 'insideBottom' }} />

                <YAxis
                    label={{ value: yxLabel, angle: -90, position: 'insideLeft', textAnchor: 'middle', dy: 10 }}
                    tickMargin={10}
                />
                <Tooltip />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="Amount" fill="#8884d8" stackId="stack" barSize={30} background={{ fill: '#eee' }} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default PositiveNegativeChart;
