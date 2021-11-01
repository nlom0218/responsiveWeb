import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { customMedia } from '../styles';

const Section = styled.section`
  display: grid;
  row-gap: 20px;
  row-gap: 1.25rem;
  padding: 40px 12.5%;
  padding: 2.5rem 12.5%;
  background: #219af7;
  text-align: center;
  text-shadow: 0px 1px 1px #1974ba;
  font-weight: bold;
  ${customMedia.greaterThan("tablet")`
    grid-column: 7 / -1;
    grid-row: 2 / 3;
  `}
  ${customMedia.greaterThan("desktop")`
    grid-column: 9 / -1;
    grid-template-rows: auto 1fr;
  `}
`

const Title = styled.h2`
  color: #fff;
  font-size: 20px;
  font-size: 1.25rem;
`

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  column-gap: 0.625rem;
  row-gap: 15px;
  row-gap: 0.9375rem;
  ${customMedia.greaterThan("desktop")`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-between;
  `}
`

const Item = styled.li`
  border: 1px solid #fff;
  padding: 10px 0px;
  padding: 0.625rem 0rem;
  border-radius: 5px;
  ${customMedia.greaterThan("desktop")`
    border: 0;
    padding: 0;
    border-radius: 5px;
    counter-increment: rankup-counter;
    :before {
      content: counter(rankup-counter) ".";
      padding-right: 6px;
      padding-right: 0.375rem;
      font-weight: bold;
      color: #fff;
      text-shadow: 0px 1px 1px #428e9e;
    }
  `}
`

const Rankup = () => {
  return (<Section>
    <Title>인기 검색어</Title>
    <List>
      <Item><Link to="/">반응형 웹</Link></Item>
      <Item><Link to="/">미디어 쿼리</Link></Item>
      <Item><Link to="/">뷰포트</Link></Item>
      <Item><Link to="/">CSS 트릭스</Link></Item>
      <Item><Link to="/">W3C</Link></Item>
      <Item><Link to="/">루크 W</Link></Item>
      <Item><Link to="/">CSS 젠 가든</Link></Item>
      <Item><Link to="/">클리어 보스</Link></Item>
      <Item><Link to="/">XE</Link></Item>
      <Item><Link to="/">워드프레스</Link></Item>
    </List>
  </Section>);
}

export default Rankup;