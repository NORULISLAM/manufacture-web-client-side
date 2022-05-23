import React from 'react';
import Myimg from '../../tools-img/IMG_6937.jpg'
const MyPortfolio = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl m-16">
            <figure><img src={Myimg} alt="Album" /></figure>
            <div class="card-body m-10">
                <h2 class="card-title">Name: Norul Islam Jewel</h2>
                <p>Email address: juyelr16@gmail.com</p>
                <h3 class="card-title">Educational Background</h3>
                <h2>Tokyo English Specialissts College</h2>
                <p>department of English</p>
                <h2>Tokyo Social welfare College</h2>
                <p>department of International Informaton Technologie</p>
                <h1 className='text-2xl'>As a Web Developer Skill</h1>
                <p>JavaScript, ES6,HTMl5,CSS3,React,Node js,Firebase, MongoDB,</p>
                <p>recently, I make simple some project link below</p>
                - <a class="link link-secondary" href="https://inventroy-management.web.app/">Inventory Management system</a>

                - <a class="link link-secondary" href="https://stately-axolotl-fb7c01.netlify.app/">Review site</a>
                - <a class="link link-secondary" href=" https://regal-yeot-e26758.netlify.app/login">Jewel academey</a>
            </div>
        </div>
    );
};

export default MyPortfolio;