import React from 'react';
import Particle from '../Component/Particle';
import Proimg from '../Component/Proimg';
import TextAnimator from '../Component/TextAnimator';

const Home = () => {
    return (
        <div>
             <Particle></Particle>

 <div  className="makeme">
 <TextAnimator></TextAnimator> 
<Proimg></Proimg>
</div> 
         </div>
    );
};

export default Home;