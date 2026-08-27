import "./shared/styles/main.scss";

import { Outlet } from "react-router";
import favicon from "../public/favicon.svg";

import NavBar from "./features/NavBar/NavBar";
import NavBarItem from "./features/NavBar/NavBarItem";

function App() {
  return (
    <>
      <NavBar logo={favicon}>
        <NavBarItem href={"/home"} name={"home"} />
        <NavBarItem href={"/shop"} name={"shop"} />
        <NavBarItem href={"/cart"} name={"cart"} />
      </NavBar>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
