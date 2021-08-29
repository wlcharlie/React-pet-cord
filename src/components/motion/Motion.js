import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  close: { opacity: 0 },
};

const Motion = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      exit="close"
      transition={{ delay: 0.3, duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
