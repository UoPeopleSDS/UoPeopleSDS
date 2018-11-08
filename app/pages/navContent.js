import React, { Component } from 'react';


class Navcontent extends Component {
    render() {
        return (
            <nav class="navbar navbar-light navbar-expand-sm fixed-top">
            <div class="container">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span class="navbar-toggler-icon"></span>
              </button>
              <a class="navbar-brand mr-auto" href="#">
                <img class="logo" src="./img/logo.png" alt="UoPeopleSDS logo"></img>
                </a>
              <div class="collapse navbar-collapse" id="Navbar">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active"><a class="nav-link" href="#">HOME</a></li>
                  <li class="nav-item"><a class="nav-link" href="mission.html">MISSION</a></li>
                  <li class="nav-item"><a class="nav-link" href="projects.html">PROJECTS</a></li>
                  <li class="nav-item"><a class="nav-link" href="news.html">NEWS</a></li>
                  <li class="nav-item"><a class="nav-link" href="events.html">EVENTS</a></li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default Navcontent;
