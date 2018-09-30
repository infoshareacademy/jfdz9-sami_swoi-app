import React, { Component } from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";


    class DashBoard extends Component {

        data = [
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

        componentDidMount() {
            const p1 = fetch('/Data/job_offers.json')
                .then(response => response.json());

            const p2 = fetch('/Data/categories.json')
                .then(response => response.json());



            const blablabla = ([job_offers, categories]) => {
            //     const jobOffersByCategoryId = job_offers.map(({categoryId}) => categoryId).reduce(
            //         (result, nextCategoryId) => {
            //             result[nextCategoryId] = (result[nextCategoryId] || 0) + 1;
            //             return result
            //         }, {}
            //     );
            //
            //     const report = categories.map(category => ({
            //         points: jobOffersByCategoryId[category.id],
            //         label: category.name
            //     }));
            //     console.log(report)
            // };

                const jobOffersCategoriesID = job_offers.map(el => el.categoryId);
                const jobOffersCategoriesIdNames = {};
                jobOffersCategoriesID.forEach(categoryId => {
                    if(jobOffersCategoriesIdNames[categoryId]) {
                        jobOffersCategoriesIdNames[categoryId].points += 1
                    } else {
                        jobOffersCategoriesIdNames[categoryId] = {
                            points: 1,
                            label: categories.find(category => category.id === categoryId).name
                        }
                    }
                });
                console.log(jobOffersCategoriesIdNames);
            };

            Promise.all([p1, p2]).then(blablabla)
        }

        render() {
            return (
                <LineChart width={500} height={300} data={this.data} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey="MY" stroke="#82ca9d"/>
                    <Line type="monotone" dataKey="KONKURENCJA" stroke="#8884d8"/>
                </LineChart>
            )
        }

    };

export default DashBoard;