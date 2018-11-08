import React, { Component } from 'react';


class FooterContent extends Component {
    render() {
        return (
            <footer class="footer">
            <div class="container">
              <div class="row">
                <div class="col-2 align-right">
                  <img class="footer-logo" src="img/logo.png" alt=""></img>
                </div>
                <div class="col-8">
                  <span>Made with <i class="fas fa-heart"></i> and mantained by the <a href="https://github.com/orgs/UoPeopleSDS/people">core
                      team</a> with the help of <a href="https://github.com/UoPeopleSDS/UoPeopleSDS/graphs/contributors">our
                      contributors</a>.</span>
                  <span>Code licensed under <a href="https://github.com/UoPeopleSDS/UoPeopleSDS/blob/master/LICENSE">GNU GPLv3</a>.
                    Please <a href="https://github.com/UoPeopleSDS/UoPeopleSDS/blob/master/CONTRIBUTING.md">contribute</a>.</span>
                </div>
                <div class="col-2 align-right">
                  <a href="https://github.com/UoPeopleSDS"><i class="fab fa-github footer-gh"></i></a>
                </div>
              </div>
            </div>
          </footer>
        );
    }
}

export default FooterContent;