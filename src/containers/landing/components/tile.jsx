import React, {Component} from 'react';
import styled from "styled-components";

import hexToRgba from 'hex-rgba';

export default class Tile extends Component{
    render(){
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            // fade: true,
            focusOnSelect:true,
            // centerMode: true
        };
        const { color, url } = this.props;
        return (
            <SliderBlockContsiner>
                <FocusBlock color={color}>
                    <ImgBlock src={url} alt="error"/>
                    <ImgShadow color={color} />
                    <ImgData>
                        <ImgName color={color} >Michael Schmitt</ImgName>
                        <ImgDescription>chael Schm</ImgDescription>
                    </ImgData>
                </FocusBlock>
            </SliderBlockContsiner>
        )
    }
}

const FocusBlock = styled.div`
        height: 400px;
        width: 50%;
        background-color: white;
        display: flex;
        flex-direction: column;
        border: 1px solid white;
        border-bottom-color: ${props => props.color ? props.color : 'black'};
        margin: auto;
        position: relative;
`;
const ImgName = styled.div`
        color: ${props => props.color ? props.color : 'black'};
        font-family: 'Lato-Regular';
`;
const ImgBlock = styled.img`
        height: 80%;
        width: auto;
`;
const ImgShadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => props.color ? hexToRgba(props.color, 30) : 'rgba(0, 0, 0, 0.5)'};
    width: 100%;
    height: 80%;
`;
const ImgData = styled.div`
        text-align: center;
        margin: auto;
`;
const ImgDescription = styled.div`
        font-family: 'Lato-Italic';
`;
const SliderBlockContsiner = styled.div`
        outline: none;
`;