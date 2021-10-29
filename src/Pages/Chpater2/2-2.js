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

const FluidMargin = () => {
  return (<React.Fragment>
    <BackHome />
    <Wrap>
      <Box></Box>
      <Box></Box>
    </Wrap>
  </React.Fragment>);
}

export default FluidMargin;