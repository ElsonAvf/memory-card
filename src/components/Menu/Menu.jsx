import { MenuContainer, RestartMenu, Button } from './Menu.style.js'

export default function Menu({ message, setDisplay }) {
  return (
    <MenuContainer>
      <RestartMenu>
        <h2>{ message }</h2>
        <Button onClick={() => setDisplay(false)}>Restart</Button>
      </RestartMenu>
    </MenuContainer>
  )
}