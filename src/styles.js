import { createGlobalStyle } from "styled-components";
import { generateMedia } from "styled-media-query";
import reset from "styled-reset";

export const customMedia = generateMedia({
  mobile: "320px",
  tablet: "768px",
  desktop: "1024px"
})

export const color = {
  green: "#2ecc71",
  gray: "#2c3e50"
}

export const GlobalStyle = createGlobalStyle`
  ${reset};

  #root {
    height: 100vh;
  }

body{
font-family:NanumGothic,나눔고딕,'Nanum Gothic','맑은 고딕',HelveticaNeue,DroidSans,Sans-serif,Helvetica;
background:url(../images/s_images/body_bg.png);
line-height:1;
}

article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{ 
display:block;
}

nav ul, li{
list-style:none;
}

a{
margin:0;
padding:0;
font-size:100%;
text-decoration:none;
vertical-align:baseline;
color:#fff;
background:transparent;
}

img{
vertical-align:top;
}

table{
border-collapse:collapse;
border-spacing:0;
}

input{
margin:0;
padding:0;
box-sizing:content-box;
vertical-align:top;
appearance:none;
border:1px solid #e65d5d;
color:#e65d5d;
border-radius:0; 
font-family:NanumGothic,나눔고딕,'Nanum Gothic','맑은 고딕',HelveticaNeue,DroidSans,Sans-serif,Helvetica;
}

input::-moz-input-placeholder{
color:#e65d5d;
}

input::-webkit-input-placeholder {
color:#e65d5d;
}
`