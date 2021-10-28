import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`

`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  margin: 30px 0px;
  a {
    margin-bottom: 20px;
  }
`

const Home = () => {
  return (<Container>
    <Layout>
      <Link to="/fluidGrid">1-1 가변그리드</Link>
      <Link to="/viewport">1-2 뷰포트</Link>
      <Link to="/mediaQuery">1-3 미디어 쿼리</Link>
    </Layout>
  </Container>);
}

export default Home;