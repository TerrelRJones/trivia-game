import { Title } from 'styles/styledElements';

interface RoundProps {
  round: number;
  testID?: string;
}

export const Round = ({ round, testID }: RoundProps) => {
  return (
    <div>
      <Title data-testid={testID}>Round: {round}</Title>
    </div>
  );
};
