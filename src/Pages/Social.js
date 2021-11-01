import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { customMedia } from '../styles';

const Section = styled.section`
  background: #fff;
  ${customMedia.greaterThan("tablet")`
    grid-column: -3 / -1;
    grid-row: 3 / 4;
  `}
    ${customMedia.greaterThan("desktop")`
    grid-column: -2 / -1;
    grid-row: 3 / 4;
  `}
`

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  padding: 30px 0px;
  padding: 1.875rem 0px;
  ${customMedia.greaterThan("tablet")`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 0px;
    height: 100%;
    align-items: center;
  `}
`

const Item = styled.li``

const Social = () => {
  return (<Section>
    <List>
      <Item><Link to="" /><img src="images/s_images/social_icon_01.png" alt="" /></Item>
      <Item><Link to="" /><img src="images/s_images/social_icon_02.png" alt="" /></Item>
      <Item><Link to="" /><img src="images/s_images/social_icon_03.png" alt="" /></Item>
    </List>
  </Section>);
}

export default Social;