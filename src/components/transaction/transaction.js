import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const payload = { accountKey: "ca9b610a-3752-435b-be40-3311b200fab1" };
let config = {
  headers: {
    "x-api-key": "2kQs4oNvqe91cr9AdfHis28uFrUeobspaUtLslE0",
  },
};

function Transaction() {
  //const [isLoading, setisLoading] = useState(true);
  const [update, setUpdate] = useState([]);

  /*const data = {
    columns: [
      {
        label: "transactionId",
        field: "number",
        sort: "asc",
        width: 150,
      },
      {
        label: "orderType",
        field: "buy or sell",
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
        label: "assetSymbol",
        field: "assetSymbol",
        sort: "asc",
        width: 270,
      },
      {
        label: "assetAmount",
        field: "assetAmount",
        sort: "asc",
        width: 270,
      },
      {
        label: "assetPrice",
        field: "assetPrice",
        sort: "asc",
        width: 270,
      },
      {
        label: "cashAmount",
        field: "cashAmount",
        sort: "asc",
        width: 270,
      },
    ],
    rows: update,
  };*/

  function viewPast() {
    axios
      .post(
        "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",
        payload,
        config
      )
      .then((data) => {
        console.log(data);
      });
  }

  useEffect(() => {
    viewPast();
  }, []);

  //isLoading is always active.. removed for now
  /*if (isLoading) {
    return <div>Loading...</div>;
  }*/

  return (
    <div className="history">
      <br /> <br /> <br /> <br /> <br />
      <h2>Transaction History</h2>
      <table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
