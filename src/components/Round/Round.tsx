import { Title } from 'styles/styledElements';

interface RoundProps {
  round: number;
  testId?: string;
}

export const Round = ({ round, testId }: RoundProps) => {
  return (
    <div>
      <Title data-testid={testId}>Round: {round}</Title>
    </div>
  );
};
