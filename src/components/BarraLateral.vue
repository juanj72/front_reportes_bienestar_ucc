<template>
<body>
	
	<div class="sidebar">
		<a href="#">Inicio</a>
		<a href="#">Perfil</a>
		<a href="#">Configuración</a>
		<a href="#">Cerrar sesión</a>
	</div>

	<div class="main">
		<h1>Bienvenido</h1>
		<p>Esta es una dashboard sencilla</p>
	</div>
</body>

</template>

<script>

export default{
    name:"BarraLateral",
	components:{
		

	}
    
}

</script>

<style scoped>

/* Estilos para dispositivos de pantalla grande */
@media only screen and (min-width: 768px) {
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: 200px;
		height: 100%;
		background-color: #333;
		padding-top: 20px;
	}

	.sidebar a {
		display: block;
		color: #fff;
		padding: 16px;
		text-decoration: none;
	}

	.sidebar a:hover {
		background-color: #666;
	}

	.main {
		margin-left: 200px;
		padding: 0 20px;
	}
}

/* Estilos para dispositivos de pantalla pequeña */
@media only screen and (max-width: 767px) {
	.sidebar {
		position: fixed;
		top: 0;
		left: -200px;
		width: 200px;
		height: 100%;
		background-color: #333;
		padding-top: 20px;
		transition: all 0.3s;
	}

	.sidebar a {
		display: block;
		color: #fff;
		padding: 16px;
		text-decoration: none;
	}

	.sidebar a:hover {
		background-color: #666;
	}

	.main {
		padding: 0 20px;
	}

	.show-sidebar {
		left: 0;
	}
}



</style>