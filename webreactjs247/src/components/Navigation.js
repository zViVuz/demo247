import React, { Component } from "react";
export default class Navigation extends Component {
  render() {
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </div>
        
    );
  }
}
