import React from 'react';
import Landing from '../Components/Landing';
import Highlights from '../Components/Highlights';
import Featured from '../Components/Featured';
import Discounted from '../Components/Discounted';
import Explore from '../Components/Explore';


const Home = () => {
    return (
        <>
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
        </>
    );
}

export default Home;
