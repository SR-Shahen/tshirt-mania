import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandapa';

const Speacial = () => {
    const chop = useContext(RingContext)
    return (
        <div>
            <p>{chop}</p>
        </div>
    );
};

export default Speacial;