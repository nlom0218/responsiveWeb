import React from 'react';
import styled from 'styled-components';
import BackHome from '../../Components/BackHome';

const Wrap = styled.div`
  width: 90%;
  max-width: 960px;
  height: 500px;
  margin: 0 auto;
  border: 4px solid #000;
`

const Box = styled.div`
  display: inline-block;
  width: 31.25%;
  /* 300px / 960px */
  height: 100%; 
  :first-child{
    background-color: blue;
    margin-right: 37.5%;
    /* 360px / 960px */
  }
  :nth-child(2){
    background-color: yellow;
  }
`

const Wrpa2 = styled.div`
  width: 90%;
  max-width: 960px;
  height: 500px;
  margin: 30px auto;
  border: 4px solid #000;
`

const Box2 = styled.div`
  width: 31.25%;
  /* 300px / 960px */
  /* height: 100%; */
  display: inline-block;
  :first-child {
    padding: 50px 5.208333333333%;
    background-color: #1f518b;
  }
  :nth-child(2) {
    padding: 130px 13.541666666667%;
    background-color: #f7e041;
  }
`

const FluidMargin = () => {
  return (<React.Fragment>
    <BackHome />
    <Wrap>
      <Box></Box>
      <Box></Box>
    </Wrap>

    <Wrpa2>
      <Box2></Box2>
      <Box2></Box2>
    </Wrpa2>
  </React.Fragment>);
}

export default FluidMargin;