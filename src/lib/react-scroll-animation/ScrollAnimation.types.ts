export type StartingPoint = 'top' | 'right' | 'bottom' | 'left';

export type ScrollAnimationTypes = {
  startingPoint?: StartingPoint;
  duration?: number;
  amount?: number;
  delay?: number;
  repeat?: boolean;
};
