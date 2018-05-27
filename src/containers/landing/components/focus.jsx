import React, {Component} from 'react';
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Tile from "./tile";
import logo1 from './../../../assets/images/1.jpg';
import logo2 from './../../../assets/images/2.jpg';
import logo3 from './../../../assets/images/3.jpg';
import logo4 from './../../../assets/images/4.jpg';

export default class Focus extends Component{
    render(){
        var settings = {
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
        return (
            <FocusSection>
                <FocusTitle>
                    Our focus.
                </FocusTitle>
                <FocusContent>
                    We understand your requirement and provide quality works.
                </FocusContent>
                <div style={{marginTop: '100px'}}>
                    <Slider {...settings}>
                        <Tile color="#fc5f45" url={logo1} />
                        <Tile color="#38c695" url={logo2} />
                        <Tile color="#b27cf5" url={logo3} />
                        <Tile color="#feb960" url={logo4} />
                    </Slider>
                </div>
            </FocusSection>
        )

    }
}

const FocusSection = styled.div`
        height:100vh;
        background:#f7f7f7;
`;
const FocusTitle = styled.div`
        font-family: 'Lato-Regular';
        font-size: 52px;
        width: 50%;
        text-align: center;
        margin: auto auto 50px auto;
        padding-top:100px
`;
const FocusContent = styled.div`
        text-align: center;
        font-family: 'Lato-Regular';
        font-size: 24px;
        color: grey;
`;
