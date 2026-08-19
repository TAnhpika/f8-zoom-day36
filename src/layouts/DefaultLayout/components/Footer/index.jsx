import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
    const items = [
        {
            to: "/contact",
            title: "Contact",
        },
        {
            to: "/privacy",
            title: "Privacy",
        },
    ];
    return (
        <>
            <nav className={styles.wrapper}>
                <h1>Footer page</h1>
                <ul>
                    {items.map((item, index) => {
                        return (
                            <li key={index} >
                                <NavLink className={ ({isActive}) => isActive ? styles.active : styles.item} to={item.to}>{item.title}</NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Footer;
