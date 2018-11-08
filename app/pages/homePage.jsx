import React from 'react';
import HeaderComponent from '../components/header.jsx';
import BodyContent from '../components/body.jsx';
import FooterContent from '../components/footer.jsx';
export default class  HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="HomePage">
                <HeaderComponent />
                <BodyContent />
                <FooterContent />
            </div>
        );
    }
}