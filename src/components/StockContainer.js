import React from "react";
import Stock from "./Stock";

function StockContainer({ stonks, handleBuy, sortBy, filter}) {
  const container = "stonks"
  if (sortBy === "Alphabetically") {
    stonks.sort((a,b) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
  } else if (sortBy === "Price") {
    stonks.sort((a,b) => a.price - b.price)
  }

  if(filter) {
    stonks = stonks.filter(stonk => stonk.type === filter)
  }
  
  
  const renderedStonks = stonks
  .map(stonk => <Stock stockcontainer={container} handleBuy={handleBuy} key={stonk.id}stonk={stonk}/>)
  return (
    <div>
      <h2>Stocks</h2>
      {renderedStonks}
    </div>
  );
}

export default StockContainer;
