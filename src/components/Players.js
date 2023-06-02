import React, { Component } from "react";
import { Players } from "../shared/ListOfPlayers";
export default class Player extends Component {
  render() {
    return (
      <div className="container">
        {Players.map((player) => (
          <div className="column">
            <div className="card">
              <img alt="" src={player.img} />
              <h3>{player.name}</h3>
              <p className="title">{player.club}</p>
              <p>
              <button onClick={()=>{setPlayer(player)}}><a href='#popup1' id='openPopUp'>Detail</a></button>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
