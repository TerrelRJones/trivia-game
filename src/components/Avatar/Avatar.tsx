import styled from 'styled-components';
import shadowGradient from 'assets/images/shadow-gradient.svg';
import shadow from 'assets/images/shadow.svg';
// import dragonSeth from 'assets/images/dragon-seth.svg';
// import barbarianBunny from 'assets/images/barbarian-bunny.svg';

interface AvatarProps {
  name: string;
  avatar: React.ReactNode;
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

const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-height: 297px;
  width: 100%;
  height: 100%;
`;

const AvatarImg = styled.div`
  z-index: 1;
  max-height: 297px;
  height: 100%;
`;

const ShadowGradientImg = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: bottom;
  bottom: 0;
`;

const ShadowImg = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -15px;
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
  margin-top: 38px;
  padding: 5px 15px;
  border-radius: 8px;
`;

export const Avatar = ({ name, avatar, testID }: AvatarProps) => {
  return (
    <Container>
      <AvatarContainer>
        <AvatarImg data-testid={testID}>{avatar}</AvatarImg>
        <ShadowGradientImg
          data-testid="shadow"
          src={shadowGradient}
          alt="Avatar Shadow"
        />
        <ShadowImg src={shadow} alt="Shadow Ground Image" />
      </AvatarContainer>
      <NameContainer data-testid="name">{name}</NameContainer>
    </Container>
  );
};
