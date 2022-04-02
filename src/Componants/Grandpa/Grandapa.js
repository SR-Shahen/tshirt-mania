import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncale from '../Uncle/Uncle';
import './Grandpa.css'
export const RingContext = createContext('dimer chop')
const Grandapa = () => {
    const [house, setHouse] = useState(1);
    const handelBuyToHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }


    const gohona = "sonar bala"
    return (
        <div className='grandpa'>
            <p>house:{house}</p>
            <button onClick={handelBuyToHouse}>buy house</button>
            <RingContext.Provider value={house}>
                <div className='gndpa'>
                    <Father house={house} ></Father>
                    <Uncale house={house}></Uncale>
                    <Aunty house={house}></Aunty>
                </div>
            </RingContext.Provider>
        </div>
    );
};

export default Grandapa;