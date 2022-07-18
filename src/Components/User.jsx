import React, { useState } from "react";
import { nanoid } from "nanoid";
const User = () => {
  const [form, setForm] = useState({
    id: nanoid(4),
    name: "",
    month: "",
    cipher: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
    // cipher()
  };

  // const  cipher=()=>{
  //   // console.log(form)

  // }

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(typeof (+form.month));
    form.name = form.name.toUpperCase();
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKL";
    // let alphabets="abcdefghijklmnopqrstuvwxyz"
    // form.cipher=""
    let bag = "";
    for (let i = 0; i < form.name.length; i++) {
      if (form.name[i] === " ") {
        bag += " ";
      } else {
        for (let j = 0; j < alphabets.length; j++) {
          if (form.name[i] === alphabets[j]) {
            bag += alphabets[j +(+form.month)];
           break;
          }
        }
      }
    }
    console.log(bag)
    form.cipher = bag;
    console.log(form);






    fetch("http://localhost:8080/data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    });
  };

  return (
    <div>
      <input
        className="inp"
        type="text"
        placeholder="write something"
        name="name"
        onChange={handlechange}
        style={{ textTransform: "uppercase" }}
      />
      <input
        type="text"
        placeholder="write month"
        name="month"
        onChange={handlechange}
      />
      <button className="inpbtn" onClick={handlesubmit}>
        ADD
      </button>
    </div>
  );
};

export default User;
