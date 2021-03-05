import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'; 

class Exchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Exchange: []
    
        }
    
    this.getCurrentPrice = this.getCurrentPrice.bind(this);
    
};

getCurrentPrice = () => {
    
    axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current', {
        headers: {
            'x-api-key': '2kQs4oNvqe91cr9AdfHis28uFrUeobspaUtLslE0'
        }
    })
    .then(res => {
        this.setState({
            Exchange: res.data
        })
   
    })
    .catch(err => {
        console.log(err);
    })
    
}




render() {
    return (
        <div>
            <h1> Price </h1>
            <br />
                <button onClick={this.getCurrentPrice}>Show Current Price</button>
                <br />
               
        </div>
    )
}
}
export default withRouter(Exchange)