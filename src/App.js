import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

import './App.css';

import Cartoon from './assets/cartoon.gif';

function App() {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: 'translate(-100%,0)' },
      { transform: 'translate(570%,0)' }
    ],
    timing: {
      duration: 5000,
      playbackRate: 1,
      iterations: Infinity,
      easing: "ease-in-out"
    }
  });

  const speedUpCartoon = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate * 1.1);
    setInterval(
      () => {
        if (animation.playbackRate > 1) {
          animation.playbackRate *= .9;
        }
      }, 6000)
  };

  return (
    <div className="wrapper" onClick={speedUpCartoon}>
      <img src={Cartoon} className="cartoon" ref={ref} alt="Main Character" />
    </div>
  );
}

export default App;
