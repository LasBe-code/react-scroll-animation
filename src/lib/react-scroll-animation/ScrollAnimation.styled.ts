import styled, { keyframes } from 'styled-components';
import { ScrollAnimationTypes } from './ScrollAnimation.types';

const frameInAnimation = (animation: Omit<ScrollAnimationTypes, 'duration' | 'repeat'>) => keyframes`
  0% {
    opacity: 0;
    ${animation.startingPoint === 'top' && `transform: translateY(-${animation.amount}px);`}
    ${animation.startingPoint === 'bottom' && `transform: translateY(${animation.amount}px);`}
    ${animation.startingPoint === 'right' && `transform: translateX(${animation.amount}px);`}
    ${animation.startingPoint === 'left' && `transform: translateX(-${animation.amount}px);`}
  }

  100%{
    opacity: 1;
    transform: translate(0%, 0%);
  }
`;

export const Container = styled.div<ScrollAnimationTypes>`
  &.frame-in {
    animation: ${(props) => frameInAnimation({ startingPoint: props.startingPoint, amount: props.amount })} ${(props) => props.duration}s
      forwards;
  }
`;
