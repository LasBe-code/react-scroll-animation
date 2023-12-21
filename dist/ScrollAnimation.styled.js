var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { keyframes } from 'styled-components';
var frameInAnimation = function (animation) { return keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    opacity: 0;\n    ", "\n    ", "\n    ", "\n    ", "\n  }\n\n  100%{\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n"], ["\n  0% {\n    opacity: 0;\n    ", "\n    ", "\n    ", "\n    ", "\n  }\n\n  100%{\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n"])), animation.startingPoint === 'top' && "transform: translateY(-".concat(animation.amount, "px);"), animation.startingPoint === 'bottom' && "transform: translateY(".concat(animation.amount, "px);"), animation.startingPoint === 'right' && "transform: translateX(".concat(animation.amount, "px);"), animation.startingPoint === 'left' && "transform: translateX(-".concat(animation.amount, "px);")); };
export var Container = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  &.frame-in {\n    animation: ", " ", "s\n      forwards;\n  }\n"], ["\n  &.frame-in {\n    animation: ", " ", "s\n      forwards;\n  }\n"])), function (props) { return frameInAnimation({ startingPoint: props.startingPoint, amount: props.amount }); }, function (props) { return props.duration; });
var templateObject_1, templateObject_2;
