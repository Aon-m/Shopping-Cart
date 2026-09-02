import "./Shop.scss";
import { useOutletContext } from "react-router";
import Screen from "@/shared/components/Screen/Screen";
import Card from "./components/Card/Card";
import LoadingScreen from "@/shared/components/Loading/LoadingScreen";

export default function Shop() {
  const { fetchedData, addToCart } = useOutletContext();
  const { data, error, isPending: loading } = fetchedData;

  function handleCartBtn(quantity, obj) {
    addToCart({
      ...obj,
      quantity,
    });
  }

  let cards = data?.map((obj) => (
    <Card key={obj.id} data={obj} handleCartBtn={handleCartBtn} />
  ));
  if (loading) cards = <LoadingScreen />;
  if (error) cards = <p>Failed to load items</p>;

  return (
    <Screen title="Shop">
      <div className="shop__cards container container--grid gap-4">{cards}</div>
    </Screen>
  );
}
