import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from "styled-components";
import * as actions from './actions/index';
import map from 'lodash';

class Application extends Component {

    componentDidMount(){
        this.props.dispatch(
            actions.requestCryptoList()
        );
    }

    render() {
        const { cryptoList } = this.props;
        let cryptoListObject = cryptoList ? Object.keys(cryptoList.data) : [];
        let removed = cryptoListObject.splice(0, 5);

        return (
            <HeaderSection>
                { removed.map((item, i) =>{
                    return <div style={{display: 'flex', alignItems: 'center'}}>
                        <div>{cryptoList.data[item].CoinName}</div>
                        <img src={`https://www.cryptocompare.com${cryptoList.data[item].ImageUrl}`} alt="error"/>
                    </div>
                })}
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
    return {
        cryptoList: state.crypto
    };
}
export default connect(mapStateToProps)(Application);