import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>

                <form>
                    <label>
                        Username:
                        <input name="username" type="text" placeholder="Username" required />
                    </label>
                    <label>
                        Password:
                        <input name="password" type="text" placeholder="Password" required />
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