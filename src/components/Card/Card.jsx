import { shuffle } from './../../game-logic/shuffle.js';
import { Img, Button } from './Card.style.js'

const alt = src => {
  let alternativeTxt = src.split('/')
  alternativeTxt = alternativeTxt[alternativeTxt.length - 1].split('.')
  alternativeTxt = alternativeTxt[0].split('-')
  alternativeTxt = alternativeTxt.map(txt => txt[0].toUpperCase() + txt.slice(1))
  return alternativeTxt.join(' ')
}

export default function Card({ index, card, setCard, setScore }) {

  const handleClick = () => {
    setCard(prevCardsOrder => {
      const updatedList = [...prevCardsOrder]
      updatedList[index] = {...updatedList[index], click: updatedList[index].click + 1}
      return shuffle(updatedList)
    })
    if((card.click + 1) < 2) {
      setScore(prevScore => prevScore + 1)
    }
  }

  return (
    <li>
      <Button type='button' onClick={handleClick}>
        <Img src={card.src}alt={alt(card.src)} />
      </Button>
    </li>
  )
}