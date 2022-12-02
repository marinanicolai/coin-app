import { React, useContext, useEffect, useState } from "react";
import { searchContext } from "../../Context/SearchContext";
import axios from "axios";

const Search = () => {
  const { search, setSearch, allRecords, setRecords } =
    useContext(searchContext);

  const [input, setInput] = useState("");

  const searchRecord = (input) => {
    console.log(input);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${input}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
      )
      .then((res) => {
        console.log(res.data);
        setSearch(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
      )
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(search.name);

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          searchRecord(input);
        }}
      >
        Search{" "}
      </button>
    </div>
  );
};

export default Search;
