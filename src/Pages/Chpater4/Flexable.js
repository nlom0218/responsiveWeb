import React from 'react';
import styled from 'styled-components';

const Warp = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 90%;
  margin: 0 auto;
`

const Header = styled.header`
  display: flex;
  order: 1;
  position: relative;
  width: 100%;
  justify-content: flex-end;
  h1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 12.5%;
    height: 142px;
    background-color: #ff6b57;
  }
  nav {
    width: 87.5%;
    min-height: 80px;
    background-color: #ff6b57;
  }
`

const Slider = styled.section`
  order: 2;
  width: 50%;
  background-color: #3c90be;
`

const Gallery = styled.section`
  order: 3;
  width: 27.08333333333333333%;
  height: 440px;
  background-color: #f8de73;
`

const Rankup = styled.section`
  order: 4;
  width: 22.916666666667%;
  background-color: #00d2a5;
`

const LatestPost = styled.section`
  order: 5;
  width: 30%;
  background-color: #9cabe4;
`

const PopularPost = styled.section`
  order: 6;
  width: 30%;
  background-color: #d76817;
`

const Banner = styled.section`
  display: flex;
  order: 7;
  flex-flow: column nowrap;
  width: 22.916666666666667%;
  div {
    flex: 1 1 0;
  }
`

const BannerBox1 = styled.div`
  background-color: #0175bb;
`

const BannerBox2 = styled.div`
  background-color: #1261c9;
`

const Social = styled.section`
  order: 8;
  width: 17.083333333333333%;
  height: 270px;
  background-color: #fe6eda;
`

const Footer = styled.footer`
  order: 9;
  width: 100%;
  height: 94px;
  background-color: #474747;
`

const Flexalbe = () => {
  return (<Warp>
    <Header>
      <h1></h1>
      <nav></nav>
    </Header>
    <Slider></Slider>
    <Gallery></Gallery>
    <Rankup></Rankup>
    <LatestPost></LatestPost>
    <PopularPost></PopularPost>
    <Banner>
      <BannerBox1></BannerBox1>
      <BannerBox2></BannerBox2>
    </Banner>
    <Social></Social>
    <Footer></Footer>
  </Warp>);
}

export default Flexalbe;