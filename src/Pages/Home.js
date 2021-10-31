import React from 'react';
import styled from 'styled-components';
import { customMedia } from '../styles';
import Header from './Header';
import Slider from './Slider';

const Wrap = styled.div`
  display: grid;
  ${customMedia.greaterThan("tablet")`
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(5, auto);
  `}
  ${customMedia.greaterThan("desktop")`
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, auto);
  `}
`

const Home = () => {

  return (<Wrap>
    <Header />
    <Slider />
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