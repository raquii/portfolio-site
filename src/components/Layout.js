import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/main.css';

function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
