import React from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

const DashBoard = () => {
    var data = [
        {name: 'Styczeń', KONKURENCJA: 10, MY: 15},
        {name: 'Luty', KONKURENCJA: 13, MY: 23},
        {name: 'Marzec', KONKURENCJA: 17, MY: 28},
        {name: 'Kwiecień', KONKURENCJA: 22, MY: 35},
        {name: 'Maj', KONKURENCJA: 29, MY: 42},
        {name: 'Czerwiec', KONKURENCJA: 35, MY: 50},
        {name: 'Lipiec', KONKURENCJA: 41, MY: 61},
        {name: 'Sierpień', KONKURENCJA: 49, MY: 72},
        {name: 'Wrzesień', KONKURENCJA: 52, MY: 80},
        {name: 'Październik', KONKURENCJA: 60, MY: 89},
        {name: 'Listopad', KONKURENCJA: 63, MY: 91},
        {name: 'Grudzień', KONKURENCJA: 68, MY: 99},
    ];
    return(
        <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="MY" stroke="#82ca9d" />
            <Line type="monotone" dataKey="KONKURENCJA" stroke="#8884d8" />
        </LineChart>
    )
};

export default DashBoard;