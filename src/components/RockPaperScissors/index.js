import {
  MainContainer,
  Header,
  ItemsContainer,
  ItemType,
  ScoreContainer,
  Score,
  TotalScore,
} from './styledComponents'
import {Component} from 'react'
import ChoiceItem from '../ChoiceItem'
import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import ResultsSection from '../ResultsSection'

class RockPaperScissors extends Component {
  state = {isPlaying: true, myChoiceId: '', randomItemId: '', score: 0}

  getMyChoiceId = myChoiceId => {
    console.log('myChoidceId', myChoiceId)
    const randomItemId =
      choicesList[Math.floor(Math.random() * choicesList.length)].id
    console.log(randomItemId)
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying,
      myChoiceId: myChoiceId,
      randomItemId: randomItemId,
    }))
    if (myChoiceId === 'ROCK') {
      if (randomItemId === 'ROCK') {
        this.setState(prevState => ({score: prevState.score + 0}))
      } else if (randomItemId === 'SCISSORS') {
        this.setState(prevState => ({score: prevState.score + 1}))
      } else if (randomItemId === 'PAPER') {
        this.setState(prevState => ({score: prevState.score - 1}))
      }
    } else if (myChoiceId === 'PAPER') {
      if (randomItemId === 'PAPER') {
        this.setState(prevState => ({score: prevState.score + 0}))
      } else if (randomItemId === 'SCISSORS') {
        this.setState(prevState => ({score: prevState.score - 1}))
      } else if (randomItemId === 'ROCK') {
        this.setState(prevState => ({score: prevState.score + 1}))
      }
    } else if (myChoiceId === 'SCISSORS') {
      if (randomItemId === 'SCISSORS') {
        this.setState(prevState => ({score: prevState.score + 0}))
      } else if (randomItemId === 'PAPER') {
        this.setState(prevState => ({score: prevState.score + 1}))
      } else if (randomItemId === 'ROCK') {
        this.setState(prevState => ({score: prevState.score - 1}))
      }
    }
  }
  playAgain = () => {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying,
      myChoiceId: '',
    }))
  }

  renderPlayingSection = () => {
    return (
      <div className="items-list-container">
        <ul className="items-list">
          {choicesList.map(eachItem => (
            <ChoiceItem
              choiceItem={eachItem}
              key={eachItem.id}
              getMyChoiceId={this.getMyChoiceId}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderResultView = () => {
    const {myChoiceId, randomItemId} = this.state
    return (
      <div className="items-list-container">
        <ResultsSection
          myChoiceId={myChoiceId}
          randomItemId={randomItemId}
          choicesList={choicesList}
          playAgain={this.playAgain}
          updateScore={this.updateScore}
        />
      </div>
    )
  }

  render() {
    const {isPlaying, score} = this.state
    return (
      <MainContainer>
        <Header>
          <ItemsContainer>
            <ItemType>Rock Paper Scissors</ItemType>
          </ItemsContainer>
          <ScoreContainer>
            <Score>Score</Score>
            <TotalScore>{score} </TotalScore>
          </ScoreContainer>
        </Header>
        {isPlaying && this.renderPlayingSection()}
        {!isPlaying && this.renderResultView()}

        <div className="rules-container">
          <div className="popup-container">
            <Popup
              modal
              trigger={
                <button type="button" className="trigger-button">
                  RULES
                </button>
              }
              className="trigger-container"
            >
              {close => (
                <div className="popup-content-container">
                  <div className="close-btn-container">
                    <button
                      type="button"
                      className="close-button"
                      onClick={() => close()}
                    >
                      <RiCloseLine size="20" />
                    </button>
                  </div>
                  <div className="image-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                      className="rules-img"
                    />
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
      </MainContainer>
    )
  }
}

export default RockPaperScissors
