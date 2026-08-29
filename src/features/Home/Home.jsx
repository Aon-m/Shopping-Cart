import { useNavigate, useOutletContext } from "react-router";
import styles from "./Home.module.scss";
import Button from "@/shared/components/Button/Button";

export default function Home() {
  const { logo } = useOutletContext();
  const navigate = useNavigate();

  return (
    <section
      className={`${styles.container} flex flex-column text text-center gap-6`}
    >
      <img src={logo} alt="Logo" className={`icon icon--8 ${styles.logo}`} />
      <h2 className="text-9">Shopping Cart</h2>
      <p className="text-6">
        Explore our collection of products, from everyday essentials to unique
        finds. Take your time, discover something you love, and make your next
        purchase a little more exciting.
      </p>
      <Button onClick={() => navigate("/shop")}>Let's Shop!</Button>
    </section>
  );
}
