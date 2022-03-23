import React from "react";

function Stock({ stonk, handleBuy, handleDelete, stockcontainer }) {
  const { name, price, id } = stonk

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 id={id} onClick={stockcontainer === "stonks" ? () => handleBuy(stonk) : () => handleDelete(stonk)} className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
