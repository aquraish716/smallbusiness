import React, { Component } from 'react'
import {
    TextField, 
    Button,
    Container
} from '@material-ui/core'
import { withRouter } from "react-router-dom"

class Login extends Component {

state = {
    username:"",
    password:""
}

handleTextChange = (e) => { 
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
}

loginUser = (e) => {
    e.preventDefault()
    document.cookie = "loggedIn=true;max-age=60*1000"
    window.location.replace("/newBusiness")
  }


render() {
    return (
        <div>
            <Container maxWidth="sm">
                <form className="login-form" onSubmit={this.loginUser}>
                    <TextField 
                    required
                    onChange={this.handleTextChange}
                    value={this.state.username}
                    name="username"
                    label="Username"
                    type="text"/>
                    <TextField 
                    required
                    onChange={this.handleTextChange}
                    value={this.state.password}
                    name="password"
                    label="Password"
                    type="password"/>
                    <Button 
                    type="submit"
                    className="login-button"
                    variant="contained"
                    color="primary"
                    style={{backgroundColor:"green"}}>Login</Button>
                </form>
            </Container>
        </div>
    )
}
}

export default withRouter(Login);