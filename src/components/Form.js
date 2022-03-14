import React, { useState } from "react";
import "../Form.css";
import { useNavigate } from "react-router";
export default function Form() {
    const navigate = useNavigate();
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        shortdesc: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const handlesubmit = () => {

        setSubmitted(true);
        if (values.firstName.trim() !== "" && values.lastName.trim() !== "" && values.email.trim() !== "" && values.dob.trim() !== "" && values.shortdesc.trim() !== "")
            if (validateEmail(values.email)) {
                let data=[];

                if (localStorage.getItem("Data") !== null) {
                    data=JSON.parse(localStorage.getItem("Data"))
                }
                data.push(values);

                localStorage.setItem('Data', JSON.stringify(data));
                navigate("/home", { replace: true });
            }
            else
                alert("Email not valid");
        else
            alert("Please fill every field");
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    return (
        <div class="form-container">
            <form class="register-form" >

                <input
                    onChange={handleChange}
                    value={values.firstName}
                    id="first-name"
                    class="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                />
                {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}

                <input
                    onChange={handleChange}
                    value={values.lastName}
                    id="last-name"
                    class="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                />
                {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}


                <input
                    onChange={handleChange}
                    value={values.email}
                    id="email"
                    class="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                />

                {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}

                <input
                    onChange={handleChange}
                    value={values.dob}
                    id="dob"
                    class="form-field"
                    type="text"
                    placeholder="dob"
                    name="dob"
                />

                {submitted && !values.dob ? <span id="dob-error">Please enter dob</span> : null}

                <input
                    onChange={handleChange}
                    value={values.shortdesc}
                    id="shortdesc"
                    class="form-field"
                    type="text"
                    placeholder="shortdesc"
                    name="shortdesc"
                />
                {submitted && !values.shortdesc ? <span id="shortdesc-error">Please enter an shortdesc</span> : null}

                <button class="form-field" type="button" onClick={handlesubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}
