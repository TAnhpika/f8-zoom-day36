import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";

import './PostDetail.module.scss'
function PostDetail() {
    const params = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then((res) => {
                if (!res.ok) {
                    navigate("/posts", { replace: true });
                    return;
                }
                return res.json();
            })
            .then((data) => setPost(data));
    }, [params.id, navigate]);

    useEffect(() => {
        fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`,
        )
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, [params.id]);

    if (!post) return <Loading />;

    return (
        <>
            <button onClick={() => navigate(-1)}>Back</button>
            <h1 style={{ fontWeight: "bold" }}>
                {post.id}. {post.title}
            </h1>
            <p style={{ fontStyle: "italic" }}>UserId: {post.userId}</p>
            <p>Body: {post.body}</p>

            <h2>Comment: </h2>
            {comments?.map((comment) => (
                <p key={comment.id}>
                    <strong>Name:</strong> {comment.name} <br/>
                    <strong>Email:</strong> {comment.email} <br/>
                    <strong>Body:</strong> {comment.body} <br/>
                    </p>
            ))}
        </>
    );
}

export default PostDetail;
