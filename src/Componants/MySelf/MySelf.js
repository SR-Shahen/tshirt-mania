import React from 'react';
import Speacial from '../Speacial/Speacial';

const MySelf = ({ house, ornament }) => {
    return (
        <div>
            <h3>eita ami</h3>
            <p>house:{house}</p>
            <Speacial ornament={ornament}></Speacial>
        </div>
    );
};

export default MySelf;