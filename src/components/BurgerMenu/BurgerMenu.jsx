import MenuIcon from '../../img/menu.svg';
import { MenuButton } from './BurgerMenu.styled';

function BurgerMenu() {
  return (
    <MenuButton>
      <img src={MenuIcon} alt="button for opening menu" />
    </MenuButton>
  );
}

export default BurgerMenu;
