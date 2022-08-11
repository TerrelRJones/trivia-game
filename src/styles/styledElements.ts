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
