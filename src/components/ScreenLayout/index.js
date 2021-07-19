import React from 'react';
import './styles.scss'



const ScreenLayout = ({children}) => {
    return (
        <main className='root'>
            <div className='header'>
                <img src='https://www.haptik.ai/hubfs/haptik-logo-1%20(1)%201-2.svg' alt='' />
                <p>Aniket Anand</p>
            </div>
            <div className='wrapper'>
                <div className='body'>
                    {children}
                </div>
            </div>
        </main>
    );
};

export default ScreenLayout;

