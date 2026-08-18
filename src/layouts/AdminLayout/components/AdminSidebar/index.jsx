import { NavLink } from "react-router-dom";
import styles from "./AdminSidebar.module.scss";

const items = [
    {
        to: "",
        title: "Dashboard",
    },
    {
        to: "user",
        title: "User",
    },
    {
        to: "settings",
        title: "Settings",
    },
];

function AdminSidebar() {
    return (
        <nav className={styles.wrapper}>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <NavLink
                        // vđ: active cả Dashboard + Users vì NavLink mặc định khớp theo kiểu "startsWith"
                        // end prop sẽ chỉ active khi URL exact match với to, không phải chỉ startsWith.
                            end
                            className={({ isActive }) =>
                                isActive ? styles.active : styles.item
                            }
                            to={item.to}
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default AdminSidebar;
