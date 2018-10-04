import React, {Component} from 'react';
import {Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'


class DashBoard extends Component {

    state = {
        data2: [],
    };

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
        const pJobOffers = fetch('/Data/job_offers.json')
            .then(response => response.json());

        const pCategories = fetch('/Data/categories.json')
            .then(response => response.json());


        const makeJobCategoriesData = ([job_offers, categories]) => {
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
                if (jobOffersCategoriesIdNames[categoryId]) {
                    jobOffersCategoriesIdNames[categoryId].points += 1
                } else {
                    jobOffersCategoriesIdNames[categoryId] = {
                        points: 1,
                        label: categories.find(category => category.id === categoryId).name
                    }
                }
            });
            console.log(jobOffersCategoriesIdNames);
            console.log(Object.values(jobOffersCategoriesIdNames));
            const saveData2 = () => {
                this.setState({data2: Object.values(jobOffersCategoriesIdNames)})
            };
            saveData2();
            console.log(this.state.data2)
        };

        Promise.all([pJobOffers, pCategories]).then(makeJobCategoriesData)
    }

    render() {
        return (
            <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
            >
                <Typography variant="title" color="inherit" style={{margin: 10}}>
                    NASZA POZYCJA WZGLĘDEM KONKURENCJI W ILOŚCI OFERT W 2017
                </Typography>
                <Typography variant="subheading" color="inherit" style={{width: 700, margin: 10, textAlign: 'center'}}>
                    Z dumą pokazujemy jak wyglądała nasza pozycja w porównaniu do popularnej konkurencji w ubiegłym
                    roku. Jak widać na przestrzeni czasu nasza aplikacja zyskuje na popularności i posiadamy coraz
                    więcej ofert!
                </Typography>
                <LineChart width={500} height={300} data={this.data}
                           margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey="MY" stroke="#82ca9d"/>
                    <Line type="monotone" dataKey="KONKURENCJA" stroke="#8884d8"/>
                </LineChart>

                <Typography variant="title" color="inherit" style={{margin: 10}}>
                    POSIADANA LICZBA OFERT WEDLE KATEGORII
                </Typography>
                <Typography variant="subheading" color="inherit" style={{width: 700, margin: 10, textAlign: 'center'}}>
                    Wszystkim niezdedycowanym przedstawiamy zestawienie wszystkich ofert pracy w zależności od kategorii branży.
                </Typography>
                <BarChart width={600} height={300} data={this.state.data2}>
                    <XAxis dataKey="label" stroke="#8884d8"/>
                    <YAxis/>
                    <Tooltip/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                    <Bar type="monotone" dataKey="points" fill="#8884d8" barSize={30}/>
                </BarChart>

            </Grid>
        )
    }

}

export default DashBoard;