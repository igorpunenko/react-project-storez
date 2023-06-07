import Card from "../Card";
import React from "react";

const Home = ({
  items,
  searchValue,
  searchInput,
  onFav,
  addToCart,
  isLoading,
}) => {
  const renderItems = () => {
    const filtredItems = items.filter((obj) =>
      obj.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    {
      return (isLoading ? [...Array(8)] : filtredItems).map((obj, index) => (
        <Card
          key={index}
          id={obj.id}
          name={obj.name}
          sex={obj.sex}
          price={obj.price}
          imageUrl={obj.imageUrl}
          onFavorite={(obj) => onFav(obj)}
          onPlus={(obj) => addToCart(obj)}
          loading={isLoading}
        />
      ));
    }
  };

  return (
    <div className="content">
      <div className="banner2"></div>
      <div className="d-flex align-center justify-center">
        <h2>
         <span>{searchValue ? `` :  " НАШИ "}</span>&nbsp;{searchValue ? `Search by request:  "${searchValue}"` :  "КРОССОВКИ"}
        </h2>
       
        
      </div>
      <div className="search">
      <img height={16} width={16} src="search.svg" alt="Search" />
          <input
            value={searchValue}
            onChange={searchInput}
            className="search-in"
            placeholder="Поиск..."
          />
          
        </div>
      <div className="sneakers d-flex flex-wrap">{renderItems()} </div>
    </div>
  );
};

export default Home;
