export type StartingPoint = 'top' | 'right' | 'bottom' | 'left';
export type ScrollAnimationTypes = {
    startingPoint?: StartingPoint;
    duration?: number;
    amount?: number;
    repeat?: boolean;
};
