import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";

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

    const totalPages = 5;

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

            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={changePage}
            />
        </div>
    );
}

export default Posts;
