import React, {Component} from 'react';
import styled, { keyframes } from "styled-components";

import Hamburger from 'react-hamburgers';
import Fade from 'react-reveal/Fade';

export default class MobileMenu extends Component{
    state = {
        show: false
    };

    render(){
        return (
            <div>
                <MenuSection>
                    <Hamburger
                        active={this.state.show}
                        type="stand"
                        style={{color:'red'}}
                        onClick={() => this.setState({ show: !this.state.show })}
                    />
                </MenuSection>
                <Fade top  right big cascade when={this.state.show}>
                    <MobileMenuContainer>
                        <MenuLink  href="#sectionOne">Main</MenuLink>
                        <MenuLink href="#sectionTwo">Game</MenuLink>
                        <MenuLink href="#sectionThree">Rules</MenuLink>
                    </MobileMenuContainer>
                </Fade>
            </div>
        )
    }
    handleClick() {
        this.setState({ show: !this.state.show });
    }
}

const MenuSection = styled.div`
      display: flex;
      justify-content: flex-end;
      width:100%;
      position: absolute;
      background: inherit;
      z-index: 2;
      & .hamburger-inner{
        background-color: #38c695
      }
      & *::before{
        background-color: #38c695
      }
      & *::after{
        background-color: #38c695
      }
`;
const MobileMenuContainer = styled.div`
      color: white;
      position: absolute;
      z-index: 1;
      height: 100vh;
      background-color: rgba(127, 255, 212, 0.9);
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
`;
const clockwise = keyframes`
  0% {
    top: -5px;
    left: 0;
  }
  12% {
    top: -2px;
    left: 2px;
  }
  25% {
    top: 0;
    left: 5px;    
  }
  37% {
    top: 2px;
    left: 2px;
  }
  50% {
    top: 5px;
    left: 0;    
  }
  62% {
    top: 2px;
    left: -2px;
  }
  75% {
    top: 0;
    left: -5px;
  }
  87% {
    top: -2px;
    left: -2px;
  }
  100% {
    top: -5px;
    left: 0;    
  }
`
const counterclockwise = keyframes`
  0% {
    top: -5px;
    right: 0;
  }
  12% {
    top: -2px;
    right: 2px;
  }
  25% {
    top: 0;
    right: 5px;    
  }
  37% {
    top: 2px;
    right: 2px;
  }
  50% {
    top: 5px;
    right: 0;    
  }
  62% {
    top: 2px;
    right: -2px;
  }
  75% {
    top: 0;
    right: -5px;
  }
  87% {
    top: -2px;
    right: -2px;
  }
  100% {
    top: -5px;
    right: 0;    
  }
`
const MenuLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px auto;
  width: 250px;
  height: 100px;
  background: white;
  border-radius: 75px;
  font-size: 20px;
  font-weight: lighter;
  letter-spacing: 2px;
  transition: 1s box-shadow;
  text-decoration: none;
  background-color: rgba(127,255,212,1);
  cursor: pointer;
  font-family: 'Lato-Italic';
  &:hover{
        box-shadow: 0 5px 35px 0px rgba(0,0,0,.1);
       }
       &:hover:before {
  display: block;
  content: '';
  position: absolute;
  width: 250px;
  height: 100px;
  background: #feb960;
  border-radius: 75px;
  z-index: -1;
  animation: 1s ${clockwise} infinite;
}
&:hover:after {
  content: '';
  background: #b27cf5;
  animation: 2s ${counterclockwise} infinite;
  display: block;
  position: absolute;
  width: 250px;
  height: 100px;
  border-radius: 75px;
  z-index: -1;
}
`;
