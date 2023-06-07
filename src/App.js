import axios from "axios";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Favourite from "./components/pages/Favourite";
import Main from "./components/pages/Main";
import Footer from "./components/pages/Footer";
import About from "./components/pages/About";

const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearch] = React.useState("");
  const [cartOpen, setCart] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourite, setFavourite] = React.useState([]);
  const [favItems, setFavItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get(
        "https://63fb60872027a45d8d656477.mockapi.io/items"
      );
      const cartResponse = await axios.get(
        "https://63fb60872027a45d8d656477.mockapi.io/cart"
      );
      const favouriteResponse = await axios.get(
        "https://63fe76d6571200b7b7cb49bf.mockapi.io/favourite"
      );

      setLoading(false);

      setItems(itemsResponse.data);
      setCartItems(cartResponse.data);
      setFavourite(favouriteResponse.data);
    }

    fetchData();
  }, []);

  const addToCart = (item) => {
    console.log(item);
    if (cartItems.find((obj) => Number(obj.id) === Number(item.id))) {
      axios
        .delete(`https://63fb60872027a45d8d656477.mockapi.io/cart/${item.id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      setCartItems((prev) =>
        prev.filter((obj) => Number(obj.id) !== Number(item.id))
      );
    } else {
      axios.post("https://63fb60872027a45d8d656477.mockapi.io/cart", item);
      setCartItems([...cartItems, item]);
    }
  };

  const onFav = (obj) => {
    if (favourite.find((favObj) => favObj.id === obj.id)) {
      axios.delete(
        `https://63fe76d6571200b7b7cb49bf.mockapi.io/favourite/${obj.id}`
      );
      setFavItems((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      axios.post("https://63fe76d6571200b7b7cb49bf.mockapi.io/favourite", obj);

      setFavItems([...favItems, obj]);
    }
  };

  const searchInput = (event) => {
    setSearch(event.target.value);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63fb60872027a45d8d656477.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <AppContext.Provider>
      <div className="wrapper">
        {cartOpen && (
          <Overlay
            onRemove={onRemoveItem}
            items={cartItems}
            onClickClose={() => setCart(false)}
          />
        )}

        <Header onClickCart={() => setCart(true)} />

        <Routes>
          <Route
            path="/products"
            element={
              <Home
                items={items}
                searchValue={searchValue}
                searchInput={searchInput}
                onFav={onFav}
                addToCart={addToCart}
                isLoading={false}
              />
            }
          />

          <Route
            path="/favourite"
            element={<Favourite onFav={onFav} items={favourite} />}
          />
           <Route
            path="/"
            element={<Main />}
          />
             <Route
            path="/about"
            element={<About/>}
          />
        </Routes>
        <Footer/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
