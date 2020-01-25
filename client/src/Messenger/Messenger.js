import React from 'react';
import Cookies from 'universal-cookie';

const Messenger = props =>  {
    const cookie = new Cookies();
    let token = cookie.get('cookieMessengerToken');


    validLogin();

    function validLogin (){
        if ( token === undefined) {
            props.history.push({pathname:'/login'});
        }
    };

    return(
        <div className='container'>   
            <h1 >Cookie Messenger</h1>
            <h5>SALA DE BATE PAPO</h5>
        </div>
    );
};

export default Messenger;