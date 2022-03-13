import React,{useEffect,useState} from 'react'
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import "../Table.css"
const Table = () => {
    const [data,setData]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        if (localStorage. getItem("Data") !== null) {
            setData(JSON.parse(localStorage. getItem("Data")));
    }},[]);
  return (
    <div className='app-container'>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>Short Description</th>
                </tr>
            </thead>
            <tbody>
             
                {
                    data.map((values)=>{
                        return <tr>
                        <td>{values.firstName}</td>
                        <td>{values.lastName}</td>
                        <td>{values.email}</td>
                        <td>{values.dob}</td>
                        <td>{values.shortdesc}</td>
                    </tr>
                    })
                }
            </tbody>
        </table>
        <Button variant="contained"onClick={()=>{
          navigate("/");}}>Home</Button>
    </div>
  )
}

export default Table