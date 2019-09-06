import styled from 'styled-components';
import mainPig from './img/bg.jpg';
import headerPig from './img/headerPig.jpg';
export const Wrapper=styled.div`
  width:100%;
  height:1000px;
  margin:0 auto;
  overflow:hidden;
  background:url(${mainPig});
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    
     position:relative;
     
     
`

export const Content=styled.div`
       position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 1000px;
    line-height: 50px;
    text-align: center;
    
    background:rgba(255,255,255,0.3);
  
  
`
export const Page=styled.div`
  width:1032px;
  height:564px;
  background-color:transparent;
  margin:100px auto 0;
`
export const PageHeader=styled.div`
  width:1032px;
  height:306px;
  overflow:hidden;
  background:url(${headerPig});
  background-size: cover;

    background-position: center center;
    background-repeat: no-repeat;
    border-top-left-radius:15px;
    border-top-right-radius:15px;
    font-family: 'Montserrat', Helvetica, sans-serif;
    color:#fff;
    font-size:40px;
  
`
export const PageContent=styled.div`
    width:1032px;
    height:258px;
    background-color:#003366;
     border-bottom-left-radius:15px;
    border-bottom-right-radius:15px;
    box-sizing:border-box;
    padding-top:100px;

`
export const FormOpt=styled.form`
    height:60px;
    display:flex;
     justify-content:center;
    .city{
     
      height:40px;
      margin-right:15px;
      outline-style:none;
      border:0;
      border-radius:4px;
    };
    .city:focus,.country:focus{
    border-color: #fff;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
};
 
    .country{
      height:40px;
      margin-right:15px;
      outline-style:none;
      border:0;
      border-radius:4px;
    };
    .button{
      width:150px;
      height:40px;
      border-radius:4px;
      line-height:40px;
      background-color:#33ffff;
      outline-style:none;
      border:0;
      box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.2);
    }
    .button:hover {
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);
}
    
`
export const Loc=styled.p`
  color:#fff;
  font-size:30px;
   font-family: 'Montserrat', Helvetica, sans-serif;
  .span{
    padding-right:20px;
  }
  

`
export const Temp=styled.p`
  color:#fff;
  font-size:40px;
  
`
export const Icon=styled.p`
  
  margin:0 auto;
  width:50px;
  height:50px;
  .img{
  width:100%
  height:100%
  }
  
`