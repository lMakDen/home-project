import React, {Component} from 'react';

import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';

import Menu from './components/menu';
import Head from './components/header';
import Slider from './components/slider';
import Focus from './components/focus';

export default class Landing extends Component {

    render() {
        const slides = [
            {
                city: 'Paris',
                country: 'France',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
            },
            {
                city: 'Singapore',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
            },
            {
                city: 'Prague',
                country: 'Czech Republic',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
            },
            {
                city: 'Amsterdam',
                country: 'Netherlands',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
            },
            {
                city: 'Moscow',
                country: 'Russia',
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
            },
        ];
        const options = {
            sectionClassName:     'section',
            anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
            scrollBar:            false,
            navigation:           false,
            verticalAlign:        false,
            // sectionPaddingTop:    '50px',
            // sectionPaddingBottom: '50px',
            arrowNavigation:      true
        };
        return (
            <div>
                <header>
                    <Menu/>
                </header>
                <SectionsContainer {...options}>
                    <Section >
                        <Head/>
                    </Section>
                    <Section >
                        <Slider slides={slides} />
                    </Section>
                    <Section >
                        <Focus/>
                    </Section>
                </SectionsContainer>
            </div>
        );
    }
}
