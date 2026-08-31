import Screen from "@/shared/components/Screen/Screen";
import Card from "./components/Card/Card";

export default function Shop({ data }) {
  // data = array of objs with info
  return (
    <Screen title="Shop">
      <Card
        data={{
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
        }}
      />
    </Screen>
  );
}
