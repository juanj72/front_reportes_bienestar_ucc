<template>
    <img src="../assets/logo.png" alt="">

    <body>
        <div class="form-container">
            <h1>Consultar evento</h1>
            <form @submit.prevent="submitForm">
                <label for="nombre">id del evento:</label>
                <input type="number" v-model="idEvento.id" required>


                <input type="submit" value="Enviar">
            </form>
        </div>

        <div class="card">

           

           <div v-if="datos">
                <div class="card-info" >
                    <h2>Título de la tarjeta</h2>
                    <h4>id</h4>
                    <p>{{ datos.idEvento }}</p>
                    <h4>Nombre</h4>
                    <p>{{ datos.nombre_evento }}</p>
                    <h4>Fecha de inicio</h4>
                    <p>{{ datos.fecha_inicio }}</p>
                    <h4>Estado</h4>
                    <p>{{ datos.estado }}</p>

                </div>
               

            </div> 
      


        </div>

    </body>
</template>

<script>
import axios from 'axios';
export default {
    name: 'FormularioDatos',

    data() {
        return {
            idEvento: {
                id: null,
            },
            datos: null,


        }
    },


    methods: {
        submitForm() {
            axios.post('http://127.0.0.1:8000/unico/', {
                id: this.idEvento.id,

            })
                .then(response => {
                    this.datos = response.data;
                    console.log(this.idEvento)
                })
                .catch(error => {
                    console.log(error);
                });
        },
    },




}
</script>


<style scoped>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: sans-serif;
    background-color: #f2f2f2;
}

.form-container {
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    max-width: 500px;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

form label {
    display: block;
    color: #333;
    margin-bottom: 5px;
}

form input[type="text"],
form input[type="email"],
form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    background-color: #f2f2f2;
    color: #333;
}

form input[type="submit"] {
    display: block;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

form input[type="submit"]:hover {
    background-color: #666;
}

@media screen and (max-width: 500px) {
    .form-container {
        max-width: 100%;
        margin: 20px;
    }
}

.card {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    max-width: 500px;
}

.card img {
    border-radius: 5px;
    margin-right: 10px;
}

.card-info {
    flex: 1;
}

.card-info h2 {
    margin: 0;
}

.card-info p {
    margin: 10px 0;
}

.button {
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
}

.button:hover {
    background-color: #0069d9;
    cursor: pointer;
}
</style>