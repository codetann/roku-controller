import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const VARIANT = {
  INITIAL: "initial",
  ANIMATE: "animate",
  EXIT: "exit",
};

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function FadeIn({ children }: Props) {
  return (
    <motion.div
      variants={variants}
      initial={VARIANT.INITIAL}
      animate={VARIANT.ANIMATE}
      exit={VARIANT.EXIT}
    >
      {children}
    </motion.div>
  );
}

export { FadeIn };
