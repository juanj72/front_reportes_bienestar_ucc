<template>
    <div class="login">
      <h2>Inicio de sesión</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Correo electrónico:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  </template>
  
  <script>

  export default {
    name:'LoginAuth',
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      submitForm() {
        // Aquí podrías enviar una solicitud al backend para autenticar al usuario
        // y redirigirlo a la página de inicio si los credenciales son válidos.
      },
    },
  };
  </script>
  
  <style>
  .login {
    max-width: 400px;
    margin: 0 auto;
  }
  .form-group {
    margin-bottom: 20px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  button[type="submit"] {
    padding: 10px 20px;
    background-color: #008cba;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button[type="submit"]:hover {
    background-color: #006a8e;
  }
  </style>