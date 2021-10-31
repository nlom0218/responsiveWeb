import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { customMedia } from '../styles';

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  background: #2ecc71;
  ${customMedia.greaterThan("tablet")`
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  `}
  ${customMedia.greaterThan("desktop")`
    position: relative;
    // grid-column: 1 / -1;
    // grid-row: 1 / 2;
  `}
`

const InfoSection = styled.div`
  border-bottom: 1px solid #39d67c;
  ${customMedia.greaterThan("desktop")`
    z-index: 30;
    position: absolute;
    border-bottom: 0;
    right: 30px;
    right: 1.875rem;
    top: 15px;
    top: 0.9375rem;
  `}
`

const InfoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  padding: 15px 0;
  padding: 0.938rem 0;
`

const InfoItem = styled.li`
  ${customMedia.greaterThan("desktop")`
    margin-left: 10px;
    margin-left: 0.625rem;
  `}
`

const SHeader = styled.header`
  position: relative;
  display: grid;
  font-weight: 600;
  line-height: 21px;
  line-height: 1.313rem;
  font-size: 1.188em;
  font-size: 1.188rem;
  ${customMedia.greaterThan("tablet")`
    background: #2ecc71;
    height: 60px;
    heigth: 3.75rem;
  `}
  ${customMedia.greaterThan("desktop")`
    height: 80px;
    height: 5rem;
  `}
`

const Title = styled.div`
  text-align: center;
  padding: 30px 0px;
  padding: 1.875em 0px;
  text-transform: uppercase;
  text-shadow: 0px 1px 1px #25ab5e;
  ${customMedia.greaterThan("tablet")`
    background: #2ecc71;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding: 0;
    top: 0;
    left: 0;
    z-index: 10;
    width: 120px;
    width: 7.5rem;
    height: 120px;
    height: 7.5rem;
  `}
  ${customMedia.greaterThan("desktop")`
    width: 120px;
    height: 160px;
    height: 10rem;
    
  `}
`

const HeaderNav = styled.nav`
  background: #2c3e50;
  ${customMedia.greaterThan("tablet")`
    width: 40%;
    position: absolute;
    right: 0;
    top: 60px;
    top: 3.75rem;
  `}
  ${customMedia.greaterThan("desktop")`
    position: static;
    background: #2ecc71;
    width: 100%;
  `}
`

const GnbList = styled.ul`
  ${customMedia.greaterThan("desktop")`
    display: grid;
    grid-template-columns: repeat(4, auto) 1fr;
    column-gap: 20px;
    column-gap: 1.25rem;
    margin-left: 160px;
    margin-left: 10rem;
    height: 100%;
    align-items: center;
  `}
`

const GnbItem = styled.li`
  display: grid;
  grid-template-columns: 4fr 1fr;
  padding: 20px 0;
  padding: 1.250rem 0;
  font-size: 0.938em;
  font-size: 0.938rem;
  a {
    padding-left: 15px;
    padding-left: 0.9375em;
  }
  ${customMedia.greaterThan("desktop")`
    padding: 0;
    display: block;
  `}
`

const ToggleBtn = styled.span`
  text-indent: -9999px;
  background: url(images/s_images/sub_menu_toggle_btn.png) center center no-repeat;
  ${customMedia.greaterThan("desktop")`
    display: none;
  `}
`

const MenuToggleBtn = styled.span`
  position: absolute;
  top: 10px;
  top: 0.625rem;
  right: 10px;
  right: 0.625rem;
  width: 30px;
  width: 1.875rem;
  height: 30px;
  height: 1.875rem;
  text-indent: -9999px;
  background: url(images/s_images/menu_toggle_btn.png) no-repeat;
  cursor: pointer;
  ${customMedia.greaterThan("tablet")`
    top: 15px;
    right: 30px;
  `}
  ${customMedia.greaterThan("desktop")`
    display: none;
  `}
`

const Header = () => {
  const [seeMenu, setSeeMenu] = useState(false)
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)"
  })
  useEffect(() => {
    const seeMenuFn = () => {
      if (isDesktop) {
        setSeeMenu(true)
      }
    }
    seeMenuFn()
    return seeMenuFn()
  })
  const onClickToggleBtn = () => {
    setSeeMenu(prev => !prev)
  }
  return (<Container>
    <InfoSection>
      <InfoList>
        <InfoItem><Link to="/"><img src="/images/s_images/info_icon_01.png" alt="" /></Link></InfoItem>
        <InfoItem><Link to=""><img src="/images/s_images/info_icon_02.png" alt="" /></Link></InfoItem>
        <InfoItem><Link to=""><img src="/images/s_images/info_icon_03.png" alt="" /></Link></InfoItem>
        <InfoItem><Link to=""><img src="/images/s_images/info_icon_04.png" alt="" /></Link></InfoItem>
      </InfoList>
    </InfoSection>
    <SHeader>
      <Title><Link to="/">flat<br />design</Link></Title>
      {seeMenu &&
        <HeaderNav>
          <GnbList>
            <GnbItem>
              <Link to="/">홈</Link>
              <ToggleBtn>하위 메뉴 토글 버튼</ToggleBtn>
            </GnbItem>
            <GnbItem>
              <Link to="/introduce">플랫 디자인이란?</Link>
              <ToggleBtn>하위 메뉴 토글 버튼</ToggleBtn>
            </GnbItem>
            <GnbItem>
              <Link to="/gallery">갤러리</Link>
              <ToggleBtn>하위 메뉴 토글 버튼</ToggleBtn>
            </GnbItem>
            <GnbItem>
              <Link to="/board">문의사항</Link>
              <ToggleBtn>하위 메뉴 토글 버튼</ToggleBtn>
            </GnbItem>
          </GnbList>
        </HeaderNav>}
      <MenuToggleBtn onClick={onClickToggleBtn}>전체 메뉴 토글 버튼</MenuToggleBtn>
    </SHeader>
  </Container>);
}

export default Header;