import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div>
            <div className="form-control w-full max-w-xs text-center">
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className="input input-bordered w-full max-w-xs" placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className="input input-bordered w-full max-w-xs" placeholder='description' {...register("description")} />
                    <input className="input input-bordered w-full max-w-xs" placeholder='price' type="number" {...register("price")} />
                    <input className="input input-bordered w-full max-w-xs" placeholder='Photo URL' type="text" {...register("img")} />
                    <button className="btn btn-xs btn-error m-3"> <input type="submit" value="Submit Review" /></button>
                </form>
            </div>

        </div>
    );
};

export default AddReview;