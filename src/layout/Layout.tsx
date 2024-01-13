import AppRouter from "../router/AppRouter";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <AppRouter />
            <Footer />
        </>
    );
};

export default Layout;
