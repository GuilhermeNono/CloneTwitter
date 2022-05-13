import React from 'react';

import ProfilePage from '../ProfilePage'

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, SearchIcon, HomeIcon, EmailIcon, BellIcon} from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon />
              </button>

              <ProfileInfo>
                    <strong>Gui Nono</strong>
                    <span>740 Tweets</span>
              </ProfileInfo>
          </Header>

          <ProfilePage />

          <BottomMenu>
              <HomeIcon />
              <SearchIcon />
              <BellIcon />
              <EmailIcon />
          </BottomMenu>
          
      </Container>
  );
}

export default Main;