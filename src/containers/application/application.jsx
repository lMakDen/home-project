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
            <div>
                <HeaderSection>
                    <Header>
                        <div>#</div>
                        <div>Logo</div>
                        <div>Coin</div>
                        <div>Price (USD)</div>
                    </Header>
                    { removed.map((item, i) =>{
                        return <Row>
                            <div>{i + 1}</div>
                            <div>
                                <RowImg src={`https://www.cryptocompare.com${cryptoList.data[item].ImageUrl}`} alt="error"/>
                            </div>
                            <div>{cryptoList.data[item].CoinName}</div>
                            <div>{prices[item] && prices[item].USD}</div>
                        </Row>
                    })}
                </HeaderSection>
                <ShowMoreBtn onClick={this.handleChangeCounter}>Show more</ShowMoreBtn>
            </div>
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
        background-color: whitesmoke;
        margin: auto;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0px 0px 30px 5px silver;
        padding: 50px;
        margin-top: 50px;
`;
const Header = styled.div`
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        font-weight: bold;
        padding: 15px 0;
        div{
            width: 25%;
            text-align: center;
        }
`;
const Row = styled.div`
        padding: 15px 0;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        div{
            width: 25%;
            text-align: center;
        }
`;
const RowImg = styled.img`
        width: 50px;
        height: 50px;
`;
const ShowMoreBtn = styled.button`
        display: block;
        margin: 25px auto;
        padding: 10px 40px;
        background-color: whitesmoke;
        border: 1px solid grey;
        cursor: pointer;
`;
function mapStateToProps(state) {
    const { crypto } = state;
    return {
        cryptoList: crypto,
        prices: crypto.prices,
    };
}
export default connect(mapStateToProps)(Application);