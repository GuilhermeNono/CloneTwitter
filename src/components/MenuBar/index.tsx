import React from 'react';

import Button from '../Button'

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon, 
  ProfileIcon,
  ExitIcon,
  Botside,
  Avatar,
  ProfileData
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>

      </Topside>

      <Botside>
          <Avatar />
          <ProfileData>
              <strong>Guilherme Nono</strong>
              <span>@guilhermenono</span>
          </ProfileData>

          <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
