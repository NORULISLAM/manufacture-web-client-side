import React from 'react';

const Toolses = ({ toolses }) => {

    return (
        <div class="card lg:max-w-lg w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={toolses.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{toolses.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default Toolses;