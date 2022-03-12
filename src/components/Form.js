import React from "react";
import "../form.css";

export default function Form() {
    const [values,setValues]=useState({
        firstName:"",
        lastName:"",
        email:"",
        address:"",
        shortdesc:""
    });
    const [submited,setSubmitter]=useState(false);
    const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
  return (
    <div class="form-container">
      <form class="register-form">
        
        <input
        onChange={handleChange}
        value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
       {submitted && !values.firstName ?<span id="first-name-error">Please enter a first name</span>:null}
       
        <input
        onChange={handleChange}
            value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
       {submitted && !values.lastName ?<span id="last-name-error">Please enter a last name</span>:null}
       
       
        <input
        onChange={handleChange}
            value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        
        {submitted && !values.email ?<span id="email-error">Please enter an email address</span>:null}
        
        <input
        onChange={handleChange}
        value={values.address}
          id="address"
          class="form-field"
          type="text"
          placeholder="address"
          name="address"
        />
        
        {submitted && !values.address ?<span id="address-error">Please enter an email address</span>:null}
        
        <input
        onChange={handleChange}
        value={values.shortdesc}
          id="shortdesc"
          class="form-field"
          type="text"
          placeholder="shortdesc"
          name="shortdesc"
        />
        {submitted && !values.shortdesc ?<span id="shortdesc-error">Please enter an email address</span>:null}
      
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}