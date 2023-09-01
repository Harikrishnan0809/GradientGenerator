// Style your elements here
import styled from 'styled-components'

export const Buttons = styled.button`
  height: 35px;
  width: 80px;
  margin: 5px;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  color: #334155;
  font-family: 'Roboto'
  font-weight: bold;
  background-color: ${props => (props.active ? '#ededed' : '#ffffff79')};
  opacity: ${props => (props.active ? 1 : 0.5)}
  `

export const ListItems = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
