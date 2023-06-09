import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from "../components/LandingPage/LandingPage";
import PostView from "../components/PostView/PostView";
import PostForm from "../components/PostForm/PostForm";

function AppRouter() {
    return <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage />} ></Route>
        <Route path='/view' element={<PostView />} ></Route>
        <Route path='/new' element={<PostForm />} ></Route>
    </Routes>
    </BrowserRouter>
}

export default AppRouter;