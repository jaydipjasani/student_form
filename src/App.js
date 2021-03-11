import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import "./App.css";

// used Hook forms
const App = () => {

  const { register, handleSubmit, errors } = useForm();

  // Declare state to store input value in Array
  const [newvalue, setNewValue] = useState([]);

  // submit value and store in Array and check validation
  const submitData = (data) => {
    setNewValue([...newvalue, data]);
  }

  return (

    // Form Design
    <div className="main">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit(submitData)}>
        <label>First Name :</label><br></br>
        <input type="text" name="fname" autoComplete="off"
          ref={register({ required: '**Please Enter First Name' })}
          placeholder="Enter First Name"></input><br></br>
        {errors.fname && <span>{errors.fname.message}</span>}<br></br>


        <label>Last Name :</label><br></br>
        <input type="text" name="lname" autoComplete="off"
          ref={register({ required: true })}
          placeholder="Enter Last Name"></input><br></br>
        {errors.lname && <span>**Please Enter Last Name</span>}<br></br>


        <label>Email :</label><br></br>
        <input type="email" name="email" autoComplete="off"
          ref={register({ pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, required: true })}
          placeholder="Enter Email Address"></input><br></br>
        {errors.email && <span>**Please Enter Valid Email</span>}<br></br>


        <label>Phone No. :</label><br></br>
        <input type="number" name="phone" autoComplete="off"
          ref={register({ required: true, pattern: /^[0-9]{10}$/ })}
          placeholder="Enter Phone No."></input><br></br>
        {errors.phone && <span>**Please Enter 10 Digits</span>}<br></br>


        <button className="btn" type="submit">Register</button>
      </form>



      {/* Display Registered Records */}



      <table className="tabledata">
        <tbody>
          <tr>
            <th>First_Name</th>
            <th>Last_Name</th>
            <th>Email</th>
            <th>Phone No.</th>
          </tr>

          {
            newvalue.map((items, i) => {
              return (
                <tr key={i}>
                  <td>{items.fname}</td>
                  <td>{items.lname}</td>
                  <td>{items.email}</td>
                  <td>{items.phone}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;










/* without Hook Form  (remove only /* comments)

import React, { useState } from 'react'
import "./App.css"

const App = () => {


  // Declare State for store input value
  const [inputValue, setInputValue] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: ""
  });

  // Declare state to store input value in Array
  const [newvalue, setNewValue] = useState([]);


  // Handle onchange Event to get Data
  const handleInputValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value });

  }

  // submit value and store in Array and check validation
  const submitData = (e) => {
    e.preventDefault();

    // const checkvalidation = () => {
    //   if (inputValue.fname === "") {
    //     alert("Please Enter FirstName Field");
    //   } else {
    //     return true;
    //   }
    // }
    // if (checkvalidation()) {


      const newData = { ...inputValue }
      setNewValue([...newvalue, newData]);

      setInputValue({ fname: "", lname: "", email: "", phone: "" });
    }

    // else {
    //   return false;
    // }
  // }

  // const {fname,lname,email,phone} = inputValue;
  // if(fname && lname && email && phone){
  //   const newData = { ...inputValue }
  //   setNewValue([...newvalue, newData]);

  //   setInputValue({ fname: "", lname: "", email: "", phone: "" });
  // }else{
  //   alert("Please Fill all Field")
  // }

  // }


  return (

    // Form Design
    <div className="main">
      <h1>Registration Form</h1>

      <form>
        <label>First Name :</label><br></br>
        <input type="text" name="fname" autoComplete="off"
          value={inputValue.fname}
          onChange={handleInputValue}
          placeholder="Enter First Name"></input><br></br>


        <label>Last Name :</label><br></br>
        <input type="text" name="lname" autoComplete="off"
          value={inputValue.lname}
          onChange={handleInputValue}
          placeholder="Enter Last Name"></input><br></br>

        <label>Email :</label><br></br>
        <input type="email" name="email" autoComplete="off"
          value={inputValue.email}
          onChange={handleInputValue}
          placeholder="Enter Email Address"></input><br></br>

        <label>Phone No. :</label><br></br>
        <input type="number" name="phone" autoComplete="off"
          value={inputValue.phone}
          onChange={handleInputValue}
          placeholder="Enter Phone No."></input><br></br>

        <button className="btn" type="submit" onClick={submitData}>Register</button>
      </form>

*/

      // {/* Display Registered Records */} 

/*

<table className="tabledata">
  <tbody>
    <tr>
      <th>First_Name</th>
      <th>Last_Name</th>
      <th>Email</th>
      <th>Phone No.</th>
    </tr>

    {
      newvalue.map((items, i) => {
        return (
          <tr key={i}>
            <td>{items.fname}</td>
            <td>{items.lname}</td>
            <td>{items.email}</td>
            <td>{items.phone}</td>
          </tr>
        )
      })
    }
  </tbody>
</table>
</div>
)
}

export default App; */




