function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <ul
            style={{
                display: "flex",
            }}
        >
            <button
                type="button"
                style={{
                    border: "1px solid #333",
                    padding: "2px 4px",
                    background: currentPage === 1 ? "#ccc" : "blue",
                    color: "#fff",
                    cursor: "pointer",
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
                    border: "1px solid #333",
                    padding: "2px 4px",
                    background: currentPage === 1 ? "#ccc" : "orange",
                    color: "#fff",
                    cursor: "pointer",
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
                                border: "1px solid #333",
                                padding: "2px 4px ",
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
                    border: "1px solid #333",
                    padding: "2px 4px",
                    background: currentPage === totalPages ? "#ccc" : "orange",
                    color: "#fff",
                    cursor: "pointer",
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
                    border: "1px solid #333",
                    padding: "2px 4px",
                    background: currentPage === totalPages ? "#ccc" : "blue",
                    color: "#fff",
                    cursor: "pointer",
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
