
import React, { useState } from 'react'
// import { useSpring, animated } from '@react-spring/web'
import { useTrail, animated, useSpring } from "@react-spring/web";
import './style.css'

const TextAnimator = () => {
  const items = ["Hello I am "," Mahlil , a ", "Fullstack Mern ", " Developer"];
  const config = { mass: 5, tension: 1000, friction: 200 };
  
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config:{duration:'1000'},
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });
  const springs = useSpring({
    from: { x: -600 },
    to: { x: 20 },
    config:{duration: 1000}
  })
    return (
      <div className="trails-main" onClick={() => set(state => !state)}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              ...springs,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
    );
};

export default TextAnimator;