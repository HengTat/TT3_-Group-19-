import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.controlChange = this.controlChange.bind(this);
        this.controlSubmit = this.controlSubmit.bind(this);
    }

    controlChange = e => {
        const param = e.target.param;
        this.setState({
            [param]: e.target.value 
        })
    }

    controlSubmit = e =>  {
        e.preventDefault();
        const payload = { 
            username: this.state.username,
            password: this.state.password
        };
        

    }

    



   
    render() {
        return (
            <div>
                <h1>Login</h1>

                <form onSubmit={this.controlSubmit}>
                    <label>
                        Username:
                        <input param="username" type="text" placeholder="Username" required onChange= {this.controlChange}/>
                    </label>
                    <label>
                        Password:
                        <input param="password" type="text" placeholder="Password" required onChange = {this.controlChange} />
                    </label>
                    <label>
                        Remember me:
                        <input type="checkbox"></input>
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        )


    }
}

export default withRouter(Login)