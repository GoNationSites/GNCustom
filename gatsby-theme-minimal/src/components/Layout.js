/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import React from 'react';

import '../../../node_modules/animate.css'
import './animate.css'
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

import Navigation from './Navigation'
import SmoothHero from './SmoothHero'
import Footer from './Footer';

const Layout = ({children, pageTitle, location}) => {
    return (
        <Box as="main">
            <Navigation />
            <SmoothHero />
            {children}
            <Footer></Footer>
        </Box>
    );
}

export default Layout;

