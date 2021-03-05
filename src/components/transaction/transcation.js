import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import React from 'react'

 const data = {
   columns: [
     {
       label: "Transcation Id",
       field: "transactionId",
       sort: "asc",
       width: 150,
     },
     {
       label: "OrderType",
       field: "orderType",
       sort: "asc",
       width: 270,
     },
     {
       label: "timestamp",
       field: "timestamp",
       sort: "asc",
       width: 270,
     },
     {
       label: "AssetSymbol",
       field: "assetSymbol",
       sort: "asc",
       width: 270,
     },
     {
       label: "AssetAmount",
       field: "assetAmount",
       sort: "asc",
       width: 270,
     },
     {
       label: "AssetPrice",
       field: "assetPrice",
       sort: "asc",
       width: 270,
     },
     {
       label: "cashAmount",
       field: "cashAmount",
       sort: "asc",
       width: 270,
     }

   ],
   rows: [],
 };


class Transcationlist extends React.Component{
      constructor(props) {
    super(props);
        this.state = {
          loading: true,
        };
  }
  async componentDidMount(){
    this.setState({ loading: true });
    const payload = {
    accountKey: "ca9b610a-3752-435b-be40-3311b200fab1",
    };

    let config = {
    headers: {
        "x-api-key": "2kQs4oNvqe91cr9AdfHis28uFrUeobspaUtLslE0",
    },
    }; 

    await axios.post(
            "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",
            payload,config
            )
            .then((response) => {
            data.rows =  response.data;
            });
            this.setState({loading:false})
            console.log(data);
  }
    render(){
        if(this.state.loading){
            return (<div>
                loading...
            </div>)
        }
        return (
          <div>
            <br />
            <br />
            <br />
            <br />
            test
            <MDBDataTable
              theadColor="grey"
              theadTextWhite
              striped
              bordered
              small
              fixed
              entriesOptions={[1, 5, 10]}
              entries={10}
              data={data}
            />
          </div>
        );
    }
   
}

export default Transcationlist