import Header from "./components/AdminHeader";
import Footer from "./components/AdminFooter";
import AdminSidebar from "./components/AdminSidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
    return (
        <div>
            <Header />
            <AdminSidebar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default AdminLayout;
