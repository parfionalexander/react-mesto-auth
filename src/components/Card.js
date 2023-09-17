import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function Card({name, src, likes, card, onCardClick, onCardLike, onCardDelete}) {

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(item => item._id === currentUser._id);
  const cardLikeButtonClassName = `element__reaction ${isLiked && 'element__reaction_like'}`;

  function handleClick() {
    onCardClick(card);
  };

  function handleLikeClick() {
    onCardLike(card)
  };

  function handleDeleteClick() {
    onCardDelete(card)
  }

  return (
    <div className="element">
      { isOwn && (<button id="trashButton" className="element__trash" type="button" aria-label="Удалить карточку"
      onClick={handleDeleteClick}></button>)}
        <img className="element__pic" alt={name} src={src} onClick={handleClick}/>
          <div className="element__info">
            <h2 className="element__name">{name}</h2>
            <div className="element__likes">
              <button className={cardLikeButtonClassName} type="button" aria-label="Поставить лайк карточке"
              onClick={handleLikeClick}></button>
                <p className="element__reaction-count">{likes}</p>
            </div>
          </div>
    </div>
  )
};

export default Card;