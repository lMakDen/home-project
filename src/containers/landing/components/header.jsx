import React, {Component} from 'react';

import styled from "styled-components";
import FaCheckCircle from 'react-icons/lib/fa/check-circle';


export default class Header extends Component{
    render(){
        return (
            <HeaderSection>
                <HeaderTitle>
                    We design things with love and passion
                </HeaderTitle>
                <HeaderButton>LET`S START</HeaderButton>
                <HeaderFooterContainer>
                    <HeaderFooterFirst>
                        <FaCheckCircle/>
                        <div>Fixed price projects</div>
                    </HeaderFooterFirst>
                    <HeaderFooterSecond>
                        <FaCheckCircle/>
                        <div>Fixed price projects</div>
                    </HeaderFooterSecond>
                    <HeaderFooterThird>
                        <FaCheckCircle/>
                        <div>Fixed price projects</div>
                    </HeaderFooterThird>
                </HeaderFooterContainer>
            </HeaderSection>
        )
    }
}
const HeaderSection = styled.div`
        background: #3f4049;
        height:100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
`;
const HeaderTitle = styled.div`
      color: white;
      font-family: 'Lato-Regular';
      font-size: 52px;
      width: 50%;
      text-align: center;
      margin-bottom: 100px;
`;
const HeaderButton = styled.a`
     padding: 10px 20px;
     background-color: #fc5f45;
     border-radius: 25px;
     cursor: pointer;
     color: white; 
     font-family: 'Lato-Italic';
     margin-bottom: 100px;
     &:hover{
        color: #3f4049;
     }
`;
const HeaderFooterContainer = styled.div`
      display:flex;
      width: 40%;
      justify-content: space-around;
`;

const HeaderFooterFirst = styled.div`
      text-align: center;
      color: #38c695;
      font-size: 18px;
      font-family: 'Lato-Italic';
`;

const HeaderFooterSecond = styled.div`
      text-align: center;
      color: #b27cf5;
      font-size: 18px;
      font-family: 'Lato-Italic';
`;
const HeaderFooterThird = styled.div`
      text-align: center;
      color: #feb960;
      font-size: 18px;
      font-family: 'Lato-Italic';
`;
