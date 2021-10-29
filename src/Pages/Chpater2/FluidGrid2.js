import React from 'react';
import styled from 'styled-components';
import BackHome from '../../Components/BackHome';

const Wrap = styled.div`
  width: 90%;
  height: 500px;
  margin: 0 auto;
  border: 4px solid #000;
`

const Container = styled.div`
  width: 93.75%;
  /* 900px / 960px */
  height: 492px;
  margin: 0 auto;
  border: 4px solid tomato;
`

const Box = styled.div`
  display: inline-block;
  height: 100%;
  :first-child
  {
    width: 33.333333333333%;
    /* 900px / 900px */
    background-color: blue;
  }
  :nth-child(2)
  {
    width: 66.66666666666%;
    /* 600px / 900px */
    background-color: yellow;
  }
`



const FluidGrid2 = () => {
  return (
    <div>
      <BackHome />
      <Wrap>
        <Container>
          <Box></Box>
          <Box></Box>
        </Container>
      </Wrap>
    </div>
  );
}

export default FluidGrid2;