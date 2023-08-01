import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const BarchartCustom = ({ data = [], barDataKey = "", yxLabel = "", xxLabel = "Months", fill = "#5DADE2", backgroundFill = true, barSize = 30 }) => {
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
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" display="none" label={{ value: xxLabel, position: 'insideBottom' }} />

                <YAxis
                    label={{ value: yxLabel, angle: -90, position: 'insideLeft', textAnchor: 'middle', dy: 10 }}
                    Margin={10}
                />
                <Tooltip />
                <Bar dataKey={barDataKey} fill={fill} barSize={barSize} background={{ fill: backgroundFill && '#eee' }} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarchartCustom;
