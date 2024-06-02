"use client"

import { useRouter } from "next/navigation";

const Post = ({
    id,
    title,
    content,
    published,
    authorId,
    authorName
}) => {
    const router = useRouter()
    async function DeletePost(id) {
        try {
            await fetch(`/api/post/${id}`, {
                method: "DELETE",
            });
            router.refresh()
        } catch (error) {
            console.log("====================================");
            console.log(error);
            console.log("====================================");
        }
    }
    return (
        <div style={{
            border: "1px solid black", padding: "15px",
            margin: "10px 0px"
        }}>
            <h3>{authorName}</h3>
            <h4>{title}</h4>
            <h4>{content}</h4>
            <span style={{ cursor: 'pointer' }}
                onClick={() => DeletePost(id)}
            >DELETE POST</span>
        </div>
    )
}

export default Post