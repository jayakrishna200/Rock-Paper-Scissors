import './index.css'
import {MyChoiceItem, ChoiceButton, ChoiceImage} from './styledComponents'

const ChoiceItem = props => {
  const {choiceItem, getMyChoiceId} = props
  const {id, imageUrl} = choiceItem
  const onClickmyChoice = () => {
    getMyChoiceId(id)
  }
  let testIdValue = ''
  console.log(id)
  if (id === 'ROCK') {
    testIdValue = 'rockButton'
  } else if (id === 'SCISSORS') {
    testIdValue = 'scissorsButton'
  } else if (id === 'PAPER') {
    testIdValue = 'paperButton'
  }
  return (
    <MyChoiceItem>
      <ChoiceButton onClick={onClickmyChoice} data-testid={testIdValue}>
        <ChoiceImage src={imageUrl} alt={id} />
      </ChoiceButton>
    </MyChoiceItem>
  )
}

export default ChoiceItem
