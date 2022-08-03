import styled from 'styled-components';

interface AvatarProps {
  name: string;
  avatar: string;
  testID?: string;
}

const StyledAvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const AvatarImg = styled.img`
  width: 297px;
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
    <StyledAvatarContainer>
      <AvatarImg data-testid={testID} src={avatar} alt="Fox Knight Avatar" />
      <NameContainer data-testid="name">{name}</NameContainer>
    </StyledAvatarContainer>
  );
};
