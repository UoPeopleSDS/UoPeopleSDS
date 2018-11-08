import React from 'react';

export default class HeaderComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-sm fixed-top">
            <div className="container">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand mr-auto" href="#">
                <img className="logo" src="../../content/resources/img/logo.png" alt="UoPeopleSDS logo"></img>
                </a>
              <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active"><a className="nav-link" href="#">HOME</a></li>
                  <li className="nav-item"><a className="nav-link" href="mission.html">MISSION</a></li>
                  <li className="nav-item"><a className="nav-link" href="projects.html">PROJECTS</a></li>
                  <li className="nav-item"><a className="nav-link" href="news.html">NEWS</a></li>
                  <li className="nav-item"><a className="nav-link" href="events.html">EVENTS</a></li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}
