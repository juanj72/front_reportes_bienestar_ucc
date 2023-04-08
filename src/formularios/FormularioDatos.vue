<template>
    <img src="../assets/logo.png" alt="">
<body>
	<div class="form-container">
		<h1>Formulario de Contacto</h1>
		<form>
			<label for="nombre">Nombre:</label>
			<input type="text" id="nombre" name="nombre" required>

			<label for="correo">Correo Electrónico:</label>
			<input type="email" id="correo" name="correo" required>

			<label for="asunto">Asunto:</label>
			<input type="text" id="asunto" name="asunto" required>

			<label for="mensaje">Mensaje:</label>
			<textarea id="mensaje" name="mensaje" required></textarea>

			<input type="submit" value="Enviar">
		</form>
	</div>
</body>


</template>

<script>
export default{
    name:'FormularioDatos',


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
	box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
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

</style>