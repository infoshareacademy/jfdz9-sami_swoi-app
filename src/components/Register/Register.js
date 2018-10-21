import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import '../common/firebase'

function setErrorMsg(error) {
    return {loginMessage: error};
}

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [
            theme
                .breakpoints
                .up(400 + theme.spacing.unit * 3 * 2)
        ]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit
    },
    submit: {
        marginTop: theme.spacing.unit * 3
    }
});

class Register extends Component {
    state = {
        email: "",
        password: "",
        redirect: false
    }


  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='../SearchForm/SearchForm' />
    }
  }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
            this.renderRedirect()
        )
    }
    render() {
        const classes = this.props;

        return (
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Rejestracja
                        </Typography>
                        <form className={classes.form} onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Adres e-mail</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={this.handleChange}
                                    value={this.state.email}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Hasło</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handleChange}
                                    value={this.state.password}/>
                            </FormControl>
                            <FormControlLabel
                                control={< Checkbox value = "remember" color = "primary" />}
                                label="Zapamiętaj mnie"/>
                            <Button type="submit" fullWidth variant="contained" color="secondary" onClick={this.setRedirect}>
                                Zarejestruj się
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Register);