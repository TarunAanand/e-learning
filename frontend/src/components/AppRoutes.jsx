import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import App from './App';
import Hero from './Hero';
import Test from './Test';
import PrivateRoute from './PrivateRoute';

export default function AppRoutes() {
    console.log("Approutes reached...")
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/courses" element={
                    <PrivateRoute>
                        <App />
                    </PrivateRoute>
                    } />
                <Route path="/test" element={<Test />} />
            </Routes>
        </BrowserRouter>
    )
}