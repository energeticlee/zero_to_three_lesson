import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { PRODUCTS } from "../utils/constant";

const ProductList = () => {
  const [btcAthPrice, setBtcAthPrice] = useState();

  useEffect(() => {
    const fetchBtcPrices = async () => {
      const response = await fetch(process.env.JUSTIN_SECRET_ENDPOINT!);
      const data = await response.json();
      console.log("DATA is: ", data.data.all_time_high.price);
      setBtcAthPrice(data.data.all_time_high.price);
    };
    fetchBtcPrices();
  }, []);

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      {PRODUCTS.map((product, idx) => {
        return <Card key={idx} product={product} />;
      })}
      <h1>BTC ATH: {btcAthPrice}</h1>
    </div>
  );
};

export default ProductList;
