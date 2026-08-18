import { Outlet } from "react-router-dom";
import Header from "../../layouts/components/Header";
import AuthSidebar from "./components/AuthSidebar";
import styles from "./AuthLayout.module.scss";
function AuthLayout() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <AuthSidebar />
                <Outlet/>
            </div>
        </div>
    );
}

export default AuthLayout;
