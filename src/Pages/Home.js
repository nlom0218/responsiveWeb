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
      <Link to="/fluidGrid2">2-1 서로 다른 크기의 박스를 가변 크기로 변화하기</Link>
      <Link to="/2-2">2-2 가변 마진과 가변 패딩 이해하기</Link>
      <Link to="/3-1">3-1 미디어 쿼리 사용해 웹사이트 구조 변경하기</Link>
      <Link to="/4-1">4-1 플랙서블 박스 이용해 목업 웹사이트 만들기</Link>
    </Layout>
  </Container>);
}

export default Home;