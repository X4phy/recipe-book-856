import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Welcome to Recipe Book</h1>
        <p>Browse and submit your favourite recipes.</p>
        <Link to="/recipes"><button>Browse Recipes</button></Link>
        <Link to="/login"><button>Login</button></Link>
      </div>
    </>
  );
}