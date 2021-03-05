import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBInput, MDBRow } from 'mdbreact'
import React from 'react'
import axios from "axios";

class BuyorSell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderType: "BUY",
      assetAmount: 10,
    };
  }

  handleOrderType=(action)=>()=> {
      this.setState({orderType:action})
    }
  handleAmount = (event) => {
    this.setState({assetAmount:event.target.value});
  };

  handleSubmit(){
    const payload={accountKey: "ca9b610a-3752-435b-be40-3311b200fab1",orderType:this.state.orderType,assetAmount:this.state.assetAmount}
    let config={headers:{"x-api-key":"2kQs4oNvqe91cr9AdfHis28uFrUeobspaUtLslE0"}}  
    axios.post(
        "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add"
      ,payload,config).then((response) => {
            if(response.status===200){alert("Transcation Completed")};
        })
    }

  render() {
    return (
      <div className="row justify-content-center align-self-center">
        <br /> <br /> <br /> <br /> <br />
        <MDBCard style={{ width: "500px", marginTop: "300px" }}>
          <MDBCardTitle style={{ textAlign: "center", padding: "20px" }}>
            <MDBIcon icon="wallet" /> &nbsp; BuyorSell
          </MDBCardTitle>
          <MDBCardBody>
            <div style={{ width: "300px" }}>
              <MDBContainer>
                <MDBRow>
                  <MDBCol style={{width:"50%"}}>
                    <MDBInput
                      gap
                      onClick={this.handleOrderType("BUY")}
                      checked={this.state.orderType === "BUY" ? true : false}
                      label="Buy"
                      type="radio"
                      id="BUY"
                      size="10px"
                      style={{ width: "100%", height: "20px" }}
                    />
                  </MDBCol>
                    <MDBCol style={{width:"70px"}}>

                  <MDBInput
                    gap
                    label="Sell"
                    onClick={this.handleOrderType("SELL")}
                    checked={this.state.orderType === "SELL" ? true : false}
                    type="radio"
                    id="SELL"
                    style={{ width: "100%", height: "20px" }}
                  />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
            <MDBInput
              label="Amount"
              type="text"
              id="amount"
              onChange={this.handleAmount}
            />
            <MDBFooter style={{ textAlign: "center" }}>
              <MDBBtn onClick={()=>this.handleSubmit()}>Submit</MDBBtn>
            </MDBFooter>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default BuyorSell;