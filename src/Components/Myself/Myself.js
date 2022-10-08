import React from 'react';
import Special from '../Special/Special';

const Myself = ({house, ring}) => {
    return (
        <div>
            <h4>My Self</h4>
            <p>House: {house}</p>
            <Special ring={ring}></Special>
        </div>
    );
};

export default Myself;