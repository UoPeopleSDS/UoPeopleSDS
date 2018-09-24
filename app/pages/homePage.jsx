import React from 'react';
import PropTypes from 'prop-types';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <div className="container">
                    <div className="text-center mt-5">
                        <img src='content/resources/UoPeopleSDS.png' />
                        <p className="mt-2 text-bold">
                            UoPeople Student Developer Society
                        </p>
                        <p className="mt-1">
                            What do you want to develop?
                        </p>
                    </div>
                </div>
            </main>
        );
    }
}