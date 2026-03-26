import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { recipes } from "../data/recipes";

export default function RecipesPage() {
  const [selected, setSelected] = useState<string>("all");

  const filtered = selected === "all"
    ? recipes
    : recipes.filter((r) => r.category === selected);

  return (
    <>
      <Navbar />
      <div className="page">
        <h1>All Recipes</h1>
        <div>
          {["all", "breakfast", "lunch", "dinner", "dessert"].map((cat) => (
            <button key={cat} onClick={() => setSelected(cat)}>{cat}</button>
          ))}
        </div>
        {filtered.map((r) => (
          <div key={r.id} className="recipe-card">
            <Link to={`/recipe/${r.id}`}>
              <h3>{r.title}</h3>
            </Link>
            <p>Category: {r.category}</p>
            <p>Duration: {r.duration} mins</p>
          </div>
        ))}
      </div>
    </>
  );
}