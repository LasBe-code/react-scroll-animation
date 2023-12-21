var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from './ScrollAnimation.styled';
import { useScrollAnimation } from './useScrollAnimation';
/**
   * @example
   * type ScrollAnimationTypes {
        // default: 'top', 애니메이션 시작 지점입니다.
        startingPoint?: 'top' | 'right' | 'bottom' | 'left';

        // default: 1, 애니메이션 지속시간입니다. 단위는 '초'이며 0보다 작을 수 없습니다.
        duration?: number;

        // default: 100, 애니메이션 움직임의 양입니다. 단위는 px이며, 0보다 작을 수 없습니다.
        amount?: number;

        // default: false, 범위를 벗어났을 때 애니메이션 재적용 여부입니다.
        repeat?: boolean;
    }
   */
export var ScrollAnimation = function (_a) {
    var children = _a.children, _b = _a.startingPoint, startingPoint = _b === void 0 ? 'top' : _b, _c = _a.duration, duration = _c === void 0 ? 1 : _c, _d = _a.amount, amount = _d === void 0 ? 100 : _d, _e = _a.repeat, repeat = _e === void 0 ? false : _e, rest = __rest(_a, ["children", "startingPoint", "duration", "amount", "repeat"]);
    var _f = useScrollAnimation(repeat), ref = _f.ref, isInViewport = _f.isInViewport;
    if (duration < 0)
        throw new Error('duration 값(애니메이션 지속 시간)은 0보다 작을 수 없습니다.');
    if (amount < 0)
        throw new Error('amount 값(애니메이션 움직임 양)은 0보다 작을 수 없습니다.');
    return (_jsxs(Container, __assign({}, rest, { ref: ref, startingPoint: startingPoint, duration: duration, amount: amount, className: isInViewport ? "frame-in ".concat(rest.className) : rest.className }, { children: [children, _jsx("div", {})] })));
};
