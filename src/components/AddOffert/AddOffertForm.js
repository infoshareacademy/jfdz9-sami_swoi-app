import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from "../../../node_modules/@material-ui/core/FormControl/FormControl";
import InputLabel from "../../../node_modules/@material-ui/core/InputLabel/InputLabel";
import Select from "../../../node_modules/@material-ui/core/Select/Select";
import MenuItem from "../../../node_modules/@material-ui/core/MenuItem/MenuItem";
import moment from "moment";
import FilledInput from "../../../node_modules/@material-ui/core/FilledInput/FilledInput";

class AddOffertForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            categoryId: [],
            createdAt: moment().format('YYYY-MM-DD')
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('/Data/categories.json')
            .then(response => response.json())
            .then(cat =>this.setState({
                categoryId: cat
            }, function(){
                console.log("Kategorie ze state: " , this.state.categoryId)
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

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <TextField
                    required
                    label="Tytuł oferty"
                    margin="normal"
                    multiline
                    rowsMax="3"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
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
                        {this.state.categoryId.map(category => (
                            <MenuItem
                                key={category.name}
                                value={[category.id]}
                            >
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

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
