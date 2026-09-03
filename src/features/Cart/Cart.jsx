import "./Cart.scss";
import { useOutletContext } from "react-router";
import Screen from "@/shared/components/Screen/Screen";
import Card from "./Card/Card";

export default function Cart() {
  const { cart, updateCart, removeFromCart } = useOutletContext();

  const cards = cart?.map((obj) => (
    <Card
      key={obj.id}
      data={obj}
      updateCart={updateCart}
      removeItem={removeFromCart}
    />
  ));

  return (
    <Screen title="Cart">
      <div className="container container--grid gap-4">{cards}</div>
    </Screen>
  );
}
