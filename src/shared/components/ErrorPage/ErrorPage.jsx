import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div>
      <h1>404 not found</h1>
      <p>Oops, you found a glitch in the matrix</p>
      <Link to="/">Wanna return?</Link>
    </ div>
  );
}
