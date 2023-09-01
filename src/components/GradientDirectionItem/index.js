// Write your code here
import {Buttons, ListItems} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, isActive, changeButton} = props
  const {displayText, directionId, value} = details
  const onChangeButton = () => {
    changeButton(directionId, value)
  }
  return (
    <ListItems>
      <Buttons onClick={onChangeButton} active={isActive}>
        {displayText}
      </Buttons>
    </ListItems>
  )
}

export default GradientDirectionItem
