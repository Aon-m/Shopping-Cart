import MoreInfoBtn from "@/features/Shop/components/MoreInfoBtn/MoreInfoBtn";
import truncate from "./truncate";
import { useEffect, useState } from "react";

export default function Card({ data, updateCart }) {
  const [quantity, setQuantity] = useState(String(Number(data.quantity)));

  useEffect(() => {
    updateCart({
      ...data,
      quantity: Number(quantity),
    });
  }, [quantity, updateCart, data]);

  const handleIncrement = () => setQuantity((prev) => String(Number(prev) + 1));
  const handleDecrement = () =>
    setQuantity((prev) => String(Math.max(0, Number(prev) - 1)));
  const handleInput = (e) => setQuantity(e.target.value);

  const dialogContent = (
    <>
      <h3 className="card__title text-5 text-600">
        <span className="text-800">Title: </span>
        {data.title}
      </h3>
      <p className="card__description text-400">
        <span className="text-800">Description: </span>
        {data.description}
      </p>
      <p className="text-5 text-400">
        <span className="text-800">Category: </span>
        {data.category}
      </p>
    </>
  );

  return (
    <div className="card">
      <div className="card__content">
        <img className="card__image" src={data?.image} alt={data.title} />
        <h3
          className="card__title text-6 text-600 text-center"
          title={data.title}
        >
          {truncate(data.title, 13)}
        </h3>
        <p className="card__price text-6 text-center">
          <span className="text-800">Price: </span>
          {data.price}
        </p>
        <div className="card__inputs">
          <button
            type="button"
            className="button button--black card__btn text text-white text-4"
            onClick={handleDecrement}
          >
            -
          </button>
          <input
            type="number"
            className="card__input text text-center text-5"
            min={0}
            onInput={handleInput}
            value={quantity}
          />
          <button
            type="button"
            className="button button--black card__btn text text-white text-4"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <MoreInfoBtn
          btnContent="!"
          key={data.id}
          dialogContent={dialogContent}
        />
      </div>
    </div>
  );
}
