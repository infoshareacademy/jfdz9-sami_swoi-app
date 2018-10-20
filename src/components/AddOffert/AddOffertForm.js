import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from "../../../node_modules/@material-ui/core/FormControl/FormControl";
import InputLabel from "../../../node_modules/@material-ui/core/InputLabel/InputLabel";
import Select from "../../../node_modules/@material-ui/core/Select/Select";
import MenuItem from "../../../node_modules/@material-ui/core/MenuItem/MenuItem";
import moment from "moment";

class AddOffertForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            categoryId: "",
            createdAt: moment().format('YYYY-MM-DD'),
            locationId: [],
            salaryMax: "",
            salaryMin: "",
            categories: []
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('/Data/categories.json')
            .then(response => response.json())
            .then(cat =>this.setState({
                categories: cat
            }, function(){
                console.log("Kategorie ze state: " , this.state.categories)
            }));
    }

        handleChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    locationIdData = [
        {
            "id": 1,
            "name": "Gdańsk"
        },
        {
            "id": 2,
            "name": "Gdynia"
        },
        {
            "id": 3,
            "name": "Wejherowo"
        },
        {
            "id": 4,
            "name": "Sopot"
        },
        {
            "id": 5,
            "name": "Reda"
        },
        {
            "id": 6,
            "name": "Rumia"
        },
    ];


    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
                <TextField
                    required
                    label="Tytuł oferty"
                    margin="normal"
                    multiline
                    rowsMax="3"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    style={{alignSelf: 'center'}}
                />

                <TextField
                    required
                    label="Pełny opis"
                    margin="normal"
                    multiline
                    rows="5"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                />

                <FormControl>
                    <InputLabel>Kategoria</InputLabel>
                    <Select
                        key={this.state.categoryId}
                        style={{width: 300}}
                        name="categoryId"
                        value={this.state.categoryId}
                        onChange={this.handleChange}
                    >
                        {this.state.categories.map(category => (
                            <MenuItem
                                key={category.name}
                                value={category.id}
                            >
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel>Lokalizacja</InputLabel>
                    <Select
                        key={this.state.locationId}
                        style={{width: 300}}
                        name="locationId"
                        value={this.state.locationId}
                        onChange={this.handleChange}
                    >
                        {this.locationIdData.map(location => (
                            <MenuItem
                                key={location.name}
                                value={location.id}
                            >
                                {location.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    required
                    label="Wynagrodzenie minimalne"
                    margin="normal"
                    name="salaryMin"
                    type="number"
                    value={this.state.salaryMin}
                    onChange={this.handleChange}
                />

                <TextField
                    required
                    label="Wynagrodzenie maksymalne"
                    margin="normal"
                    name="salaryMax"
                    type="number"
                    value={this.state.salaryMax}
                    onChange={this.handleChange}
                />

                <div className="field">
                    <div className="control">
                        <input
                            type="submit"
                            value="Submit"
                            className="button is-primary"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default AddOffertForm;
