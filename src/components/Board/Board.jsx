import { useState, useEffect } from 'react'
import Card from './../Card/Card.jsx';
import { randomSet } from './../../game-logic/randomSet.js';
import { gameover } from './../../game-logic/gameover.js'
import { nextLevel } from './../../game-logic/nextLevel.js'
import { BoardMain, Header, Ul, Section } from './Board.style.js'

export default function Board({setResult, setDisplay}) {
  const [cards, setCards] = useState(() => randomSet(4))
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  
  useEffect(() => {
    if(currentScore > bestScore) {
      setBestScore(currentScore)
    }
    if(cards.length === 24 && nextLevel(cards)) {
      setResult('win')
      setDisplay(true)
      setCards(randomSet(4))
    }
  }, [currentScore])
  
  useEffect(() => {
    if(gameover(cards)) {
      setCards(randomSet(4))
      setCurrentScore(0)
      setResult('lose')
      setDisplay(true)
    } else if(nextLevel(cards)) {
      setCards(randomSet(cards.length + 2))
    }
  }, [cards])

  return (
    <BoardMain>
      <Header>Lego Memory</Header>
      <Section>
        <span>Current Score {currentScore}</span>
        <span>Best Score {bestScore}</span>
      </Section>
      <Ul>
        {cards.map((card, index) =>
          <Card
            key={card.id}
            index={index}
            card={card}
            setCard={setCards}
            setScore={setCurrentScore}
          />
        )}
      </Ul>
    </BoardMain>
  )
}