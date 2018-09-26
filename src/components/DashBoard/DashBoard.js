import React from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

const DashBoard = () => {
    var data = [
        {name: 'Styczeń', KONKURENCJA: 10, MY: 10},
        {name: 'Luty', KONKURENCJA: 18, MY: 23, amt: 2210},
        {name: 'Marzec', KONKURENCJA: 23, MY: 28, amt: 2290},
        {name: 'Kwiecień', KONKURENCJA: 29, MY: 35, amt: 2000},
        {name: 'Maj', KONKURENCJA: 35, MY: 42, amt: 2181},
        {name: 'Czerwiec', KONKURENCJA: 42, MY: 50, amt: 2500},
        {name: 'Lipiec', KONKURENCJA: 49, MY: 61, amt: 2100},
        {name: 'Sierpień', KONKURENCJA: 53, MY: 72, amt: 2100},
        {name: 'Wrzesień', KONKURENCJA: 61, MY: 80, amt: 2100},
        {name: 'Październik', KONKURENCJA: 63, MY: 89, amt: 2100},
        {name: 'Listopad', KONKURENCJA: 69, MY: 91, amt: 2100},
        {name: 'Grudzień', KONKURENCJA: 72, MY: 99, amt: 2100},
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