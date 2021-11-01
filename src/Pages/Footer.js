import React from 'react';
import styled from 'styled-components';
import { customMedia } from '../styles';

const SFooter = styled.footer`
  background: #474747;
  color: #fff;
  padding: 20px;
  padding: 1.250rem;
  font-size: 0.813em;
  font-size: 0.813rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  text-shadow: 0px 1px 1px #191919;
  ${customMedia.greaterThan("tablet")`
    grid-column: 1 / -1;
    padding: 40px;
    padding: 2.50rem;
  `}
    ${customMedia.greaterThan("desktop")`
    text-align: left;
  `}
`

const Content = styled.p``

const Footer = () => {
  return (<SFooter>
    <Content>copyright&copy; 2014.flat design blog all rights reserved.</Content>
  </SFooter>);
}

export default Footer;