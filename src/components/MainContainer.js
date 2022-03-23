import React, {useState,useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stonks, setStonks] = useState([])
  const [myStonks, setMyStonks] = useState([])
  const [sortBy, setSortBy] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(()=> {fetch('http://localhost:3001/stocks')
  .then(res => res.json())
  .then(data => setStonks(data))},[])

  function sorter (e) {
    setSortBy(e.target.value)
    console.log(e.target.value)
  }

  function handleBuy (stonk) {
    setMyStonks([...myStonks, stonk])
  }

  return (
    <div>
      <SearchBar setFilter={setFilter} sorter={sorter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer filter={filter} sortBy={sortBy} handleBuy={handleBuy} stonks={stonks} />
        </div>
        <div className="col-4">
          <PortfolioContainer myStonks={myStonks} setMyStonks={setMyStonks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
