import { BrowserRouter as Router, Routes, Route } from "react-router";

// Layout
import DefaultLayout from "../../layouts/DefaultLayout";
import AuthLayout from "../../layouts/AuthLayout";
import AdminLayout from "../../layouts/AdminLayout";

// Pages
import Home from "../../pages/Home";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import PostDetail from "../../pages/PostDetail";
import Contact from "../../pages/Contact";
import Privacy from "../../pages/Privacy";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ForgotPassword from "../../pages/ForgotPassword";
import Dashboard from "../../pages/Dashboard";
import User from "../../pages/User";
import Settings from "../../pages/Settings";
import NotFound from "../../pages/NotFound";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="user" element={<User />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/forgotPassword"
                        element={<ForgotPassword />}
                    />
                </Route>

                {/* No layout */}
                {/* path "*" sẽ match với bất kỳ URL nào không được định nghĩa trong các routes khác.  */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
