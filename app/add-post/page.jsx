"use client";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
const page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }

    setContent("");
    setTitle("");
  };

  return (
    <main className={styles.main}>
      <Link href={"/"}>View Feed</Link>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default page;
