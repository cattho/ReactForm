import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { MovieCard } from '../components/MovieCard';
import { Navbar } from '../components/Navbar';
import { SeacrhScreen } from '../components/SeacrhScreen';

export const AppRouter = () => {
    return (
        <Router>
                <Navbar />
                <Routes>
                    <Route exact path ="/character" element={<MovieCard />} /> 
                    <Route exact path="/search" element={<SeacrhScreen/>} />
                </Routes>
        </Router>
    )
}
