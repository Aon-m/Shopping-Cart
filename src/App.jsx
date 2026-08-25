import { NavLink, Outlet } from "react-router";

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
