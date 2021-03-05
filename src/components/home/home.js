import { MDBCard, MDBIcon, MDBRow } from 'mdbreact';
import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import variablePie from "highcharts/modules/variable-pie.js";
import axios from 'axios';

variablePie(Highcharts);

const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "Spending (Past 5 days)",
  },
  xAxis: {
    categories: [],
  },
  yAxis: {
    title: { text: "Amount ($)" },
  },
  series: [
    {
      name: "Spending",
      data: [100, 400, 500, 600, 400 ],
    },
    {
      name: "Buying",
      data: [700, 200, 100, 500, 300],
    },
  ],
};

const options2 = {
  chart: {
    type: "variablepie",
  },
  title: {
    text: "Portfolio",
  },
  tooltip: {
    headerFormat: "",
    pointFormat:
      '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
      "Value: <b>{point.y}</b><br/>",
  },
  series: [
    {
      minPointSize: 10,
      innerSize: "40%",
      zMin: 0,
      name: "Portfolio",
      data: [
        {
          name: "Asset",
          y: 5053,
          z: 92.9,
        },
        {
          name: "Funds",
          y: 5515,
          z: 118.7,
        },
      ],
    },
  ],
};

class HomePage extends React.Component{
  constructor(props) {
    super(props);
        this.state = {
          loading: true,
        };
  }

  async componentDidMount(){
        this.setState({loading:true})
        const payload = {
        accountKey: "ca9b610a-3752-435b-be40-3311b200fab1",
        };
                
        let config = {
        headers: {
            "x-api-key": "2kQs4oNvqe91cr9AdfHis28uFrUeobspaUtLslE0",
        },
        };  

      await axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance",payload,config).then((response)=>{
          const value=[]
          value.push({name:"Asset",y:response.data.assetBalance,z:100})
        value.push({
                      name: "Funds",
                      y: response.data.cashBalance,
                      z: 100,
                    });
          options2.series[0].data=value;
      })

        await axios
            .post(
            "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",
            payload,config
            )
            .then((response) => {
            const data =  response.data;
            console.log(data);
            
            console.log(options.series)
            });
          this.setState({ loading: false });
  }

    render(){
          if(this.state.loading){
    return(<div>loading..</div>)
  }
        return (
          <div>
            <MDBCard style={{ width: "100%", textalign: "center" }}>
              <div class="row">
                <MDBIcon
                  icon="chart-line"
                  size="2x"
                  style={{
                    margin: "25px",
                    color: "rgb(88,88,88)",
                    marginLeft: " 40px",
                  }}
                />
                <h2
                  style={{
                    margin: "23px",
                    color: "rgb(88,88,88)",
                    marginLeft: "0px",
                  }}
                >
                  Completed Task Analysis
                </h2>
              </div>
            </MDBCard>
            <MDBCard style={{ height: "355px" }}>
              <HighchartsReact
                containerProps={{ style: { height: "100%" } }}
                highcharts={Highcharts}
                options={options}
              />
            </MDBCard>
            <MDBCard style={{ height: "340px" }}>
              <HighchartsReact
                containerProps={{ style: { height: "100%" } }}
                highcharts={Highcharts}
                options={options2}
              />
            </MDBCard>
          </div>
        );
    }
}

export default HomePage;