import React from 'react';
import styled from 'styled-components';
import BackHome from '../../Components/BackHome';

const Container = styled.div`
  @media screen and (min-width: 320px) {
    background-color: tomato;
  }
  @media screen and (min-width: 768px) {
    background-color: green;
  }
  @media screen and (min-width: 960px) {
    background-color: blue;
  }
`

const MediaQuery = () => {
  return (<Container>
    ddd
    <BackHome />
  </Container>);
}

export default MediaQuery;