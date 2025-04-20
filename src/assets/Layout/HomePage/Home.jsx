import React from 'react';
import Banner from './Banner';
import Category from './Category';
import HomeMenu from './HomeMenu';
import Featcherd from './Featcherd';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <HomeMenu></HomeMenu>
            <Featcherd></Featcherd>
        </div>
    );
};

export default Home;