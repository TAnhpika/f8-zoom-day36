import { NavLink } from "react-router-dom";
import styles from "./AuthSidebar.module.scss";

const items = [
    {
        to: "/login",
        title: "Login",
    },
    {
        to: "/register",
        title: "Register",
    },
    {
        to: "/forgotPassword",
        title: "ForgotPassword",
    },
];

function AuthSidebar() {
    return (
        <nav className={styles.wrapper}>
            <ul>
                {items.map((items, index) => (
                    <li key={index}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles.active : styles.link
                            }
                            to={items.to}
                        >
                            {items.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default AuthSidebar;
