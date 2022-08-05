import styled from 'styled-components';
import shadowGradient from 'assets/images/shadow-gradient.svg';
import shadow from 'assets/images/shadow.svg';

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
  max-height: 350px;
  max-width: 297px;
  height: 100%;
`;

const StyledAvatarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-height: 297px;
  width: 100%;
  height: 100%;
`;

const AvatarImg = styled.img`
  z-index: 1;
  max-height: 297px;
  height: 100%;
`;

const ShadowGradientImg = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  height: 30px;
  width: 211px;
  background-color: #28216b;
  border-radius: 50%;
`;

const ShadowImg = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15px;
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
        <ShadowGradientImg
          data-testid="shadow"
          src={shadowGradient}
          alt="Avatar Shadow"
        />
        <ShadowImg data-testid="shadow" src={shadow} alt="Avatar Shadow" />
      </StyledAvatarContainer>
      <NameContainer data-testid="name">{name}</NameContainer>
    </Container>
  );
};
