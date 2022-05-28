import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';


const Purchase = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    ///react hook infomation
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()))

    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    const onSubmit = async data => {
        console.log(data);

        const product = {
            name: data.name,
            email: data.email,
            address: data.address,
            qantity: data.qantity,
            number: data.number,

        }
        // send to img in  database 

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(inserted => {
                console.log('product', inserted);
                if (inserted.insertedId) {
                    toast.success('Product added successfully')
                    reset();
                }
                else {
                    toast.error('Failed to add the Product');
                }
            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }



    //purches data load api call

    console.log(service);
    return (



        <div className='m-20'>
            <h2 className="card-title m-5">Product Name: {service.name}</h2>
            {/* <h2 className="card-title ml-5">Per Unit Price:  ${service.perUnitPrice}</h2> */}
            <div className="card lg:card-side bg-base-100 shadow-xl gap-10">
                <figure><img src={service.img} alt="Album" /></figure>
                <div className='m-10'>
                    <h2 className="card-title">About Product Details</h2>
                    <p>{service.descrition}</p>
                    <h2 className="card-title">Please Provide Purchase Informatin</h2>

                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: ' Product Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {

                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: ' Product Address is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Phone Number"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("number", {
                                        required: {
                                            value: true,
                                            message: 'Phone number is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                                </label>
                            </div>



                            <h2>Available Qantity: {service.availableQuantity}</h2>
                            <h2>Available Qantity: ${service.perUnitPrice}</h2>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Minimum Order Qantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Minimum Order Qantity"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("qantity", {
                                        required: {
                                            value: true,
                                            message: 'Qantity is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.qantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.qantity.message}</span>}
                                </label>
                            </div>

                            <input className='btn w-full max-w-xs text-white' type="submit" value="Place Order" />
                        </form>
                    </div>

                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Place Order</button>
                    </div> */}
                </div>
            </div>
        </div>

    );
};

export default Purchase;