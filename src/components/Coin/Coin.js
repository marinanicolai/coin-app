import React, { useEffect, useState } from "react";

const CoinList = () => {
  let url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  const [coinData, setCoinData] = useState([]);

  const getCoin = async () => {
    let res = await fetch(url);
    let data = await res.json();
    setCoinData(data);
    console.log(data);
  };

  useEffect(() => {
    getCoin();
  }, []);

  return (
    <div>
      {coinData.map((val, id) => {
        const { login, avatar_url, type, name } = val;
        return (
          <div key={id}>
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CoinList;
