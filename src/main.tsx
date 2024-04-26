import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/global.css";
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Router>
        <Routes>
            <Route
                path="/"
                element={<Dashboard />} />
        </Routes>
    </Router>
);