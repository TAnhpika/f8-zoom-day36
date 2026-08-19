import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";
function Posts() {
    const [params, setParams] = useSearchParams();
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(() => +params.get("page") || 1);
    const [isLoading, setIsLoading] = useState(true);

    const changePage = (newPage) => {
        setIsLoading(true);
        setPage(newPage);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`,
            )
                .then((res) => res.json())
                .then((data) => {
                    setPosts(data);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }, 200);
        return () => clearTimeout(timer);
    }, [page]);

    useEffect(() => {
        setParams(page <= 1 ? "" : { page });
    }, [page, setParams]);

    if (isLoading) return <Loading />;

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            {post.id}. {post.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <h2>Pagination: </h2>
            <ul
                style={{
                    display: "flex",
                    cursor: "pointer",
                }}
            >
                <button
                    type="button"
                    style={{
                        border: "1px solid #333",
                        padding: "2px 4px",
                        background: page === 1 ? "#ccc" : "#666",
                        color: "#fff",
                    }}
                    disabled={page === 1}
                    onClick={() => {
                        changePage(page - 1);
                    }}
                >
                    Prev
                </button>

                {Array(5)
                    .fill(null)
                    .map((_, index) => {
                        const pageNum = index + 1;
                        const isActive = page === pageNum;
                        return (
                            <li
                                key={index}
                                style={{
                                    border: "1px solid #333",
                                    padding: "2px 4px ",
                                    color: isActive ? "#fff" : "#333",
                                    background: isActive ? "#333" : "#fff",
                                }}
                                onClick={() => {
                                    changePage(pageNum);
                                }}
                            >
                                {pageNum}
                            </li>
                        );
                    })}

                <button
                    type="button"
                    style={{
                        border: "1px solid #333",
                        padding: "2px 4px",
                        background: page === 5 ? "#ccc" : "#666",
                        color: "#fff",
                    }}
                    // chỉ button mới hỗ trợ disabled
                    disabled={page === 5}
                    onClick={() => {
                        changePage(page + 1);
                    }}
                >
                    Next
                </button>
            </ul>
        </div>
    );
}

export default Posts;
