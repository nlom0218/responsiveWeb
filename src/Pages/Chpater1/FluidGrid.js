import React from 'react';
import styled from 'styled-components';
import BackHome from '../../Components/BackHome';

const Contatiner = styled.div``

const Wrap = styled.div`
width:90%;
height:500px;
margin:0 auto;
background:#e65d5d;
border:4px solid #000;
`

const FluidGrid = () => {
  return (<Contatiner>
    <BackHome />
    <Wrap></Wrap>
  </Contatiner>);
}

export default FluidGrid;