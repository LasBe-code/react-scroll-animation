import { Container } from './ScrollAnimation.styled';
import { ScrollAnimationTypes } from './ScrollAnimation.types';
import { useScrollAnimation } from './useScrollAnimation';
/**
 * 1. 애니메이션 시작지점
 * 2. 애니메이션 지속 시간
 * 3. 애니메이션 움직임 크기
 */
type PropsType = {
  children: React.ReactNode;
} & ScrollAnimationTypes &
  React.ComponentProps<'div'>;

/**
   * @example
   * type ScrollAnimationTypes {
        // default: 'top', 애니메이션 시작 지점입니다.
        startingPoint?: 'top' | 'right' | 'bottom' | 'left';

        // default: 0.5, 애니메이션 지속시간입니다. 단위는 '초'이며 0보다 작을 수 없습니다.
        duration?: number;

        // default: 100, 애니메이션 움직임의 양입니다. 단위는 px이며, 0보다 작을 수 없습니다.
        amount?: number;

        // default : 0, 스크롤 감지 후 애니메이션 실행 지연시간입니다. 0보다 작을 수 없습니다.
        delay?: number;

        // default: false, 범위를 벗어났을 때 애니메이션 재적용 여부입니다.
        repeat?: boolean;
    }
   */
export const ScrollAnimation = ({
  children,
  startingPoint = 'top',
  duration = 0.5,
  amount = 100,
  delay = 0,
  repeat = false,
  ...rest
}: PropsType) => {
  const { ref, isInViewport } = useScrollAnimation(repeat, delay);

  if (duration < 0) throw new Error('duration 값(애니메이션 지속 시간)은 0보다 작을 수 없습니다.');
  if (amount < 0) throw new Error('amount 값(애니메이션 움직임 양)은 0보다 작을 수 없습니다.');
  if (delay < 0) throw new Error('딜레이 시간은 0보다 작을 수 없습니다.');

  return (
    <Container
      {...rest}
      ref={ref}
      startingPoint={startingPoint}
      duration={duration}
      amount={amount}
      className={isInViewport ? `frame-in ${rest.className}` : rest.className}
    >
      {isInViewport && children}
    </Container>
  );
};
