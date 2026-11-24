"use client";

import { useFormState } from "react-dom";

import FormSubmit from "@/components/form-submit";
import { createPost } from "@/app/new-post/actions";

export default function NewPostForm() {
  const [state, formAction] = useFormState(createPost, {});

  return (
    <form action={formAction}>
      <p className="form-control">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p className="form-control">
        <label htmlFor="image">Image URL</label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          id="image"
          name="image"
          required
        />
      </p>
      <p className="form-control">
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="5" required />
      </p>
      <p className="form-actions">
        <FormSubmit />
      </p>

      {state.errors && (
        <ul className="form-errors">
          {state.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
    </form>
  );
}
