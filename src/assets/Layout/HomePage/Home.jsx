import React from 'react';
import Banner from './Banner';
import Category from './Category';
import HomeMenu from './HomeMenu';
import Featcherd from './Featcherd';
import Testmonial from './Testmonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <HomeMenu></HomeMenu>
            <Featcherd></Featcherd>
            <Testmonial></Testmonial>
        </div>
    );
};

export default Home;