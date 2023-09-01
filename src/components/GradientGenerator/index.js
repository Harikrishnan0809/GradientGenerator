import {Component} from 'react'
import {
  BgContainer,
  Heading,
  Input,
  InputContainer,
  UnOrderListButtons,
  Paragraph,
  ColorAndCodeContainer,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    left: '#8ae323',
    right: ' #014f7b',
    generateColor: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
    activeButton: gradientDirectionsList[0].directionId,
    direction: gradientDirectionsList[0].value,
  }

  onGenerateBackgroundColor = () => {
    const {left, right, direction} = this.state

    this.setState({
      generateColor: `to ${direction}, ${left}, ${right}`,
    })
  }

  changeButton = (id, value) => {
    this.setState({activeButton: id, direction: value})
  }

  onChangeLeftColor = event => {
    this.setState({left: event.target.value})
  }

  onChangeRightColor = event => {
    this.setState({right: event.target.value})
  }

  render() {
    const {left, right, generateColor, activeButton} = this.state

    return (
      <BgContainer data-testid="gradientGenerator" colors={generateColor}>
        <Heading>Generate a CSS color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <UnOrderListButtons>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              details={eachItem}
              isActive={eachItem.directionId === activeButton}
              changeButton={this.changeButton}
            />
          ))}
        </UnOrderListButtons>
        <Paragraph>Pick the Colors</Paragraph>

        <InputContainer>
          <ColorAndCodeContainer>
            <Paragraph>{left}</Paragraph>
            <Input
              onChange={this.onChangeLeftColor}
              value={left}
              type="color"
            />
          </ColorAndCodeContainer>
          <ColorAndCodeContainer>
            <Paragraph>{right}</Paragraph>
            <Input
              onChange={this.onChangeRightColor}
              value={right}
              type="color"
            />
          </ColorAndCodeContainer>
        </InputContainer>
        <GenerateButton onClick={this.onGenerateBackgroundColor}>
          Generate
        </GenerateButton>
      </BgContainer>
    )
  }
}

export default GradientGenerator
