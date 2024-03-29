import React, { useEffect, useState } from "react";
import "./style.css"
const UserForm = () => {
  const [show, setShow] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let res = await fetch("http://localhost:8080/data");
    let data = await res.json(); 
    // console.log(data)
    setShow(data);
  };

  return (
    <div className="main">
      <table >
        <thead >
          <tr >
          <th >Full Name</th>
          <th >Month of Birth</th>
          <th>Encoded Full Name</th>
          </tr>
        </thead>
        {show.map((e) => (
          <tbody >
            <tr>
            <td>{e.name}</td>
            <td>{e.month}</td>
            <td>{e.cipher}</td>
            </tr>
          </tbody>
          
        ))}
      </table>
    </div>
  );
};

export default UserForm;
