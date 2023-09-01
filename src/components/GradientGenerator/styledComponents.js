// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  background-color: gray;
  background-image: linear-gradient(${props => props.colors});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  margin-top: 0px;
`

export const InputContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style-type: none;
  padding-left: 0px;
`

export const Input = styled.input`
  background-color: transparent;
  height: 25px;
  width: 50px;
  outline: none;
  border: none;
  height: 50px;
  width: 100px;
`

export const UnOrderListButtons = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  margin: 10px;
`

export const ColorAndCodeContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  font-family: 'Roboto'
  font-size: 20px;
  color: #1e293b;
  border: none;
  outline: none;
  font-weight: bold;
  border-radius: 10px;
  margin-top: 20px;
  padding: 15px;
`
