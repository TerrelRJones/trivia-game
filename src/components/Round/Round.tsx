import styled from 'styled-components';

interface RoundProps {
  round: number;
  testId?: string;
}

const StyledRoundTitle = styled.h1`
  font-family: Impact;
  font-weight: 900;
  font-size: 50px;
  letter-spacing: 0;
  line-height: 61px;
  /* color: ${({ theme }) => theme.colors.white}; */
  color: white;
  text-transform: uppercase;
`;

export const Round = ({ round, testId }: RoundProps) => {
  return (
    <div>
      <StyledRoundTitle data-testid={testId}>Round {round}</StyledRoundTitle>
    </div>
  );
};
