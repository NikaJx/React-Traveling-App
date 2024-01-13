import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import SearchResultList from "../pages/search-result-list/SearchResultList";
import TourDetails from "../pages/tour-details/TourDetails";
import Tours from "../pages/tours/Tours";
import ThankYou from "../pages/thank-you/ThankYou";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tours/search" element={<SearchResultList />} />
            <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
    );
};

export default AppRouter;
