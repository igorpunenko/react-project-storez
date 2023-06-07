import React from "react";
import ContentLoader from "react-content-loader";

const Card = ({
  id,
  onPlus,
  onFavorite,
  name,
  sex,
  price,
  imageUrl,
  favorited = false,
  loading = false,
}) => {
  const [added, setAdded] = React.useState(false);
  const [addFav, setAddedFav] = React.useState(favorited);

  const plusClick = () => {
    onPlus({ id, name, sex, price, imageUrl });

    setAdded(!added);

    if (added == true) alert(name + " is removed from your cart");
    else alert(name + " is added to your cart");
  };

  const favClick = () => {
    onFavorite({ id, name, sex, price, imageUrl });
    setAddedFav(!addFav);
  };

  return (
    <div className="card">
      <img
        onClick={favClick}
        height={38}
        width={38}
        className="fav"
        src={addFav ? "liked.svg" : "unliked.svg"}
        alt="Fav"
      />
      <img className="card-img" width={190} height={190} src={imageUrl} />
      <p>{name}</p>
      <div className="stars">  <img src="star.svg"></img>
      <img src="star.svg"></img>
      <img src="star.svg"></img>
      <img src="star.svg"></img>
      <img src="star2.svg"></img>
      </div>
    
      <div className="cardBottom">
        <div>
          <b>{price}</b>
        </div>
        <button className="plus">
          <img
            onClick={plusClick}
            width={20}
            height={20}
            src={added ? "btn-checked.svg" : "plus.svg"}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
