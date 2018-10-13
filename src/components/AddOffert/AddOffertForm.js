import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Select from "../../../node_modules/@material-ui/core/Select/Select";
import InputLabel from "../../../node_modules/@material-ui/core/InputLabel/InputLabel";
import FormControl from "../../../node_modules/@material-ui/core/FormControl/FormControl";
import MenuItem from "../../../node_modules/@material-ui/core/MenuItem/MenuItem";


class AddOffertForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            categories: [],
            editor: "",
            message: "",
            terms: false,
            test: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('/Data/categories.json')
            .then(response => response.json())
            .then(cat =>this.setState({
                categories: cat
            }, function(){
                console.log(this.state.categories)
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
