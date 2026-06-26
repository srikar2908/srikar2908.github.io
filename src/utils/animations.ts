import { useReducedMotion } from 'framer-motion';

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function useAnimationVariants() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const instant = { opacity: 1, y: 0, scale: 1 };
    return {
      fadeUp: {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      },
      fadeIn: {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      },
      staggerContainer: {
        hidden: {},
        visible: {},
      },
      scaleIn: {
        hidden: { opacity: 1, scale: 1 },
        visible: { opacity: 1, scale: 1 },
      },
    };
  }

  return {
    fadeUp,
    fadeIn,
    staggerContainer,
    scaleIn,
  };
}
