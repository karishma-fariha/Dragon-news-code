import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center items-center gap-3 flex-col'>
            <img src={logo} alt="" />
            <p className='text-xl text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(),'EEEE,MMMM,dd,yyyy')}</p>
        </div>
    );
};

export default Header;