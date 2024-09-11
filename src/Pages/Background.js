// Background.js
import React from "react";
import BIRDS from "C:\Internship_qtech\react_js\project\src\Pages\vanta-master";

const Background = () => {
  const vantaRef = React.createRef();

  React.useEffect(() => {
    const vantaEffect = BIRDS({
      el: vantaRef.current,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef}></div>;
};

export default Background;
