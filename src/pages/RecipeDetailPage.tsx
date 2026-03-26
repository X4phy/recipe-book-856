import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { recipes } from "../data/recipes";

export default function RecipeDetailPage() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));

  return (
    <>
      <Navbar />
      <div className="page">
        <Link to="/recipes">← Back to Recipes</Link>
        {recipe ? (
          <>
            <h1>{recipe.title}</h1>
            <p>Category: {recipe.category}</p>
            <p>Duration: {recipe.duration} mins</p>
          </>
        ) : (
          <>
            <p><em>Recipe not found</em></p>
            <Link to="/recipes">Go back to recipes</Link>
          </>
        )}
      </div>
    </>
  );
}