import React from 'react'
import "./Form.css"

function Form() {
    return (
        <div className='d-flex justify-content-center mt-4'>
            <div class="form-content p-4 rounded-2">
            <form action="">
                <label>First Name</label>
                <input className='input' type="text" />
                <label for="">Last Name</label>
                <input className='input' type="text" />
                <label for="">Email</label>
                <input className='input' type="email" />
                <label for="">Password</label>
                <input className='input' type="password" />
                <label for="">Confirm Password</label>
                <input className='input' type="password" />
                <label for="">Date</label>
                <input className='input' type="date" />
                <label for="">Phone Number</label>
                <input className='input' type="number" />
                <label for="">Address</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <label for="">Gender</label>
                <div class="radio d-flex gap-3">
                    <input type="radio" name="" id="" />Male
                    <input type="radio" name="" id="" />Female
                </div>
                <button className='text-white d-block m-auto bg-dark mt-2 p-1 rounded-2'>Register</button>
            </form>
            </div>
        </div>
    )
}

export default Form