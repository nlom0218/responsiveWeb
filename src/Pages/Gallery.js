import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { customMedia } from '../styles';

const List = styled.ul`
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 30px;
  row-gap: 1.875rem;
  padding: 50px 12.5%;
  padding: 3.125rem 12.5%;
  text-align: center;
  background: #e65d5d;
  text-shadow: 0px 1px 1px #c43434;
  ${customMedia.greaterThan("tablet")`
    grid-column: 1 / -4;
    grid-row: 4 / 5;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 30px;
    column-gap: 1.875rem;
    padding: 50px 5.20833333%;
    padding: 3.125rem 5.20833333%;
  `}
  ${customMedia.greaterThan("desktop")`
    grid-column: 6 / 9;
    grid-row: 2 / 3;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  `}
`

const Item = styled.li`
  a {
    width: 100%;
  }
  overflow: auto;
  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 3px;
    box-shadow: 0px 1px 1px #c43434;
  }
  ${customMedia.greaterThan("desktop")`
    width: 50%;
    max-width: 50%;
  `}
`

const Caption = styled.div`
  margin-top: 20px;
  margin-top: 1.250rem;
  font-size: 1.188em;
  font-size: 1.188rem;
  text-transform: uppercase;
  font-weight: bold;
`

const Gallery = () => {
  return (
    <List>
      <Item>
        <Link to="/">
          <img src="images/p_images/gallery_01.jpg" alt="" />
          <Caption>디자인 트렌트 플랫</Caption>
        </Link>
      </Item>
      <Item>
        <Link to="/">
          <img src="images/p_images/gallery_02.jpg" alt="" />
          <Caption>원색이 포인트 플랫</Caption>
        </Link>
      </Item>
    </List>
  );
}

export default Gallery;