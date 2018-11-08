import React, { Component } from 'react';
import Navcontent from './navContent';
import MainContent from './MainContent';
import FooterContent from './FooterContent';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Navcontent />
                <MainContent />
                <FooterContent />
            </div>
        );
    }
}

export default HomePage;