import React, { useState } from 'react';



function FormLogin() {

  const [usuario, setUsuario] = useState({ nombre: '', email: '', password: '' });

  //   const [nombre, setNombre] = useState();
  //   const [email, setEmail] = useState();
  //   const [password, setPassword] = useState();


  const handleNombreChange = function (event) {
    setUsuario({ ...usuario, nombre: event.target.value });
  }

  const handleEmailChange = function (event) {
    setUsuario({ ...usuario, email: event.target.value });
  }

  const handlePasswordChange = function (event) {
    setUsuario({ ...usuario, password: event.target.value });
  }

  const loginButton = function (event) {
      console.log("aca")
      fetch("http://localhost:8080/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },      
        body: JSON.stringify({ email : usuario.email, password : usuario.password })
      })
      
        .then(res => res.json())
        .then(result => {
          console.log("Has llegado")
        })



    }



    return (
      <form>
        <div className="form-group">
          <label for="exampleInputName1">Nombre y Apellido</label>
          <input type="text" className="form-control" id="exampleInputName1" onChange={handleNombreChange} value={usuario.nombre} />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmailChange} value={usuario.email} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={handlePasswordChange} value={usuario.password} />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button id="login" type="button" onClick={loginButton} className="btn btn-primary">Login</button>
      </form>
    );
  }

  export default FormLogin;
