import { useState } from 'react';
import MenuIcon from '../../img/menu.svg';
import { MenuButton } from './BurgerMenu.styled';
import {
  Backdrop,
  ButtonClose,
  ButtonWrp,
  Modal,
  ModalContent,
  ModalItem,
  ModalList,
} from './BurgerMenu.styles';
import { Social } from '../Footer/Footer.styled';
import { ReactComponent as Facebook } from '../../img/facebook.svg';
import { ReactComponent as Instagram } from '../../img/instagram.svg';
import { ReactComponent as CloseIcon } from '../../img/close-light.svg';
import { ReactComponent as ArrowRight } from '../../img/cases/arrow-top-right.svg';

function BurgerMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <MenuButton onClick={handleModalOpen}>
        <img src={MenuIcon} alt="button for opening menu" />
      </MenuButton>

      {isModalOpen && (
        <Backdrop>
          <Modal className="container">
            <ModalContent>
              <ButtonWrp>
                <ButtonClose onClick={handleModalClose}>
                  <CloseIcon /> close
                </ButtonClose>
              </ButtonWrp>
              <div>
                <ModalList>
                  <ModalItem>
                    <a href="#main">
                      <div>
                        Main <ArrowRight />
                      </div>
                    </a>
                  </ModalItem>
                  <ModalItem>
                    <a href="#main">
                      <div>
                        About <ArrowRight />
                      </div>
                    </a>
                  </ModalItem>
                  <ModalItem>
                    <a href="#cases">
                      <div>
                        Cases <ArrowRight />
                      </div>
                    </a>
                  </ModalItem>
                  <ModalItem>
                    <a href="#faq">
                      <div>
                        FAQ <ArrowRight />
                      </div>
                    </a>
                  </ModalItem>
                  <ModalItem>
                    <a href="#contactUs">
                      <div>
                        Contact Us <ArrowRight />
                      </div>
                    </a>
                  </ModalItem>
                </ModalList>
                <Social>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/"
                  >
                    <Facebook />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/"
                  >
                    <Instagram />
                  </a>
                </Social>
              </div>
            </ModalContent>
          </Modal>
        </Backdrop>
      )}
    </>
  );
}

export default BurgerMenu;
