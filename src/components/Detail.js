import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
// import {Players} from "../components/shared/ListOfPlayers"
import { Players } from '../shared/ListOfPlayers';
import ModalCase from '../ModalCase';
import { Card, CardTitle, Col, Container, Icon, Row } from 'react-materialize';

const Detail = () => {
    const userName = useParams();
    const [isOpen, setIsOpen] = useState(false);
  const player = Players.find(obj => {
    return obj.id == userName.id;
  });
   let cost = player.cost.toLocaleString();

  return (
    <Container>
      <Row>
        <Col>
        <Card closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={`../${player.img}`}>{player.name}</CardTitle>}
        >
          <a onClick={()=> setIsOpen(true)} className='btn-floating halfway-fab waves-effect waves-light red'>
            <Icon>ondemand_video</Icon>
          </a>
          {player.club}<br/>
          Market value: €{cost}<br/>
          {player.info}<br/>

        </Card>
        {isOpen && 
        <ModalCase setIsOpen={setIsOpen} player={player}></ModalCase>}
        </Col>  
      </Row>
    </Container>
  )
}

export default Detail