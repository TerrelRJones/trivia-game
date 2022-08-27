import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAppSelector } from 'store/hooks';
import { gameGameStatusSelector } from 'store/game/game.selectors';
import { GameStatus } from 'models';

const Container = styled.div`
  &.display {
    display: none;
  }
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Middle = styled(motion.div)`
  &.display {
    display: none;
  }
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: ${({ theme: { colors } }) => colors.background};
  z-index: 50;
`;

const TransitionTitle = styled(motion.h1)`
  position: absolute;
  font-family: Impact;
  font-size: 99px;
  letter-spacing: 0;
  line-height: 121px;
  text-align: center;
  letter-spacing: 50px;
  text-transform: uppercase;

  &.display {
    display: none;
  }
`;

const blackBox = {
  initial: {
    height: '100vh',
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      delay: 0.5,
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const title = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 1.5,
    },
  },
};

export const InitialTransition = () => {
  const gameStatus = useAppSelector(gameGameStatusSelector);
  const [transitionTitle, setTransitionTitle] = useState<boolean>(false);
  return (
    <Container className={transitionTitle ? 'display' : undefined}>
      <Middle
        className={transitionTitle ? 'display' : undefined}
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationComplete={() => setTransitionTitle(true)}
      >
        <TransitionTitle
          className={transitionTitle ? 'display' : undefined}
          initial="initial"
          animate="animate"
          variants={title}
        >
          {gameStatus === GameStatus.PLAYING && 'FIGHT!'}
          {gameStatus === GameStatus.VICTORY && 'VICTORY'}
          {gameStatus === GameStatus.DEFEAT && 'DEFEATED'}
        </TransitionTitle>
      </Middle>
    </Container>
  );
};
