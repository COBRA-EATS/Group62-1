import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Box, Container} from '@mui/material';

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { AuthProvider } from './context/auth';
import CreatePost from "./components/CreatePost/CreatePost";

const App = () => {
    return (
        <AuthProvider>
        <BrowserRouter>
        <Box>
            <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/auth" exact element={<Auth/>}/>
                    <Route path="/createpost" exact element={<CreatePost/>}/>
                </Routes>     
        </Box>
        </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
