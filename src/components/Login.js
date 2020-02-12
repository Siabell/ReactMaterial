import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export class Login extends React.Component{
    constructor(props) {
        super(props);
        this.setState({username: '', password: ''})
        //Save data
        localStorage.setItem('username', 'ieti');
        localStorage.setItem('password', 'ieti');
        localStorage.setItem('isLoggedIn', false);
        //Read data
        localStorage.getItem('password');
        localStorage.getItem('username');
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if(event.target.id === 'email'){
            this.setState({userName: event.target.value});            
        }else if(event.target.id === 'password'){
            this.setState({password: event.target.value});            
        }
        
    }
    
    handleClick(){
        console.log('this is:',this.state.userName );
        if (this.state.userName == localStorage.getItem('username') && this.state.password == localStorage.getItem('password')){
            console.log('this is:',this.state.userName );
            localStorage.setItem('isLoggedIn', true);
        }
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus   onChange={this.handleChange.bind(this)}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick = {this.handleClick} 
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}