import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PortfolioContent from '../../components/Portfolio/Portfolio';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <PortfolioContent />
            <Footer />
        </div>
    );
}

export default Portfolio;

