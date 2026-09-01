import "./Shop.scss";
import { useOutletContext } from "react-router";
import Screen from "@/shared/components/Screen/Screen";
import Card from "./components/Card/Card";
import LoadingScreen from "@/shared/components/Loading/LoadingScreen";
import Button from "@/shared/components/Button/Button";

export default function Shop({
  handleCartBtn,
  handleDecrementBtn,
  handleIncrementBtn,
  handleInput,
  details, //Use for filter and sorter
}) {
  const { fetchedData } = useOutletContext();
  const { data, error, isPending: loading } = fetchedData;

  let cards = data?.map((obj) => (
    <Card
      key={obj.id}
      data={obj}
      handleCartBtn={handleCartBtn}
      handleDecrementBtn={handleDecrementBtn}
      handleIncrementBtn={handleIncrementBtn}
      handleInput={handleInput}
    />
  ));
  if (loading) cards = <LoadingScreen />;
  if (error) cards = <p>Failed to load items</p>;

  return (
    <Screen title="Shop">
      <div className="shop__cards container container--grid gap-4">{cards}</div>
    </Screen>
  );
}
