// variants.js
const variants = (direction, delay) => {
    return {
      hidden: {
        opacity: 0,
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : "0%",
        y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : "0%",
      },
      visible: {
        opacity: 1,
        x: "0%",
        y: "0%",
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  
  export default variants;
  