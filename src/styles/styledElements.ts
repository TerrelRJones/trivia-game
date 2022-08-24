import styled from 'styled-components';

export const StoriesBackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(circle, #000e5d 0%, #010024 100%);
`;

export const BodyText = styled.p`
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fontFamily } }) => fontFamily.body};
`;

export const Title = styled.h1`
  font-family: Impact;
  font-weight: 900;
  font-size: 50px;
  letter-spacing: 0;
  line-height: 61px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  margin: 0;
`;

export const ScreenReaderOnly = styled.div`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const CompletedPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.h1`
  font-family: Impact;
  font-size: 99px;
  letter-spacing: 0;
  line-height: 121px;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 400px) {
    font-size: 80px;
    line-height: 80px;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled(BodyText)`
  font-size: 30px;
  margin: 0;
`;
export const ButtonContainer = styled.div`
  margin-top: 40px;
`;

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 477px;
  max-height: 500px;
  margin-top: 104px;
`;

export const Avatar = styled.img`
  z-index: 2;
  margin-left: 25%;
  max-height: 500px;
  height: 100%;
`;
