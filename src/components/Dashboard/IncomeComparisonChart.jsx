import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
    {
        month: 'April',
        previousYearIncome: 2500,
        currentYearIncome: 1500,
    },
    {
        month: 'May',
        previousYearIncome: 2800,
        currentYearIncome: 3000,
    },
    {
        month: 'Jun',
        previousYearIncome: 2800,
        currentYearIncome: 2500,
    },
];

const IncomeComparisonChart = () => {
    return (
        <ResponsiveContainer width="100%" minHeight={300}>
            <BarChart
                data={data}
                width={500}
                height={300}
                margin={{
                    top: 10,
                    left: 30,
                    bottom: 10,
                }}   >

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" display={"none"} label={{ value: 'Months', position: 'insideBottom' }} />
                <YAxis
                    label={{ value: 'Income Amount', angle: -90, position: 'insideLeft', textAnchor: 'middle', dy: 10, dx: -20, }}
                    margin={10}
                />

                <Tooltip />

                <Legend align="right" />
                <Bar dataKey="previousYearIncome" name="Previous Year" fill="#F39C12" barSize={25} />
                <Bar dataKey="currentYearIncome" name="Current Year" fill="#45B39D" barSize={25} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default IncomeComparisonChart;
