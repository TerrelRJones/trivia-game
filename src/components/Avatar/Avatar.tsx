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

  div {
    z-index: 2;
  }
`;

// const AvatarImg = styled.img<Pick<AvatarProps, 'avatar'>>`
//   z-index: 1;
//   max-height: 297px;
//   height: 100%;
//   ${({ avatar }) =>
//     avatar === dragonSeth &&
//     'animation: floating 3s ease-in-out infinite; @keyframes floating {0% {transform: translateY(-60px) translateX(15px); transform:}50% {transform: translateY(0px) translateX(-15px);} 100%{transform: translateY(-60px) translateX(15px)}}'}
//   ${({ avatar }) =>
//     avatar === barbarianBunny &&
//     ' transform-origin: bottom; animation: bounce 1s ease infinite; @keyframes bounce { 0% {transform: translateX(40px);}25% {transform: translateX(20px) translateY(-20px);}50% {transform: translateX(0px);}75% {transform: translateX(20px) translateY(-20px);}100% {transform: translateX(40px);}'}
// `;

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
        <div>{avatar}</div>
        {/* <AvatarImg
          avatar={avatar}
          data-testid={testID}
          src={avatar}
          alt="Fox Knight Avatar"
        /> */}
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
