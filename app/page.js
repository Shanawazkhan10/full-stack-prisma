import Image from "next/image";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import Post from "./component/Post";
import Link from "next/link";

async function getPosts(params) {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: {
          name: true
        }
      }
    }
  })
  return posts
}

export default async function Home() {
  const posts = await getPosts()
  console.log('====================================');
  console.log(posts);
  console.log('====================================');
  return (
    <main className={styles.main}>
      <Link href={'/add-post'}>Add post</Link>
      <h1>FEED</h1>

      {
        posts.map(({ id,
          title,
          content,
          published,
          authorId,
          author, }) => {
          return (
            <Post
              id={id}
              key={id}
              title={title}
              content={content}
              authorName={author.name}
            />
          )
        })
      }

    </main>
  );
}
