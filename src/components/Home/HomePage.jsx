import React from 'react';

import Home from './home_components/Home';
import HomeMiniCards from './home_components/HomeMiniCards';
import HomeDescription from './home_components/HomeDescription';
import HomeSolutions from './home_components/HomeSolutions';
import HomeContact from './home_components/HomeContact';

const HomePage = () => {
    return (
        <div>
            <Home />
            <HomeMiniCards />
            <HomeDescription />
            <HomeSolutions />
            <HomeContact />
        </div>
    )
}

export default HomePage
