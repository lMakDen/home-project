import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from "styled-components";
// import * as actions from './actions';
import * as actions from './actions/index'

class Application extends Component {

    componentDidMount(){
        this.props.dispatch(
            actions.requestCryptoList()
        );
    }

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
function mapStateToProps(state) {
    debugger
    return {
        car: state.crypto
    };
}
export default connect(mapStateToProps)(Application);