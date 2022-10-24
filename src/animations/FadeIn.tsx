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
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

function FadeIn({ children }: Props) {
  return (
    <motion.div
      variants={variants}
      initial={VARIANT.INITIAL}
      animate={VARIANT.ANIMATE}
      exit={VARIANT.EXIT}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export { FadeIn };
