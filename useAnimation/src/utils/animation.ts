import { Variants } from "framer-motion";

export const animationStart = 1;

export const reveal: Variants = {
  hiddenVariant: { y: -50, opacity: 0 },
  revealedVariant: {
    y: 0,
    opacity: 1,
  },
};

export const inview: Variants = {
  hiddenVariant: { x: -50, opacity: 0 },
  revealedVariant: {
    x: 0,
    opacity: 1,
  },
};

export const scaleY:Variants = {
  hiddenVariant: {scaleY:5, transformOrigin: "top"},
  revealedVariant: {
    scaleY: 1,
  },
}
