import React from 'react';



import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Guilherme Nono</h1>
        <h2>@GuilhermeNono</h2>

        <p>Student and Developer.</p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 03 de maio de 2002
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>942 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      {/* TODO: FEED -> 01:07:15*/}
      <Feed />
    </Container>
  );
};

export default ProfilePage;
