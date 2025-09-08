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
            if (password === "") {
                document.getElementById("p-error").textContent = "Enter the password"
            } else if (password.length < 8) {
                document.getElementById("p-error").textContent = "Enter the unique password"
            } else {
                document.getElementById("p-error").textContent = ""
            }

            const confirmPassword = document.getElementById("c-password").value.trim();
            if (confirmPassword === "") {
                document.getElementById("C-error").textContent = "Please confirm password";
            } else if (password !== confirmPassword) {
                document.getElementById("C-error").textContent = "Password doesn't match"
            } else {
                document.getElementById("C-error").textContent = "";
            }

            const phone = document.getElementById("No").value.trim();
            if (phone === "") {
                document.getElementById("no-error").textContent = "Enter phone number"
            } else if (!phone.startsWith("03")) {
                document.getElementById("no-error").textContent = "Must start with 03"
            } else if (phone.length < 11) {
                document.getElementById("no-error").textContent = "Must be 11 digits"
            } else {
                document.getElementById("no-error").textContent = ""
            }
            const address = document.getElementById("address").value.trim();
            if (address === "") {
                document.getElementById("ad-error").textContent = "Enter the address"
            } else if (address.length < 10) {
                document.getElementById("ad-error").textContent = "Write atleast 10 characters"
            } else {
                document.getElementById("ad-error").textContent = ""
            }

            const gender = document.querySelector('input[name="radio"]:checked');
            if (!gender) {
                document.getElementById("gender-error").textContent = "Please select the gender";
            } else {
                document.getElementById("gender-error").textContent = "";
            }
            return valid;
        }
        const handlesubmit = (e) => {
            e.preventDefault()
            if (validform()) {
                const firstname = document.getElementById("first").value.trim();
                const lastname = document.getElementById("second").value.trim();
                const email = document.getElementById("email").value.trim();
                const password = document.getElementById("password").value.trim();
                const date = document.querySelector('input[type="date"]').value;
                const phone = document.getElementById("No").value.trim();
                const address = document.getElementById("address").value.trim();
                const gender = document.querySelector('input[name="radio"]:checked').value;

                const tbody = document.getElementById("table-body");
                const newRow = document.createElement("tr")

                newRow.innerHTML = `
                <td>${firstname}</td>
                <td>${lastname}</td>
                <td>${email}</td>
                <td>${password}</td>
                <td>${date}</td>
                <td>${phone}</td>
                <td>${address}</td>
                <td>${gender}</td>
                `
                tbody.appendChild(newRow);

                form.reset();
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
            <div style={{ backgroundColor: "#f7f8ffff" }}>
                <div className='d-flex align-items-center justify-content-between p-2'>
                    <h1> </h1>
                    <h2>Add User</h2>
                    <div className='bg-dark p-1 rounded-1'><h3 className='text-white fs-5 pointer'>Login</h3></div>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <form id='form' className="form-content p-5 rounded-2" action="">
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
                    <div className="radio d-flex gap-3">
                        <input type="radio" name="radio" value="Male" />Male
                        <input type="radio" name="radio" value="Female" />Female
                    </div>
                    <span id='gender-error' className='error'></span>
                    <button className='text-white d-block m-auto bg-dark mt-3 p-1 rounded-2'>Register</button>
                </form>
            </div>
            <table id='user-table' className='table mt-4' border={1}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Date</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody id='table-body'>

                </tbody>
            </table>
        </>
    )
}

export default Form