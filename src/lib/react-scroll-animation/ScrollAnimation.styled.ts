import styled, { keyframes } from 'styled-components';
import { ScrollAnimationStyledTypes } from './ScrollAnimation.types';

const frameInAnimation = (animation: Omit<ScrollAnimationStyledTypes, 'duration' | 'repeat'>) => keyframes`
  0% {
    opacity: 0;
    ${animation.$startingPoint === 'top' && `transform: translateY(-${animation.$amount}px);`}
    ${animation.$startingPoint === 'bottom' && `transform: translateY(${animation.$amount}px);`}
    ${animation.$startingPoint === 'right' && `transform: translateX(${animation.$amount}px);`}
    ${animation.$startingPoint === 'left' && `transform: translateX(-${animation.$amount}px);`}
  }

  100%{
    opacity: 1;
    transform: translate(0%, 0%);
  }
`;

export const Container = styled.div<ScrollAnimationStyledTypes & { $visible: boolean }>`
  ${(props) => !props.$visible && 'opacity:0;'}
  transition: ${(props) => props.$duration};
  &.frame-in {
    animation: ${(props) => frameInAnimation({ $startingPoint: props.$startingPoint, $amount: props.$amount })}
      ${(props) => props.$duration}s forwards ease-out;
  }
`;
