import React from 'react';
import Particle from '../Component/Particle';

const Contact = () => {
    return (
        <div>
        <Particle>

        </Particle>

        <div className="form">
            <h3>Have any query write down here !!!</h3>
            <form action="https://formsubmit.co/mahlilmahee@gmail.com" method="POST">
     <input type="text" placeholder='your Name' name="name" required/>
     <input type="hidden" name="_next" value="http://127.0.0.1:5173/thanks"></input>
     <input type="email" placeholder='your email' name="email" required/>
     {/* <input type="hidden" name="_captcha" value="false"></input> */}
     <button type="submit" className='submit'>Send</button>
</form>
        </div>
  
        </div>
    );
};

export default Contact;