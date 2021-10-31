import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { customMedia } from '../styles';

const Container = styled.div`
  display: grid;
  section {
    padding: 40px 12.5%;
    padding: 2.500rem 12.5%;
  }
  ${customMedia.greaterThan("tablet")`
    grid-column: 1 / -3;
    grid-row: 3 / 4;
    grid-template-columns: 1fr 1fr;
  `}
  ${customMedia.greaterThan("desktop")`
    grid-column: 1 / 7;
    grid-row: 3 / 4;
    grid-template-columns: 1fr 1fr;
  `}
`

const LatestPost = styled.section`
  background: #ffc40f;
  text-shadow: 0px 1px 1px #b98e0b;
`

const PopularPost = styled.section`
  background: #a660c2;
  text-shadow: 0px 1px 1px #714785;
`

const Title = styled.h2`
  margin-bottom: 30px;
  margin-bottom: 1.875rem;
  font-size: 1.188em;
  font-size: 1.188rem;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
`

const PostList = styled.ul`
  display: grid;
  row-gap: 15px;
  row-gap: 0.938rem;
`

const PostItem = styled.li`
  padding-left: 14px;
  padding-left: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  background: url(images/s_images/post_circle_icon.png) left center no-repeat;
`

const Post = () => {
  return (<Container>
    <LatestPost>
      <Title>최근 글</Title>
      <PostList>
        <PostItem><Link>안녕하세요 홈페이지가 오픈...</Link></PostItem>
        <PostItem><Link>홈페이지 리뉴얼...</Link></PostItem>
        <PostItem><Link>flat design은...</Link></PostItem>
        <PostItem><Link>blog에서 다양한 정보를...</Link></PostItem>
        <PostItem><Link>저는 누굴까요?...</Link></PostItem>
      </PostList>
    </LatestPost>
    <PopularPost>
      <Title>인기 글</Title>
      <PostList>
        <PostItem><Link>안녕하세요 홈페이지가 오픈...</Link></PostItem>
        <PostItem><Link>홈페이지 리뉴얼...</Link></PostItem>
        <PostItem><Link>flat design은...</Link></PostItem>
        <PostItem><Link>blog에서 다양한 정보를...</Link></PostItem>
        <PostItem><Link>저는 누굴까요?...</Link></PostItem>
      </PostList>
    </PopularPost>
  </Container>);
}

export default Post;