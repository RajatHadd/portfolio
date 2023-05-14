
  const textField = {
    firstState: { x: 0, scale: 1, rotate: 0 },
    activeState: {
      scale: 1.1
    },
    bounceState: {
      rotate: [5, -5, 0],
      transition: {
        type: "spring",
        bounce: 20
      }
    }
  };
  const logo = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        type: "fadeIn",
        delay: 0.05,
        staggerChildren: 0.09
      }
    }
  };
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        type: "fadeIn",
        delay: 0.005,
        staggerChildren: 0.009
      }
    }
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  
  export {  textField, letter, sentence, logo };
  