import React from 'react';


export default class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
}
    render() {
        return (
            <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="col-2 align-right">
                  <img className="footer-logo" src="content\resources\logo.png" alt=""></img>
                </div>
                <div className="col-8">
                  <span>Made with <i className="fas fa-heart"></i> and mantained by the <a href="https://github.com/orgs/UoPeopleSDS/people">core
                      team</a> with the help of <a href="https://github.com/UoPeopleSDS/UoPeopleSDS/graphs/contributors">our
                      contributors</a>.</span>
                  <span>Code licensed under <a href="https://github.com/UoPeopleSDS/UoPeopleSDS/blob/master/LICENSE">GNU GPLv3</a>.
                    Please <a href="https://github.com/UoPeopleSDS/UoPeopleSDS/blob/master/CONTRIBUTING.md">contribute</a>.</span>
                </div>
                <div className="col-2 align-right">
                  <a href="https://github.com/UoPeopleSDS"><i className="fab fa-github footer-gh"></i></a>
                </div>
              </div>
            </div>
          </footer>
        );
    }
}
