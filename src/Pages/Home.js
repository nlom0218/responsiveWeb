import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Wrap = styled.div`
  width:100%;
  display: grid;
`

const Home = () => {

  return (<Wrap>
    <Header />
    {/* <Slider></Slider>
    <LatestPost></LatestPost>
    <Gallery></Gallery>
    <Rankup></Rankup>
    <Banner></Banner>
    <Social></Social>
    <Footer></Footer> */}
  </Wrap>);
}

export default Home;