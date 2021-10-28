import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 30px 0px;
`

const Home = () => {
  return (<Container>
    <Link to="/fluidGrid">1장 가변그리드</Link>
  </Container>);
}

export default Home;