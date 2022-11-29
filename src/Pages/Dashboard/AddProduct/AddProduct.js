import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AddProduct= () => {

    const {user} =  useContext(AuthContext);
    const [category, setCategory] = useState('');
    const imageHostKey = process.env.REACT_APP_imagebb_apikey;
    console.log(imageHostKey)
    const navigate = useNavigate();

    const handelCategory = event =>{
        setCategory(event.target.value);
    }

    const formateTime = () => {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var d = new Date();
        var day = days[d.getDay()];
        var hr = d.getHours();
        var min = d.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        var ampm = "am";
        if (hr > 12) {
            hr -= 12;
            ampm = "pm";
        }
        var date = d.getDate();
        var month = months[d.getMonth()];
        var year = d.getFullYear();

        const x = day + " " + hr + ":" + min + ampm + " " + date + " " + month + " " + year;
        return x;
    }


    const newProduct = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const releaseprice = form.releaseprice.value;
        const originalprice = form.originalprice.value;
        const condition = form.condition.value;
        const useyear = form.useyear.value;
        const date = formateTime();

        // const img = form.img.value;
        // const img = form.img.files;
        // const img = form.img.FileList[0];
        // console.log(img);



        const categoryId = category;
        const description = form.description.value;
        const location = form.location.value;
        const advertise = 'No';
        const email = user.email;
        const uname = user.displayName;
        const status = 'Available';
        form.reset();
        toast.success('Product added successfully.');

        const newProduct = {
            name,
            releaseprice, 
            originalprice, 
            condition,
            useyear,
            // img,
            description,
            date,
            categoryId,
            location,
            advertise,
            status,
            email,
            uname
        }
        console.log(newProduct);
        fetch(`http://localhost:5000/dashboard/addproduct`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .catch(err => console.error(err))

        navigate('/dashboard/myproducts');
    }


    return (
        <div>
            <h2 className='text-3xl text-center my-10 font-bold text-sky-600'>Add Your Own Product</h2>
            <form onSubmit={newProduct}>
                <div className="hero min-h-screen bg-base-800 my-10">
                    <div className="">
                        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="product name" className="input input-bordered input-info" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Release Price</span>
                                    </label>
                                    <input type="text" name='releaseprice' placeholder="release price" className="input input-bordered input-info" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Original Price</span>
                                    </label>
                                    <input type="text" name='originalprice' placeholder="original price" className="input input-bordered input-info" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Condition</span>
                                    </label>
                                    <input type="text" name='condition' placeholder="Excellent/Good/Relatable" className="input input-bordered input-info" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Years of use</span>
                                    </label>
                                    <input type="text" name='useyear' placeholder="years of use" className="input input-bordered input-info" required />
                                </div>

                                <div className="form-control w-full max-w-xs input-info">
                                    <label className="label">
                                        <span className="label-text">Select Category</span>
                                    </label>
                                    <select name='category' onChange={handelCategory} className="select select-bordered input-info">
                                        <option disabled selected>Select Category</option>
                                        <option value="638391982f781b83922b9af0" >Bed Room Products</option>
                                        <option value="638391982f781b83922b9af2">Dining Room Products</option>
                                        <option value="638391982f781b83922b9af1">Kitchen Room Products</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Upload Image</span>
                                    </label>
                                    <input type="file" name='img' placeholder="image here" className="input input-bordered input-info" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Meeting Location</span>
                                    </label>
                                    <input type="text" name='location' placeholder="meeting location" className="input input-bordered input-info" required />
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="label-text">Write Description</span>
                                    </label>
                                    <textarea className="textarea textarea-info" name='description' placeholder="Description" required></textarea>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-info text-white" type='submit' >Add Product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;