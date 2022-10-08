import React from 'react';
import Brother from '../Myself/Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({house , ring}) => {
    return (
        <div>
            <h4>Father</h4>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <Myself
                    house={house}
                    ring ={ring}
                ></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </section>
        </div>
    );
};

export default Father;