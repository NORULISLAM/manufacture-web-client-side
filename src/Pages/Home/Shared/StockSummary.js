import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const StockSummary = () => {
    const stock = [
        {
            "id": "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
            "category": "Men's Sneaker",
            "name": "RICH DAD POOR DAD",
            "comment": "The Apple MacBook Air (M1, 2020) isn't just the best laptop Apple has ever made, it's the best laptop money can buy right now.",
            "seller": "Addidas",
            "price": 420,
            "stock": 20,

        },
        {
            "id": "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
            "category": "Men's Sneaker",
            "name": "MINDSET",
            "comment": "While Apple blew us away with the new MacBook Air (above), arch rival Microsoft has also impressed us with its new Surface Laptop 4, landing straight in at number 2.",
            "seller": "Addidas",
            "price": 196,
            "stock": 19,
            "ratings": 5,

        },
        {
            "id": "307f166f-1d04-4573-bc37-2f461ea9d4f7",
            "category": "Men's Sneaker",
            "name": "START WITH WHY",
            "comment": "In my time with the 14-inch MacBook Pro and its M1 Pro chip, I didn't encounter a single instance of slowdown, even when editing photos with Lightroom and Photoshop CC, while also cutting video in Premiere CC when connected to a 4K HDR external monitor.",
            "seller": "Addidas",
            "price": 245,
            "stock": 20,

        },
        {
            "id": "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
            "category": "Men's Sneaker",
            "name": "ATOMIC HABITS",
            "comment": "The MacBook Pro 14 combines a little bit of old with a whole lot of new for a tantalizing product that MacBook fans have been waiting years",
            "seller": "Addidas",
            "price": 229,
            "stock": 10,

        },
        {
            "id": "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
            "category": "Men's Sneaker",
            "name": "PSYCHOLOGY OF MONEY",
            "comment": "",
            "seller": "Addidas",
            "price": 287,
            "stock": 11,
            "ratings": 4,

        },
        {
            "id": "6e5593d3-557b-43cf-8dab-a5140faedfb0",
            "category": "Men's Sneaker",
            "name": "HOW TO WIN",
            "comment": "Much like the return of MagSafe, the abandonment of the Touch Bar is a prime example of why the new MacBooks are the best in years.",
            "seller": "Addidas",
            "price": 138,
            "stock": 19,
            "ratings": 3,

        },
        {
            "id": "9c0c13c2-54e4-4001-809b-afbd9d84037d",
            "category": "Men's Sneaker",
            "name": "7 HABITS",
            "comment": "he new Pro displays have also been upgraded with the iPad Pro's ProMotion feature, which is so good that it's now upsetting to use a laptop without it. ",
            "seller": "Addidas",
            "price": 226,
            "stock": 1,
            "ratings": 4,

        },
        {
            "id": "c9d1f410-d28f-49d9-9b01-d759b5acbeea",
            "category": "Men's Sneaker",
            "name": "THINK AND GROW RICH",
            "comment": "It's as if Apple designers decided to go through all the feedback they've gotten for years and cherry pick everyone's top handful ",
            "seller": "Addidas",
            "price": 319,
            "stock": 7,
            "ratings": 4,

        },
        {
            "id": "1564a06b-692f-4f2e-8413-9c8a1cc2da77",
            "category": "Men's Sneaker",
            "name": "YOUR OWN MIND",
            "comment": "I like that Apple got rid of the Touch Bar screen up top, which I didn't really find useful on earlier MacBook Pro models, and instead replaced it with full-sized function keys that are easy to tap to adjust the volume, screen brightness and more.",
            "seller": "Addidas",
            "price": 260,
            "stock": 4,
            "ratings": 5,

        }
    ]
    return (
        <div className='mb-20 m-5 text-center font-bold text-2xl' style={{ width: '100%', height: 300 }}>
            <h2 className='text-primary fw-bold text-center mt-2'>Our Most Popular Product Item</h2>
            <ResponsiveContainer>
                <PieChart width={800} height={600}>
                    <Pie data={stock} dataKey="ratings" cx="50%" cy="50%" outerRadius={90} fill="#8884d8" />
                    <Pie data={stock} dataKey="ratings" cx="50%" cy="50%" innerRadius={90} outerRadius={100} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
            </ResponsiveContainer>

        </div>



    );
};

export default StockSummary;