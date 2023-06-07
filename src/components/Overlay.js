import React from "react";
import { Link } from "react-router-dom";

const Overlay = ({ onClickClose, onRemove, items }) => {
 

  return (
    <div className="overlay">
      <div className="basket">
        <h2 className=" mb-50 d-flex justify-between">
          ВАША КОРЗИНА
          <img
            height={32}
            width={32}
            className=" remove "
            src="remove.svg"
            alt="remove"
            onClick={onClickClose}
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((item) => {
                return (
                  <div key={item.id} className="item d-flex align-center mb-30">
                    <img
                      width={100}
                      height={100}
                      src={item.imageUrl}
                      alt={item.name}
                    />
                    <div className="ml-20">
                      <h3>{item.name}</h3>
                      <p className="sex">{item.sex}</p>
                      <b>{item.price}</b>
                    </div>
                    <img
                      onClick={() => onRemove(item.id)}
                      className=" remove"
                      src="remove.svg"
                      alt="remove"
                    />
                  </div>
                );
              })}
            </div>

            <div className="bottomItems mt-50">
              <div className="d-flex justify-between mb-20">
                <b>ВСЕГО:</b>
                <b>$0.00</b>
              </div>
              

              <button onClick={onClickClose} className="blackButton mt-10">
                ОФОРМИТЬ ЗАКАЗ ➜
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty  d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={240}
              height={240}
              src="emptycart.jpg"
            />
          
        
            <button onClick={onClickClose} className="blackButton">
              Вернуться
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overlay;
