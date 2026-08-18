import Header from "../../layouts/components/Header";
import Footer from "./components/Footer";

import { Outlet } from "react-router";
function DefaultLayout() {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
