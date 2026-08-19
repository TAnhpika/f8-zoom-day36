import styles from "./Pagination.module.scss";

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <ul className={styles.pagination}>
            <button
                type="button"
                style={{
                    background: currentPage === 1 ? "#ccc" : "blue",
                }}
                disabled={currentPage === 1}
                onClick={() => {
                    onPageChange(1);
                }}
            >
                First
            </button>

            <button
                type="button"
                style={{
                    background: currentPage === 1 ? "#ccc" : "orange",
                }}
                disabled={currentPage === 1}
                onClick={() => {
                    onPageChange(currentPage - 1);
                }}
            >
                Prev
            </button>

            {Array(totalPages)
                .fill(null)
                .map((_, index) => {
                    const pageNum = index + 1;
                    const isActive = currentPage === pageNum;
                    return (
                        <li
                            key={index}
                            style={{
                                color: isActive ? "#fff" : "#333",
                                background: isActive ? "#333" : "#fff",
                                cursor: "default",
                            }}
                        >
                            {pageNum}
                        </li>
                    );
                })}

            <button
                type="button"
                style={{
                    background: currentPage === totalPages ? "#ccc" : "orange",
                }}
                // chỉ button mới hỗ trợ disabled
                disabled={currentPage === totalPages}
                onClick={() => {
                    onPageChange(currentPage + 1);
                }}
            >
                Next
            </button>

            <button
                type="button"
                style={{
                    background: currentPage === totalPages ? "#ccc" : "blue",
                }}
                disabled={currentPage === totalPages}
                onClick={() => {
                    onPageChange(totalPages);
                }}
            >
                Last
            </button>
        </ul>
    );
}

export default Pagination;
