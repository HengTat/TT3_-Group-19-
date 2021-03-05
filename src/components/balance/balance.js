import React, { Component } from "react";

const Balance = () => {
  const [assetBalance, setAssetBalance] = useState("");
  const [cashBalance, setCashBalance] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    //sent by teammate
    const payload = {
      accountKey: "ca9b610a-3752-435b-be40-3311b200fab1",
    };
    let config = {
      headers: {
        "x-api-key": "2kQs4oNvqe91cr9AdfHis28uFrUeobspaUtLslE0",
      },
    };
    await axios
      .post(
        "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance",
        payload,
        config
      )
      .then((response) => {
        console.log(response.data);
      })

      // await fetch('https://849rs099m3.excute-api.ap-southeast-1.amazonaws.com/techtrek/balance', {
      //     method: 'POST',
      //     headers: {
      //         'x-api-key': '2kQs4oNvqe91cr9AdfHis28uFrUeobspaUtLslE0'
      //     },
      //     body: JSON.stringify({
      //         'accountKey' : 'ca9b610a-3752-435b-be40-3311b200fab1'
      //         })

      .then((response) => response.json())
      .then((response) => {
        setId(response.data.id);
        setId(response.data.id);
      });
  };

  return (
    <body onload={submit}>
      <p className="cash">Cash balance:{}</p>
      <p className="asset">Asset balance:{}</p>
    </body>
  );
};

export default Balance;
