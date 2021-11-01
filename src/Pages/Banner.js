import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { customMedia } from '../styles';

const SBanner = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  ${customMedia.greaterThan("tablet")`
    grid-column: -4 / -1;
    grid-row: 4 / 5;
  `}
  ${customMedia.greaterThan("desktop")`
    grid-column: -5 / -2;
    grid-row: 3 / 4;
  `}
`

const Box1 = styled.div`
  background: #e6567a;
  text-align: center;
  padding: 30px 0px;
  padding: 1.875rem 0px;
  ${customMedia.greaterThan("tablet")`
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

const List = styled.ul`
  background: #c44968;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;

`

const Item = styled.li`
  padding: 30px 0px;
  padding: 1.875rem 0px;
  ${customMedia.greaterThan("tablet")`
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

const Banner = () => {
  return (<SBanner>
    <Box1>
      <Link to="/"><img src="images/s_images/w3c_logo.png" alt="" /></Link>
    </Box1>
    <List>
      <Item><Link to="/"><img src="images/s_images/js_logo.png" alt="" /></Link></Item>
      <Item><Link to="/"><img src="images/s_images/html_logo.png" alt="" /></Link></Item>
      <Item><Link to="/"><img src="images/s_images/css_logo.png" alt="" /></Link></Item>
    </List>
  </SBanner>);
}

export default Banner;