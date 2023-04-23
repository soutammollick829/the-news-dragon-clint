import React from 'react';
import qzoon1 from '../../../assets/qZone1.png'
import qzoon2 from '../../../assets/qZone2.png'
import qzoon3 from '../../../assets/qZone3.png'

const QZoon = () => {
    return (
        <div className='bg-secondary mt-4 p-2'>
            <h4>Q-Zoon</h4>
            <img className='w-100' src={qzoon1} alt="photo" />
            <img className='w-100' src={qzoon2} alt="photo" />
            <img className='w-100' src={qzoon3} alt="photo" />
        </div>
    );
};

export default QZoon;