import './index.css'
import {
  ResultsContainer,
  RandomItemsContainer,
  RandomItemContainer,
  GameOwner,
  ResultImg,
  GameResult,
  PlayAgainBtn,
} from './styledComponents'
const ResultsSection = props => {
  const {myChoiceId, choicesList, playAgain, randomItemId} = props
  const myChoiceItem = choicesList.filter(
    eachItem => eachItem.id === myChoiceId,
  )
  const randomItem = choicesList.filter(
    eachItem => eachItem.id === randomItemId,
  )
  let gameResult = ''
  if (myChoiceId === 'ROCK') {
    if (randomItemId === 'ROCK') {
      gameResult = 'IT IS DRAW'
    } else if (randomItemId === 'SCISSORS') {
      gameResult = 'YOU WON'
    } else if (randomItemId === 'PAPER') {
      gameResult = 'YOU LOSE'
    }
  } else if (myChoiceId === 'PAPER') {
    if (randomItemId === 'PAPER') {
      gameResult = 'IT IS DRAW'
    } else if (randomItemId === 'SCISSORS') {
      gameResult = 'YOU LOSE'
    } else if (randomItemId === 'ROCK') {
      gameResult = 'YOU WON'
    }
  } else if (myChoiceId === 'SCISSORS') {
    if (randomItemId === 'SCISSORS') {
      gameResult = 'IT IS DRAW'
    } else if (randomItemId === 'PAPER') {
      gameResult = 'YOU WON'
    } else if (randomItemId === 'ROCK') {
      gameResult = 'YOU LOSE'
    }
  }

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <ResultsContainer>
      <RandomItemsContainer>
        <RandomItemContainer>
          <GameOwner>YOU</GameOwner>
          <ResultImg
            src={myChoiceItem[0].imageUrl}
            className="img"
            alt="your choice"
          />
        </RandomItemContainer>
        <RandomItemContainer>
          <GameOwner>OPPONENT</GameOwner>
          <ResultImg
            src={randomItem[0].imageUrl}
            className="img"
            alt="opponent choice"
          />
        </RandomItemContainer>
      </RandomItemsContainer>

      <GameResult>{gameResult} </GameResult>
      <PlayAgainBtn onClick={onClickPlayAgain}>PLAY AGAIN</PlayAgainBtn>
    </ResultsContainer>
  )
}

export default ResultsSection
