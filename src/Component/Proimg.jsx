import React from 'react';
import { animated, useSpring } from '@react-spring/web'
const Proimg = () => {

    const springs = useSpring({
        from: { x: 600 },
        to: { x: 20 },
        config:{duration: 1500}
      })
    
    return (
        <animated.div className='imageani'  style={{
           
            background: '#FD0D0D59',
            borderRadius: 18,
            overflow:'none',
            ...springs,
          }}>
            <img className="onlyimg" src="https://i.ibb.co/qFM7pDN/photo-2023-01-06-11-53-32-removebg-preview.png" alt="" width="100%" />
        </animated.div>
    );
};

export default Proimg;