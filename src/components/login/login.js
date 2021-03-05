import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard } from 'mdbreact';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.backToHome = this.backToHome.bind(this);
        this.controlChange = this.controlChange.bind(this);
        this.controlSubmit = this.controlSubmit.bind(this);
    };

    backToHome = () => {
        this.props.history.push('/home');  // Redirect login page to home 
    }

    controlChange = e => {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    controlSubmit = e => {
        e.preventDefault();
        const payload = {
            username: this.state.username,
            password: this.state.password
        };
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', payload, {
            headers: {
                'x-api-key': `2kQs4oNvqe91cr9AdfHis28uFrUeobspaUtLslE0`
            }})
   

     }
    render() {
        return (
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <MDBCard style={{ textAlign: "center" }}>
              <h1>Login</h1>

              <form onSubmit={this.controlSubmit}>
                <label>
                  Username:
                  <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    required
                    onChange={this.controlChange}
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                    name="password"
                    type="text"
                    placeholder="Password"
                    required
                    onChange={this.controlChange}
                  />
                </label>
                <br />
                <label>
                  Remember me:
                  <input type="checkbox"></input>
                </label>
                <br />
                <button type="submit">Login</button>
              </form>
            </MDBCard>
          </div>
        );



    }
}

export default withRouter(Login)