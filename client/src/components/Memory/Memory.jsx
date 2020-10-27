import React from "react";
import styled from "styled-components";
import MemoryGame from "react-memory-game";
import Emoji from '../Emoji/Emoji'
import "react-memory-game/dist/default-theme.css";

const Wrap = styled.div`
  font-size: 120px;
`;

const GameContainer = styled.div`
  display: flex;
  background: #000000;
  width: 100vw;
  height: 100vh;
`;

const PanelContainer = styled.div`
  width: 200px;
  order: -1;
  color: #FFFFFF;
  margin-top: 2.4306vw;
  margin-left: 2.4306vw;
`;

const BoardContainer = styled.div`
  flex: 1;
  margin-top: 2.4306vw;
`;

function Memory() {
    return (
      <div className="memory">
  <MemoryGame
    cards={[
      <Wrap>
        <Emoji symbol="🚀"/>
      </Wrap>,
      <Wrap>
        <Emoji symbol="👩‍🚀"/>
      </Wrap>,
      <Wrap>
        <Emoji symbol="🪐"/>
      </Wrap>,
      <Wrap>
        <Emoji symbol="🌎"/>
      </Wrap>,
      <Wrap>
        <Emoji symbol="👾"/>
      </Wrap>,
      <Wrap>
        <Emoji symbol="🌟"/>
      </Wrap>,
      <Wrap>
        <Emoji symbol="☄️"/>
      </Wrap>,
      <Wrap>
        <Emoji symbol="🛸"/>
      </Wrap>
    ]}
  >
    <GameContainer>
      <BoardContainer>
        <MemoryGame.Board />
      </BoardContainer>
      <PanelContainer>
        <MemoryGame.Reset />
        <MemoryGame.MovesCounter />
        <MemoryGame.PairsFoundCounter />
      </PanelContainer>
    </GameContainer>
  </MemoryGame>
  </div>
);
}
export default Memory;