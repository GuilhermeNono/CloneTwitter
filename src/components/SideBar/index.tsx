import React from 'react';

import StickyBox from 'react-sticky-box';

import List from '../List';
import News from '../News';
import FollowSuggestion from '../FollowSuggestion';

import {
  Container,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Gilson Barreto" nickname="@gilsonbar" />,
              <FollowSuggestion
                name="Gabriel Morais"
                nickname="@gamorandela"
              />,
              <FollowSuggestion name="Juan Primo" nickname="@jprimo" />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />, <News />, <News />, <News />, <News />, <News />,]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
