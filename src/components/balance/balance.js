import { MDBBtn, MDBCard } from "mdbreact";
import React, { Component, useState } from "react";

const Balance = () => {
  const [assetBalance, setAssetBalance] = useState("");
  const [cashBalance, setCashBalance] = useState("");

  const load = async (e) => {
    e.preventDefault();

    await fetch(
      "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance",
      {
        method: "POST",
        headers: {
          "x-api-key": "2kQs4oNvqe91cr9AdfHis28uFrUeobspaUtLslE0",
        },
        body: JSON.stringify({
          accountKey: "ca9b610a-3752-435b-be40-3311b200fab1",
        }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        // do something with the data
        console.log(response);
        setAssetBalance(response.assetBalance);
        setCashBalance(response.cashBalance);
      });
  };

  return (
    <div style={{ marginTop: "10%" }}>
      <MDBCard>
        <MDBBtn onClick={load}>Get Balance</MDBBtn>
        <p className="cash">Cash balance:{assetBalance}</p>
        <p className="asset">Asset balance:{cashBalance}</p>
      </MDBCard>
    </div>
  );
};

export default Balance;
