import React from 'react';
import styled from 'styled-components';
import BackHome from '../../Components/BackHome';

const Wrap = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 100px auto;
  border: 4px solid #000;
  div {
    display: inline-block;
    height: 100px;
    @media all and (min-width: 320px) {
      width: 100%;
    }
    @media all and (min-width: 766px) {
      width: 50%;
      :nth-child(5) {
        width: 100%;
      }
    }
    @media all and (min-width: 1024px) {
      width: 20%;
      :nth-child(5) {
        width: 20%;
      }
    }
  }
`

const Box = styled.div`
  :nth-child(1) {
    background-color: #f45750;
  }
  :nth-child(2) {
    background-color: #40b0f9;
  }
  :nth-child(3) {
    background-color: #00d2a5;
  }
  :nth-child(4) {
    background-color: #ff884d;
  }
  :nth-child(5) {
    background-color: #464646;
  }
`

const MediaQuery2 = () => {
  return (
    <React.Fragment>
      <BackHome />
      <Wrap>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Wrap>
    </React.Fragment>);
}

export default MediaQuery2;