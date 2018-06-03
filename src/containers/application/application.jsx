import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from "styled-components";
import * as actions from './actions/index';

const SHOW_ELEMENTS = 20;

class Application extends Component {
    state = {
      counter : SHOW_ELEMENTS,
      priceCounter: SHOW_ELEMENTS,
      prices: {}
    };

    componentDidMount(){
        this.props.dispatch(
            actions.requestCryptoList()
        );
    }

    componentWillReceiveProps(nextProps){
        const { prices } = this.props;
        if( prices !== nextProps.prices ){
            this.setState({
                prices : Object.assign(this.state.prices, nextProps.prices)
            });
        }
    }

    render() {
        const { cryptoList } = this.props;
        const { counter, prices } = this.state;
        let cryptoListObject = cryptoList ? Object.keys(cryptoList.data) : [];
        let removed = cryptoListObject.splice(0, counter);

        return (
            <HeaderSection>
                { removed.map((item, i) =>{

                    return <Row>
                        <div>{i + 1}</div>
                        <RowImg src={`https://www.cryptocompare.com${cryptoList.data[item].ImageUrl}`} alt="error"/>
                        <div>{cryptoList.data[item].CoinName}</div>
                        <div>{prices[item] && prices[item].USD}</div>
                    </Row>
                })}
                <button onClick={this.handleChangeCounter}>Add</button>
            </HeaderSection>
        );
    }

    handleChangeCounter = () =>{
        const { counter, priceCounter } = this.state;
        const { cryptoList } = this.props;
        this.setState({
            counter: counter + SHOW_ELEMENTS,
            priceCounter: priceCounter + SHOW_ELEMENTS,
        },() => {
            this.props.dispatch(
                actions.requestCryptoPrice( cryptoList.data, this.state.priceCounter )
            );
        });


    };
}
const HeaderSection = styled.div`
        background: white;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
`;
const Row = styled.div`
        display: flex;
        align-items: center;
`;
const RowImg = styled.img`
        width: 50px;
        height: 50px;
`;
function mapStateToProps(state) {
    const { crypto } = state;
    return {
        cryptoList: crypto,
        prices: crypto.prices,
    };
}
export default connect(mapStateToProps)(Application);