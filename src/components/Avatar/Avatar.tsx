import styled from 'styled-components';

interface AvatarProps {
  name: string;
  avatar: string;
  testID?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const StyledAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const AvatarImg = styled.img`
  height: 100%;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100px;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
  color: ${({ theme: { colors } }) => colors.white};
  font-family: 'Lato';
  font-size: 27px;
  letter-spacing: -0.96px;
  line-height: 33px;
  text-align: center;
  margin-top: 23px;
  padding: 5px 15px;
  border-radius: 8px;
`;

export const Avatar = ({ name, avatar, testID }: AvatarProps) => {
  return (
    <Container>
      <StyledAvatarContainer>
        <AvatarImg data-testid={testID} src={avatar} alt="Fox Knight Avatar" />
      </StyledAvatarContainer>
      <NameContainer data-testid="name">{name}</NameContainer>
    </Container>
  );
};
