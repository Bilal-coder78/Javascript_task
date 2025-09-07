import React, { useEffect } from 'react'
import "./Form.css"

function Form() {
    useEffect(() => {
        const form = document.getElementById("form")
        const validform = () => {
            let valid = true;
            const firstname = document.getElementById("first").value.trim();
            if (firstname === '') {
                document.getElementById("f-error").textContent = "Enter a name"
                valid = false;
            } else if (firstname.length < 4) {
                document.getElementById("f-error").textContent = "It should atleast five"
                valid = false;
            }
            else {
                document.getElementById("f-error").textContent = "";
            }
            const lastname = document.getElementById("second").value.trim();
            if (lastname === '') {
                document.getElementById("l-error").textContent = "Enter last name"
                valid = false;
            } else if (lastname.length < 4) {
                document.getElementById("l-error").textContent = "It should atleast five"
                valid = false;
            }
            else {
                document.getElementById("l-error").textContent = "";
            }

            const email = document.getElementById("email").value.trim();
            if (email === "") {
                document.getElementById("email-error").textContent = "Enter a email";
            } else if (!email.endsWith("@gmail.com")) {
                document.getElementById("email-error").textContent = "Enter valid email"
            } else if (email.indexOf("@gmail.com") === 0) {
                document.getElementById("email-error").textContent = "Enter a name before @gmail.com";
                valid = false;
            }
            else {
                document.getElementById("email-error").textContent = "";
            }

            const password = document.getElementById("password").value.trim();
            if(password === ""){
                document.getElementById("p-error").textContent= "Enter the password"
            }else if(password.length < 8){
                document.getElementById("p-error").textContent= "Enter the unique password"
            }else{
                document.getElementById("p-error").textContent= ""
            }

            return valid;
        }
        const handlesubmit = (e) => {
            if (!validform()) {
                e.preventDefault()
            }
        }

        const handleinput = () => {
            validform();
        }
        form.addEventListener("submit", handlesubmit);
        form.addEventListener("input", handleinput)
        return () => {
            form.removeEventListener("submit", handlesubmit);
            form.removeEventListener("input", handleinput)
        };
    }, [])
    return (
        <>
            <div className='d-flex justify-content-center mt-4'>
                <form id='form' class="form-content p-5 rounded-2" action="">
                    <label>First Name</label>
                    <input className='input' id='first' type="text" />
                    <span id='f-error' className='error'></span>
                    <label for="">Last Name</label>
                    <input className='input' id='second' type="text" />
                    <span id='l-error' className='error'></span>
                    <label for="">Email</label>
                    <input className='input' id='email' type="email" />
                    <span id='email-error' className='error'></span>
                    <label for="">Password</label>
                    <input className='input' id='password' type="password" />
                    <span id='p-error' className='error'></span>
                    <label for="">Confirm Password</label>
                    <input className='input' id='c-password' type="password" />
                    <span id='C-error' className='error'></span>
                    <label for="">Date</label>
                    <input className='input' type="date" />
                    <label for="">Phone Number</label>
                    <input className='input' id='No' type="number" />
                    <span id='no-error' className='error'></span>
                    <label for="">Address</label>
                    <textarea name="" id="address" cols="30" rows="10"></textarea>
                    <span id='ad-error' className='error'></span>
                    <label for="">Gender</label>
                    <div class="radio d-flex gap-3">
                        <input type="radio" name="radio" id="" />Male
                        <input type="radio" name="radio" id="" />Female
                    </div>
                    <button className='text-white d-block m-auto bg-dark mt-2 p-1 rounded-2'>Register</button>
                </form>
            </div>
        </>
    )
}

export default Form