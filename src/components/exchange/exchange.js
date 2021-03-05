import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'; 
import { MDBBtn, MDBCard } from 'mdbreact';

class Exchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Exchange: []
    
        }
    
    this.getCurrentPrice = this.getCurrentPrice.bind(this);
    
};

getCurrentPrice = () => {
    const payload = {
        AcctKey: 'ca9b610a-3752-435b-be40-3311b200fab1'

    };
    
    axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current', payload, {
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
        <MDBCard>
          <h1> Price </h1>
          <br />
          <MDBBtn onClick={this.getCurrentPrice}>Show Current Price</MDBBtn>
          <h1>Price: {this.state.Exchange.price}</h1>
          <h1>Symbol: {this.state.Exchange.assetSymbol}</h1>
          <h1>Timestamp: {this.state.Exchange.timestamp}</h1>
          <br />
        </MDBCard>
      </div>
    );
}
}
export default withRouter(Exchange)