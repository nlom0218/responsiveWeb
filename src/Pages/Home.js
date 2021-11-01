import React from 'react';
import styled from 'styled-components';
import { customMedia } from '../styles';
import Banner from './Banner';
import Gallery from './Gallery';
import Header from './Header';
import Post from './Post';
import Rankup from './Rankup';
import Slider from './Slider';

const Wrap = styled.div`
  display: grid;
  ${customMedia.greaterThan("tablet")`
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(5, auto);
  `}
  ${customMedia.greaterThan("desktop")`
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: auto 450px auto auto;
    grid-template-rows: auto 28.125rem auto auto;
  `}
`

const Home = () => {

  return (<Wrap>
    <Header />
    <Slider />
    <Post />
    <Gallery />
    <Rankup />
    <Banner />
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