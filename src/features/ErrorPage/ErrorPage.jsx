import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex flex-column gap-4">
      <h1 className="text text-9 text-center">Error 404: Page not found</h1>
      <p className="text text-6 text-center">
        Oops, you found a glitch in the matrix...
        <Link className="text-primary" to="/">
          Follow me to escape
        </Link>
      </p>
    </div>
  );
}
