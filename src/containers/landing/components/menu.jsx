import React, {Component} from 'react';
import styled from "styled-components";

import logo from './../../../assets/images/logo.png'

export default class Menu extends Component{
    render(){
        return (
            <MenuSection>
                <Container>
                    <MenuBody>
                        <Logo src={logo} alt="error">
                        </Logo>
                        <Navigations>
                            <MenuLink href="#sectionOne">
                                Main
                            </MenuLink>
                            <MenuLink href="#sectionTwo">
                                Game
                            </MenuLink>
                            <MenuLink href="#sectionThree">
                                Rules
                            </MenuLink>
                        </Navigations>
                    </MenuBody>
                </Container>
            </MenuSection>
        )

    }
}

const MenuSection = styled.div`
      width:100%;
      position: absolute;
      background: white;
      z-index: 1;
`;

const Container = styled.div`
      width: 80%;
      margin: auto;
`;
const MenuBody = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
`;
const Logo = styled.img`
      width: 100px;
      height: 30px;
`;
const Navigations = styled.div`
      width: 80%;
      display: flex;
      justify-content: flex-end;
      font-family: 'Lato-Italic';
`;
const MenuLink = styled.a`
       text-decoration: none;
       color: black;
       margin: 5px 20px;
       &:hover{
        color: #fc5f45;
        border-bottom:2px solid #fc5f45;
        margin: 4px 20px;
       }
`;
