import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myStonks, setMyStonks}) {
  const container = "port"

  function handleDelete (stock) {
    const updatedStonks = myStonks.filter(stonk => stonk !== stock)
    setMyStonks(updatedStonks)
  }

  const renderStonks = myStonks.map(stonk => <Stock handleDelete={handleDelete} stockcontainer={container} key={stonk.id} stonk={stonk} />)

  return (
    <div>
      <h2>My Portfolio</h2>
      {renderStonks}
    </div>
  );
}

export default PortfolioContainer;
