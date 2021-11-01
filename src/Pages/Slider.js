import React from 'react';
import styled from 'styled-components';
import { customMedia } from '../styles';

const Container = styled.section`
  background: url(images/p_images/slider_01.jpg) center center no-repeat;
  ${customMedia.greaterThan("tablet")`
    grid-column: 1 / 7;
    grid-row: 2 / 3;
  `}
  ${customMedia.greaterThan("desktop")`
    grid-column: 1 / 6;
  `}
`

const Slider = () => {
  return (<Container>

  </Container>);
}

export default Slider;