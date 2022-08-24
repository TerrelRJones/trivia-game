import BarbarianBunny from 'components/BarbarianBunny';
import DragonSeth from 'components/DragonSeth';
import WizardPig from 'components/WizardPig';

interface GameAvatarProps {
  testID?: string;
  animation?: boolean;
  damage?: boolean;
  avatar: string;
}

export const GameAvatar = ({
  testID,
  avatar,
  animation,
  damage,
}: GameAvatarProps) => {
  if (avatar === 'wizard')
    return <WizardPig testID={testID} animation={animation} damage={damage} />;
  if (avatar === 'bunny')
    return <BarbarianBunny testID={testID} animation={animation} />;
  return <DragonSeth testID={testID} animation={animation} />;
};
