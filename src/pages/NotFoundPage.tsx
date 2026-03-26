import { Link, useLocation } from "react-router-dom";

export default function NotFoundPage() {
  const location = useLocation();

  return (
    <div className="page">
      <h1>404 - Page Not Found</h1>
      <p>The URL <strong>{location.pathname}</strong> does not exist.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}