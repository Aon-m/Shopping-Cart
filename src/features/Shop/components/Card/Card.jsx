import "./Card.scss";
import MoreInfoBtn from "../MoreInfoBtn/MoreInfoBtn";
import truncate from "./truncate";
import cart from "@/assets/icons/icon-shopping-cart-add.svg";

export default function Card({
  data,
  handleIncrementBtn,
  handleDecrementBtn,
  handleInput,
  handleCartBtn,
}) {
  const dialogContent = (
    <>
      <h3 className="card__title text-5 text-600">{data.title}</h3>
      <p className="card__description text-400">{data.description}</p>
    </>
  );

  return (
    <div className="card">
      <div className="card__content">
        <div className="card__image">{data?.image}</div>
        <h3 className="card__title text-7 text-600 text-center">
          {truncate(data.title)}
        </h3>
        <p className="card__price text-7 text-center">{data.price}</p>
        <div className="card__inputs">
          <button
            type="button"
            className="button button--black card__btn text text-white text-4"
            onClick={handleDecrementBtn}
          >
            -
          </button>
          <input
            type="number"
            className="card__input text text-center text-5"
            onInput={handleInput}
          />
          <button
            type="button"
            className="button button--black card__btn text text-white text-4"
            onClick={handleIncrementBtn}
          >
            +
          </button>
        </div>

        <button
          type="button"
          className="button button--white button--rectangle text-black text-5 text-600 flex flex-row gap-1"
          onClick={handleCartBtn}
        >
          <img src={cart} alt="" aria-hidden="true" className="icon icon--4" />
          Add to Cart
        </button>

        <MoreInfoBtn
          btnContent="!"
          key={data.id}
          dialogContent={dialogContent}
        />
      </div>
    </div>
  );
}
