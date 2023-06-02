import { useState } from "react";
export default function PlayersPresentation({ players }) {
  //console.log(players);
  const [player, setPlayer] = useState([]);

  return (
    <div className="container">
      {players.map((players) => (
        <div className="column">
          <div className="card">
            <img alt="" src={players.img} />
            <h3>{players.name}</h3>
            <p className="title">{players.club}</p>
            <button
              onClick={() => {
                setPlayer(players);
              }}
            >
              <a style={{color: 'white'}} href="#popup1" id="openPopUp">
                Detail
              </a>
            </button>
          </div>
        </div>
      ))}
      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={player.img} alt=""></img>
          <h2>{player.name}</h2>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">{player.info}</div>
        </div>
      </div>
    </div>
  );
}
