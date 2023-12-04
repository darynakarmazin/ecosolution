import React, { useState, useEffect } from 'react';
import MenuIcon from '../../img/menu.svg';
import {
  MenuButton,
  Backdrop,
  ButtonClose,
  ButtonWrp,
  Modal,
  ModalContent,
  ModalItem,
  ModalList,
  Social,
} from './BurgerMenu.styled';
import { ReactComponent as Facebook } from '../../img/facebook.svg';
import { ReactComponent as Instagram } from '../../img/instagram.svg';
import { ReactComponent as CloseIcon } from '../../img/close-light.svg';
import { ReactComponent as ArrowRight } from '../../img/cases/arrow-top-right.svg';

function BurgerMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleOverlyClick = e => {
    if (e.currentTarget === e.target) {
      handleModalClose();
    }
  };

  useEffect(() => {
    const handleOnClose = e => {
      if (e.code === 'Escape') {
        handleModalClose();
      }
    };

    window.addEventListener('keydown', handleOnClose);

    return () => {
      window.removeEventListener('keydown', handleOnClose);
    };
  }, []);

  useEffect(() => {
    const sectionIds = ['main', 'about', 'cases', 'faq', 'contactUs'];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section.offsetTop - 50 <= scrollY) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <MenuButton onClick={handleModalOpen}>
        <img
          src={MenuIcon}
          alt="button for opening menu"
          aria-label="button for opening menu"
        />
      </MenuButton>

      {isModalOpen && (
        <Backdrop onClick={handleOverlyClick}>
          <Modal className="container" onClick={handleOverlyClick}>
            <ModalContent>
              <ButtonWrp>
                <ButtonClose
                  onClick={handleModalClose}
                  aria-label="button for closing menu"
                >
                  <CloseIcon /> close
                </ButtonClose>
              </ButtonWrp>
              <div>
                <ModalList>
                  <ModalItem>
                    <a
                      href="#main"
                      className={activeSection === 'main' ? 'active' : ''}
                    >
                      <div>
                        Main <ArrowRight />
                      </div>
                    </a>
                  </ModalItem>
                  <ModalItem>
                    <a
                      href="#about"
                      className={activeSection === 'about' ? 'active' : ''}
                    >
                      <div>
                        About <ArrowRight />
                      </div>
                    </a>
                  </ModalItem>
                  <ModalItem>
                    <a
                      href="#cases"
                      className={activeSection === 'cases' ? 'active' : ''}
                    >
                      <div>
                        Cases <ArrowRight />
                      </div>
                    </a>
                  </ModalItem>
                  <ModalItem>
                    <a
                      href="#faq"
                      className={activeSection === 'faq' ? 'active' : ''}
                    >
                      <div>
                        FAQ <ArrowRight />
                      </div>
                    </a>
                  </ModalItem>
                  <ModalItem>
                    <a
                      href="#contactUs"
                      className={activeSection === 'contactUs' ? 'active' : ''}
                    >
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
