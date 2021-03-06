import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const PrivateRoute = ({ component: Component, path }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    close: { opacity: 0 },
  };

  return (
    <Route
      key={path}
      path={path}
      render={() =>
        isLoggedIn ? (
          <motion.div
            key={path}
            variants={variants}
            initial="hidden"
            animate="show"
            exit="close"
            transition={{ delay: 0.3 }}
          >
            <Component />
          </motion.div>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
