import React, {Component} from 'react';
import styled from "styled-components";

export default class Application extends Component {

    render() {

        return (
            <HeaderSection>
                hello world
            </HeaderSection>
        );
    }
}
const HeaderSection = styled.div`
        background: white;
        height:100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
`;
