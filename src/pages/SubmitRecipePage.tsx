import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "../components/Navbar";

const schema = z.object({
  title: z.string().min(3, "At least 3 characters"),
  category: z.enum(["breakfast", "lunch", "dinner", "dessert"] as const, {
    errorMap: () => ({ message: "Select a valid category" }),
  }),
  duration: z.coerce.number().min(1, "At least 1 minute").max(300, "At most 300 minutes"),
  description: z.string().min(20, "At least 20 characters"),
});

type FormData = z.infer<typeof schema>;

export default function SubmitRecipePage() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSuccess(true);
  };

  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Submit a Recipe</h1>
        {success && <p style={{ color: "green" }}>Recipe submitted successfully!</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Title</label><br />
            <input {...register("title")} />
            {errors.title && <p className="error">{errors.title.message}</p>}
          </div>
          <div>
            <label>Category</label><br />
            <select {...register("category")}>
              <option value="">Select...</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
            </select>
            {errors.category && <p className="error">{errors.category.message}</p>}
          </div>
          <div>
            <label>Duration (minutes)</label><br />
            <input type="number" {...register("duration")} />
            {errors.duration && <p className="error">{errors.duration.message}</p>}
          </div>
          <div>
            <label>Description</label><br />
            <textarea {...register("description")} />
            {errors.description && <p className="error">{errors.description.message}</p>}
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => { reset(); setSuccess(false); }}>Reset</button>
        </form>
      </div>
    </>
  );
}